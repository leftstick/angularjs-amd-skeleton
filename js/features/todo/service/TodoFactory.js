(function() {
    'use strict';

    define([], function() {
        var factory = function() {
            var getTodoList = function() {
                return [{
                    name: 'homework'
                    }, {
                    name: 'work'
                    }, {
                    name: 'job'
                }];
            };

            return {
                getTodoList: getTodoList
            };

        };


        return [factory];
    });
}());