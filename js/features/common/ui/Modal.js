/**
 *  Defines the Modal
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['lib/FeatureBase', 'lodash'], function(Base, _) {

        var defaults = {
            animation: 'am-fade',
            backdropAnimation: 'am-fade',
            placement: 'top',
            title: '',
            content: '',
            html: false,
            backdrop: true,
            keyboard: true,
            show: true,
            container: false,
            contentTemplate: false,
            prefixEvent: 'modal',
            id: ''
        };

        var Feature = function() {
            Base.call(this, 'ModalWrapper');
        };

        Feature.prototype = new Base();

        Feature.prototype.constructor = Feature;

        Feature.prototype.run = function() {
            this.mod.run([
                'events',
                '$modal',
                function(events, $modal) {

                    events.on('modal', function(opts) {
                        var options = _.defaults(opts, defaults);
                        options.title = opts.title;
                        $modal(options);
                    });

                }
            ]);
        };

        return Feature;

    });

})(define);
