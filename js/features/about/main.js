(function(define) {
    'use strict';

    define([
        'angular',
        'features/about/router/Routes',
        'features/about/controller/AboutController'
    ], function(angular,
        Routes,
        AboutController) {

            var moduleName = 'about';

            var module = angular.module(moduleName, []);

            module.controller('AboutController', AboutController);

            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));