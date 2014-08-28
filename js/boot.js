(function(define, _, angular) {
    'use strict';

    //specify each configure module, feature module here explicitly
    define([
        'fw/RouteConfig',
        'common/arsmodal/main',
        'common/arstopnav/main',
        'features/about/main',
        'features/todo/main'
    ], function() {

            var appName = 'angularjs-requirejs-skeleton';
            var modules = Array.prototype.slice.call(arguments, 0);

            var features = _.chain(modules).filter(angular.isObject).filter('name').value();

            //specify any external angular dependency here
            var ngDependencies = ['ngRoute'];

            //each feature should return a literal object include feature name
            ngDependencies = _.chain(features).filter('name').pluck('name').value().concat(ngDependencies);

            //config modules are the files written in special form
            //under 'fw' folder
            var configModules = _.filter(modules, angular.isFunction);

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