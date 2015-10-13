/**
 *  Entrance of features
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        './about/main',
        './home/main',
        './common/main'
    ], function(about, home, common) {
        return [about, home].concat(common);
    });

}(define));
