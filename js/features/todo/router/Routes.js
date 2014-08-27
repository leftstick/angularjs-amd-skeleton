(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: true,
            when: '/',
            controller: 'TodoController',
            templateUrl: features + '/todo/partials/todo.html'
        }];
    });

}(define, require));