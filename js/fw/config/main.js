/**
 *  Entrance of config
 *
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
(function(define) {
    'use strict';

    define([
        './AppConfig',
        './NotifierConfig',
        './RouterConfig',
        './SSOConfig'
    ], function() {
        return [].slice.call(arguments, 0);
    });

}(define));
