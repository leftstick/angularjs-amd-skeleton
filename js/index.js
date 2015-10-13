/**
 *  index.js launch the application.
 *
 *  @author  haozuo
 *  @date    Oct 13, 2015
 *
 */
'use strict';

require.ensure([], function() {

    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure([], function() {

    var App = require('./main');
    (new App()).run();
});
