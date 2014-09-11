/**
 *  HeadConfig set all needed head info to the index.html.
 *
 *  Note: this module is part of application-level framework, developers should
 *  never touch this module
 *
 *  @author  Howard.Zuo
 *  @date    Sep 11th, 2014
 *
 */
(function(define) {
    "use strict";

    define(['utils/head'], function(head) {

        var HeadConfig = function(features, app) {
            head.title('DEMO');
            head.meta({
                'charset': 'utf-8'
            });
            head.meta({
                'name': 'viewport',
                'content': 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui'
            });
            head.meta({
                'name': 'renderer',
                'content': 'webkit'
            });
            head.meta({
                'http-equiv': 'X-UA-Compatible',
                'content': 'IE=edge,chrome=1'
            });
            head.meta({
                'name': 'apple-mobile-web-app-capable',
                'content': 'yes'
            });
            head.meta({
                'name': 'apple-mobile-web-app-capable',
                'content': 'yes'
            });
            head.favicon('img/favicon.png');
        };

        return {
            type: 'config',
            func: HeadConfig
        };

    });

}(define));