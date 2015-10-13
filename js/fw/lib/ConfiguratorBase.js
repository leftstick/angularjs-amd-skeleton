/**
 *  ConfiguratorBase class
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([], function() {

        var ConfiguratorBase = function(features, app) {
            this.features = features;
            this.app = app;
        };

        ConfiguratorBase.prototype.run = function() {};

        return ConfiguratorBase;
    });

}(define));
