(function(define) {
    'use strict';

    define([
        'angular',
        'features/todo/router/Routes',
        'features/todo/controller/TodoController',
        'features/todo/service/TodoFactory'
    ], function(angular,
        Routes,
        TodoController,
        TodoFactory) {

            var moduleName = 'todo';

            var module = angular.module(moduleName, []);

            module.controller('TodoController', TodoController);
            module.factory('TodoFactory', TodoFactory);

            //return the module name which will be used as dependency in framework
            return {
                name: moduleName,
                routes: Routes
            };

        });


}(define));