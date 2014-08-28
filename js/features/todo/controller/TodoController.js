(function(define, _) {
    "use strict";

    define([], function(Router) {

        var TodoController = function($scope, TodoFactory) {
            $scope.finNum = 0;
            $scope.title = 'TODOLIST';
            $scope.tasks = TodoFactory.getTodoList();

            $scope.toggleTask = function(task) {

                if (task.isActive) {
                    task.isActive = false;
                    task.checked = false;
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
                task.checked = true;
            };

            $scope.$watch('tasks', function(newTasks) {
                $scope.finNum = _.filter(newTasks, function(task) {
                    return task.checked;
                }).length;

            }, true);
        };

        return ['$scope', 'TodoFactory', TodoController];

    });


})(define, _);
