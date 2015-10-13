/**
 *  NotifierConfig set angular-sweetnotifier needed configuration
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
        };

        Configurator.prototype = new Base();

        Configurator.prototype.constructor = Configurator;

        Configurator.prototype.run = function() {
            this.app.config([
                'notifierProvider',
                function(notifierProvider) {
                    notifierProvider.setPlacement('top', 'right');
                    notifierProvider.setUseNativeWhileBlur(true);
                }
            ]);
        };

        return Configurator;

    });

}(define));
