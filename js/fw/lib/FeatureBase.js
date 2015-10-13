/**
 *  FeatureBase class
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['angular'], function(angular) {

        var FeatureBase = function(name) {
            this.export = name;
            this.mod = angular.module(this.export, []);
        };

        FeatureBase.prototype.beforeStart = function() {};

        FeatureBase.prototype.run = function() {};

        return FeatureBase;
    });

}(define));
