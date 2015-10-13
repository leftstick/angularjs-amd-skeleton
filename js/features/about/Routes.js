/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define(['./partials/about.html'], function(tpl) {
        return [
            {
                id: 'about',
                isDefault: false,
                when: '/about',
                controller: 'AboutController',
                template: tpl
            }
        ];
    });

}(define));
