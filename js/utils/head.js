(function() {

    'use strict';

    define(['jquery'], function($) {
        var head = $(document.head);
        return {
            title: function(t) {
                head.find('title').html(t);
            },
            meta: function(attr) {
                var meta = $('<meta>');

                meta.attr(attr);

                head.append(meta);
            },
            base: function(attr) {
                var base = $('<base>');

                base.attr(attr);

                head.append(base);
            },
            link: function(attr) {
                var link = $('<link>');

                link.attr(attr);

                head.append(link);
            },
            favicon: function(url) {
                this.link({
                    rel: 'shortcut icon',
                    href: url,
                    type: 'image/x-icon'
                });
            }
        };
    });

}());