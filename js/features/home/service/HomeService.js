/**
 *  Defines the HomeService
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the HomeService class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var HomeService = function($http, utils) {

            this.getStates = function() {
                return $http.get(utils.getapi('/states'));
            };

            this.getMenus = function() {
                return $http.get(utils.getapi('/menus'));
            };

            this.getDropdown = function() {
                return $http.get(utils.getapi('/dropdown'));
            };

        };

        return ['$http', 'utils', HomeService];

    });

})(define);
