/**
 *  Defines the Info Modal
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/FeatureBase', 'angular', './Info.html'], function(Base, angular, tpl) {

        var Feature = function() {
            Base.call(this, 'InfoModal');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            this.mod.run([
                'events',
                '$timeout',
                '$rootScope',
                '$templateCache',
                function(events, $timeout, $rootScope, $templateCache) {
                    $templateCache.put('infoTpl', tpl);

                    events.on('info', function(opts) {
                        if (!opts) {
                            return;
                        }

                        var scope = $rootScope.$new();

                        scope.close = function($hide) {
                            $hide();
                            if (angular.isFunction(opts.onClose)) {
                                opts.onClose();
                            }
                        };

                        $timeout(function() {
                            events.emit('modal', {
                                scope: scope,
                                title: 'Information',
                                backdrop: 'static',
                                content: opts.content,
                                animation: 'am-fade-and-slide-top',
                                templateUrl: 'infoTpl'
                            });
                        }, 0);
                    });

                }
            ]);
        };

        return Feature;

    });

})(define);
