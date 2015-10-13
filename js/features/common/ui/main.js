/**
 *  Entrance of common ui
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        './Alerts',
        './Autofocus',
        './Confirm',
        './Error',
        './Footer',
        './Info',
        './Modal',
        './RouteIndicator',
        './StRatio',
        './TopNavbar'
    ], function() {
        return [].slice.call(arguments);
    });

}(define));
