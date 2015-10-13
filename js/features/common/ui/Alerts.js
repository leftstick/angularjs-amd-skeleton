/**
 *  Defines the Alerts
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define, doc) {
    'use strict';

    define(['lib/FeatureBase', 'angular'], function(Base, angular) {

        var TYPES = {
            warning: 'warning',
            error: 'error',
            info: 'info',
            success: 'success'
        };

        var TIMEOUTS = {
            warning: 3000,
            error: 5000,
            info: 3000,
            success: 3000
        };

        var TITLES = {
            warning: 'Warning',
            error: 'Error',
            info: 'Info',
            success: 'Success'
        };

        var Feature = function() {
            Base.call(this, 'Alerts');
            this.$body = angular.element(doc.body);
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.beforeStart = function() {
            this.$body.append('<sweetnotifier></sweetnotifier>');
        };

        Feature.prototype.run = function() {
            this.mod.run([
                'events',
                'notifier',
                function(events, notifier) {

                    events.on('alert', function(data) {
                        notifier.emit({
                            type: TYPES[data.type],
                            title: TITLES[data.type],
                            content: data.message,
                            timeout: TIMEOUTS[data.type]
                        });
                    });
                }
            ]);
        };

        return Feature;

    });

})(define, document);
