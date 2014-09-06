(function(require) {
    'use strict';

    var baseUrl = '/';

    require.config({
        baseUrl: baseUrl,
        paths: {
            'fw': 'js/fw',
            'features': 'js/features',
            'common': 'js/features/common',
            'jquery': 'bower_components/jquery/dist/jquery.min',
            'angular': 'bower_components/angular/angular.min',
            'angular-route': 'bower_components/angular-route/angular-route.min',
            'lodash': 'bower_components/lodash/dist/lodash.min',
            'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min'
        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'lodash': {
                exports: '_'
            },
            'angular': {
                exports: 'angular',
                deps: ['lodash', 'jquery']
            },
            'angular-route': {
                deps: ['angular']
            },
            'bootstrap': {
                deps: ['jquery']
            }
        }
    });

    require(['js/boot']);

}(require));