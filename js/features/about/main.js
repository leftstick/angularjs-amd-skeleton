/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'lib/FeatureBase',
        './Routes',
        './controller/AboutController',
        './service/AboutService'
    ], function(Base,
        Routes,
        AboutController,
        AboutService) {

        var Feature = function() {
            Base.call(this, 'about');
            this.routes = Routes;
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            this.mod.controller('AboutController', AboutController);
            this.mod.service('AboutService', AboutService);
        };

        return Feature;
    });

}(define));
