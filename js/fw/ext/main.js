/**
 *  Return all information of external angular resources
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        'lodash',
        'angular',
        'angular-animate',
        'angular-route',
        'angular-sanitize',
        'angular-strap',
        'angular-strap/dist/angular-strap.tpl',
        'angular-theme-spinner',
        'angular-smart-table',
        'angular-sweetnotifier',
        'angular-sweetnotifier/src/angular-sweetnotifier.less',
        'bootstrap/dist/css/bootstrap.css',
        'bootstrap-additions/dist/bootstrap-additions.css',
        'angular-motion/dist/angular-motion.css',
        'angular-theme-spinner/dist/angular-theme-spinner.min.css'
    ], function() {

        return [
            'ngAnimate',
            'ngRoute',
            'ngSanitize',
            'mgcrea.ngStrap',
            'angular-theme-spinner',
            'smart-table',
            'angular-sweetnotifier'
        ];

    });

}(define));
