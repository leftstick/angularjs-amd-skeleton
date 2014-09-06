(function(define, require) {
    'use strict';

    var baseUrl = require.toUrl('common');

    define(['angular'], function(angular) {

        var modulename = 'arsTopnav';
        var module = angular.module(modulename, []);

        var arsTopnav = function($rootScope, $location) {

            // Return configured, directive instance
            return {
                restrict: 'E',
                link: function($scope) {
                    $rootScope.$on('$routeChangeSuccess', function() {
                        $scope.url = $location.url().slice(1);
                    });
                    $scope.url = '';
                    $scope.switchTo = function(url) {
                        $scope.url = url;
                    };
                },
                templateUrl: baseUrl + '/arstopnav/main.html'
            };
        };

        //Register navbar directive
        module.directive(modulename, ['$rootScope', '$location', arsTopnav]);


        return {
            name: modulename
        };

    });

}(define, require));