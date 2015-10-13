/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define, global) {
    'use strict';

    define(['lib/ServiceBase', 'angular', 'lodash'], function(Base, angular, _) {

        var Service = function(features, app) {
            Base.call(this, features, app);
        };

        Service.prototype = new Base();

        Service.prototype.constructor = Service;

        Service.prototype.run = function() {
            this.app.service('utils', [
                '$q',
                '$window',
                'CONF',
                function($q, $window, CONF) {

                    this.base64ToString = function(str) {
                        return global.decodeURIComponent(global.escape(global.atob(str)));
                    };

                    this.stringTobase64 = function(str) {
                        return global.btoa(global.unescape(global.encodeURIComponent(str)));
                    };

                    this.httpDefer = function() {
                        var deferred = $q.defer();
                        var promise = deferred.promise;
                        promise.success = function(fn) {
                            promise.then(function(response) {
                                fn(response.data, response.status, response.headers);
                            });
                            return promise;
                        };
                        promise.error = function(fn) {
                            promise.then(null, function(response) {
                                fn(response.data, response.status, response.headers);
                            });
                            return promise;
                        };
                        return deferred;
                    };

                    this.formEncodedOpts = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        transformRequest: function(data) {
                            // If this is not an object, defer to native stringification.
                            if (!angular.isObject(data)) {
                                return (!data ? '' : data.toString());
                            }
                            var buffer = [];
                            // Serialize each key in the object.
                            for (var name in data) {
                                if (!data.hasOwnProperty(name)) {
                                    continue;
                                }
                                var value = data[name];
                                buffer.push(
                                    encodeURIComponent(name) +
                                    '=' +
                                    encodeURIComponent(!value ? '' : value)
                                );
                            }
                            // Serialize the buffer and clean it up for transportation.
                            return buffer
                                .join('&')
                                .replace(/%20/g, '+');
                        }
                    };

                    this.stopEvent = function(e) {
                        if (!e) {
                            return;
                        }
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }
                        if (e.preventDefault) {
                            e.preventDefault();
                        }
                    };

                    this.getapi = function(path) {
                        var newPath = path;
                        if (_.startsWith(path, '/')) {
                            newPath = path.substring(1);
                        }
                        if (_.endsWith(CONF.api, '/')) {
                            return CONF.api + newPath;
                        }
                        return CONF.api + '/' + newPath;
                    };

                    this.supportCanvas = !!($window.FileReader && $window.CanvasRenderingContext2D);

                    this.isFile = function(item) {
                        return angular.isObject(item) && item instanceof $window.File;
                    };

                    this.isImage = function(file) {
                        if (!file) {
                            return false;
                        }

                        var type = '|' + angular.lowercase(file.type.slice(file.type.lastIndexOf('/') + 1)) + '|';
                        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                    };

                }
            ]);
        };

        return Service;

    });

}(define, window));
