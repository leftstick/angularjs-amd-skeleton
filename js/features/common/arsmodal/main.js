(function(define, require) {
    'use strict';

    var baseUrl = require.toUrl('common');

    define(['angular'], function(angular) {

        var modulename = 'arsModal';
        var module = angular.module(modulename, []);

        var arsModal = function($rootScope) {

            // Return configured, directive instance
            return {
                restrict: 'E',
                link: function($scope, element) {

                    var modal = element.children().first();

                    $rootScope.modal = function(options) {
                        modal.modal(options);
                        modal.on('hidden.bs.modal', function() {
                            if (angular.isFunction(options.onClose)) {
                                $scope.$apply(function() {
                                    options.onClose();
                                });
                            }
                        });
                    };

                },
                templateUrl: baseUrl + '/arsmodal/main.html'
            };
        };

        //Register modal directive
        module.directive(modulename, ['$rootScope', arsModal]);

        return {
            name: modulename
        };

    });
}(define, require));