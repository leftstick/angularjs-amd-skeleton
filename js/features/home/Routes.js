/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['./partials/home.html'], function(tpl) {
        return [
            {
                id: 'home',
                isDefault: true,
                when: '/home',
                controller: 'HomeController',
                template: tpl
            }
        ];
    });

}(define));
