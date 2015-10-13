/**
 *
 *  Defines `events` service which helps developer
 *  control EVENT system
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/ServiceBase', 'angular', 'lodash'], function(Base, angular, _) {

        var Service = function(features, app) {
            Base.call(this, features, app);
        };

        Service.prototype = new Base();

        Service.prototype.constructor = Service;

        Service.prototype.run = function() {
            this.app.factory('events', [
                '$rootScope',
                function($rootScope) {
                    var factory = {};

                    var listeners = {};

                    factory.emit = function(eventName, data) {
                        if (!eventName) {
                            return;
                        }
                        $rootScope.$broadcast(eventName, data);
                    };

                    factory.on = function(eventName, callback) {
                        if (!listeners[eventName]) {
                            listeners[eventName] = [];
                            $rootScope.$on(eventName, function(event, data) {
                                _.each(listeners[eventName], function(listener) {
                                    listener(data);
                                });
                            });

                        }
                        if (angular.isFunction(callback)) {
                            listeners[eventName].push(callback);
                        }
                    };

                    return factory;
                }
            ]);
        };

        return Service;

    });

}(define));
