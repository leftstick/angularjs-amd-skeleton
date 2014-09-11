(function(define) {
    'use strict';

    define(['lodash'], function(_) {

        //only one function needs to be implemented
        //and it will be invoked with two arguments
        //features, app
        var config = function(features, app) {
            if (!features || features.length === 0) {
                console.warn('No features loaded');
                return;
            }

            //app comes form 'boot.js', 'var app = angular.module(appName, ngDependencies);'
            //config router
            app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

                    var routes = [];

                    //retrieve router from each feature
                    _.each(features, function(feature) {
                        if (!feature.routes) {
                            return;
                        }
                        _.each(feature.routes, function(route) {
                            routes.push(route);
                        });
                    });

                    //config each router
                    _.each(routes, function(route) {
                        $routeProvider
                            .when(route.when, {
                                templateUrl: route.templateUrl,
                                controller: route.controller
                            });
                    });

                    //config default page
                    var defaultRouter = _.find(routes, {
                        'isDefault': true
                    });
                    if (defaultRouter) {
                        $routeProvider.otherwise({
                            redirectTo: defaultRouter.when
                        });
                    }

                }
            ]);

        };

        return {
            type: 'config',
            func: config
        };

    });

}(define));