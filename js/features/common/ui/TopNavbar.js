/**
 *  Defines the TopNavbar Module.
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define, doc) {
    'use strict';

    define([
        'lib/FeatureBase',
        'angular',
        './TopNavbar.html',
        './Aside.html'
    ], function(Base, angular, tpl, asideTpl) {

        var Feature = function() {
            Base.call(this, 'TopnavModule');
            this.$body = angular.element(doc.body);
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.beforeStart = function() {
            this.$body.prepend(tpl);
        };

        Feature.prototype.run = function() {
            this.mod.run([
                '$templateCache',
                function($templateCache) {
                    $templateCache.put('aside', asideTpl);
                }
            ]);
            this.mod.controller('HeaderCtrl', [
                function() {}
            ]);
        };

        return Feature;
    });

})(define, document);
