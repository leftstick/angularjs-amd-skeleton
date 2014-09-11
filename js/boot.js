(function(define) {
    'use strict';

    //specify each configure module, feature module here explicitly
    define([
        'angular',
        'lodash',
        'css!bootstrapcss',
        'css!bootstraptheme',
        'css!maincss',
        'angular-route',
        'bootstrap',
        'conf/RouteConfig',
        'conf/HeadConfig',
        'common/arsmodal/main',
        'common/arstopnav/main',
        'features/about/main',
        'features/todo/main'
    ], function() {

            var appName = 'angularjs-requirejs-skeleton';
            var modules = Array.prototype.slice.call(arguments, 0);

            var angular = modules[0];
            var _ = modules[1];

            var features = _.filter(modules, function(mod) {
                return angular.isObject(mod) && mod.name;
            });

            //specify any external angular dependency here
            var ngDependencies = ['ngRoute'];

            //each feature should return a literal object include feature name
            Array.prototype.push.apply(ngDependencies, _.pluck(features, 'name'));

            //config modules are the files written in special form
            //under 'fw' folder
            var configModules = _.filter(modules, function(mod) {
                return angular.isObject(mod) && mod.type === 'config' && angular.isFunction(mod.func);
            });

            var app = angular.module(appName, ngDependencies);

            for (var i = 0; i < configModules.length; i++) {
                var module = configModules[i];
                module.func(features, app);
            }

            //fire up the application manually in angular way
            angular.bootstrap(document, [appName]);

            return app;
        });

}(define));