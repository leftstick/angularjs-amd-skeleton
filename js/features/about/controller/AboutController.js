(function(define) {
    "use strict";

    define([], function() {

        var AboutController = function($scope, $rootScope, $timeout) {
            $scope.words = 'This is standard angular controller';
            $scope.showModal = function() {
                var opts = {
                    onClose: function() {
                        $scope.closingMsg = 'Modal is closed......';
                        $timeout(function() {
                            $scope.closingMsg = '';
                        }, 2000);
                    }
                };
                $rootScope.modal(opts);
            };
        };

        return ['$scope', '$rootScope', '$timeout', AboutController];

    });


})(define);
