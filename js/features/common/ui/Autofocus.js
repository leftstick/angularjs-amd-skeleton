/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/FeatureBase'], function(Base) {

        var Feature = function() {
            Base.call(this, 'AutofocusModule');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            this.mod.directive('autofocus', function() {
                return {
                    restrict: 'A',
                    link: function($scope, element) {
                        element[0].focus();
                    }
                };
            });
        };

        return Feature;

    });

})(define);
