/**
 *  AppConfig is the configuration of the whole application, in case
 *  you have different stuff for each env
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/ConfiguratorBase'], function(Base) {

        var Configurator = function(features, app) {
            Base.call(this, features, app);
            this.config = __config;
        };

        Configurator.prototype = new Base();

        Configurator.prototype.constructor = Configurator;

        Configurator.prototype.run = function() {
            this.app.constant('CONF', this.config);
        };

        return Configurator;

    });

}(define));
