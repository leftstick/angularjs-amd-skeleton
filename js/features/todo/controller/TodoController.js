(function(define, _) {
    "use strict";

    define([], function(Router) {

        var TodoController = function($scope, TodoFactory) {
            $scope.tasks = TodoFactory.getTodoList();

            $scope.toggleTask = function(task) {

                if (task.isActive) {
                    task.isActive = false;
                    return;
                }
                _.each($scope.tasks, function(t) {
                    _.assign(t, {
                        isActive: false
                    });
                });
                _.find($scope.tasks, function(t) {
                    return t.name === task.name;
                }).isActive = true;
            };
        };

        return ['$scope', 'TodoFactory', TodoController];

    });


})(define, _);
