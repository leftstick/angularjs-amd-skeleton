/**
 *  Defines the Error Modal
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/FeatureBase', 'angular', './Error.html'], function(Base, angular, tpl) {

        var Feature = function() {
            Base.call(this, 'ErrorModal');
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
                    $templateCache.put('errorTpl', tpl);

                    events.on('error', function(opts) {
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
                                title: 'Exception',
                                backdrop: 'static',
                                content: opts.content,
                                animation: 'am-fade-and-slide-top',
                                templateUrl: 'errorTpl'
                            });
                        }, 0);
                    });

                }
            ]);
        };

        return Feature;

    });

})(define);
