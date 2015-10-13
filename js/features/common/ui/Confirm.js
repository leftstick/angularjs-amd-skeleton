/**
 *  Defines the Confirm Modal
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/FeatureBase', './Confirm.html'], function(Base, tpl) {

        var Feature = function() {
            Base.call(this, 'ConfirmModal');
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

                    $templateCache.put('confirmTpl', tpl);

                    events.on('confirm', function(opts) {
                        if (!opts) {
                            return;
                        }

                        var scope = $rootScope.$new();

                        scope.confirm = function($hide) {
                            $hide();
                            if (angular.isFunction(opts.onConfirm)) {
                                opts.onConfirm();
                            }
                        };

                        events.emit('modal', {
                            scope: scope,
                            title: 'Confirm',
                            content: opts.content,
                            animation: 'am-fade-and-slide-top',
                            templateUrl: 'confirmTpl'
                        });
                    });

                }
            ]);
        };

        return Feature;

    });

})(define);
