/**
 *  SSOConfig set authorised configuration.
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
        };

        Configurator.prototype = new Base();

        Configurator.prototype.constructor = Configurator;

        Configurator.prototype.run = function() {
            this.app.config([
                '$httpProvider',
                function($httpProvider) {
                    $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
                    $httpProvider.defaults.withCredentials = true;
                }
            ]);
        };

        return Configurator;

    });

}(define));
