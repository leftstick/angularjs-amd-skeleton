(function(define, _, angular) {
    'use strict';

    //specify each configure module, feature module here explicitly
    define([
        'fw/RouteConfig',
        'common/arstopnav/main',
        'features/about/main',
        'features/todo/main'
    ], function() {

            var appName = 'angularjs-requirejs-skeleton';
            var modules = Array.prototype.slice.call(arguments, 0);
            var features = _.filter(modules, function(module) {
                return angular.isObject(module) && module.name;
            });

            //specify any external angular dependency here
            var ngDependencies = ['ngRoute'];

            //each feature returns a literal object include a feature name
            //and any other attribute if needed
            _.each(features, function(module) {
                if (module.name) {
                    ngDependencies.push(module.name);
                }
            });

            //config modules are the files written in special form
            //under 'fw' folder
            var configModules = _.filter(modules, function(module) {
                return angular.isFunction(module);
            });

            var app = angular.module(appName, ngDependencies);

            for (var i = 0; i < configModules.length; i++) {
                var module = configModules[i];
                module(features, app);
            }

            //fire up the application manually in angular way
            angular.bootstrap(document, [appName]);

            return app;
        });

}(define, _, angular));