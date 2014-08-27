(function(define, require) {
    "use strict";

    var baseUrl = require.toUrl('common');

    define([], function() {

        var modulename = 'arsTopnav';
        var module = angular.module(modulename, []);

        var arsTopnav = function($rootScope) {

            // Return configured, directive instance
            return {
                restrict: 'E',
                link: function($scope, element, attrs) {
                    $scope.url = '';
                    $scope.switchTo = function(url) {
                        $scope.url = url;
                    };
                },
                templateUrl: baseUrl + '/arstopnav/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$rootScope', arsTopnav]);


        return {
            name: modulename
        };

    });

}(define, require));