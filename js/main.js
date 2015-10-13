/**
 *  main.js is responsible for the organization of features and cache control.
 *
 *  @author  haozuo
 *  @date    Sep 11, 2015
 *
 */
(function(define, require, doc) {
    'use strict';

    define([
        'lodash',
        'angular',
        'init/main',
        'ext/main',
        'config/main',
        'service/main',
        'features/main',
        'splash-screen'
    ], function(_, angular, Initializers, ext, Configurators, Services, Features, splash) {

        require(['less/main.less']);

        var App = function() {
            this.appName = 'require-angular-seed';
            this.features = [];
            _.each(Features, function(Feature) {
                this.features.push(new Feature());
            }, this);
        };

        App.prototype.findDependencies = function() {
            this.depends = _.clone(ext);
            Array.prototype.push.apply(this.depends, _.chain(this.features).filter('export').pluck('export').value());
        };

        App.prototype.beforeStart = function() {
            _.each(Initializers, function(Initializer) {
                (new Initializer()).run();
            });

            _.each(this.features, function(feature) {
                feature.beforeStart();
            });
        };

        App.prototype.createApp = function() {
            _.each(this.features, function(feature) {
                feature.run();
            });
            this.app = angular.module(this.appName, this.depends);
        };

        App.prototype.configApp = function() {
            _.each(Configurators, function(Configurator) {
                (new Configurator(this.features, this.app)).run();
            }, this);
        };

        App.prototype.registerService = function() {
            _.each(Services, function(Service) {
                (new Service(this.features, this.app)).run();
            }, this);
        };

        App.prototype.destroySplash = function() {
            splash.destroy();
        };

        App.prototype.launch = function() {
            angular.bootstrap(doc, [this.appName]);
        };

        App.prototype.run = function() {
            this.findDependencies();
            this.beforeStart();
            this.createApp();
            this.configApp();
            this.registerService();
            this.destroySplash();
            this.launch();
        };

        return App;
    });

}(define, require, document));
