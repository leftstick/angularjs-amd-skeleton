(function(define) {
    "use strict";

    define([], function(Router) {

        var AboutController = function($scope) {
            $scope.words = 'This is standard angular controller';
        };

        return ['$scope', AboutController];

    });


})(define);
