(function(define, require) {
    'use strict';

    var features = require.toUrl('features');

    define([], function() {
        return [{
            isDefault: false,
            when: '/about',
            controller: 'AboutController',
            templateUrl: features + '/about/partials/about.html'
        }];
    });

}(define, require));