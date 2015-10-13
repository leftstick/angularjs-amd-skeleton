/**
 *  ServiceBase class
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var ServiceBase = function(features, app) {
            this.features = features;
            this.app = app;
        };

        ServiceBase.prototype.run = function() {};

        return ServiceBase;

    });

}(define));
