---
layout: default
---

<h2 id="introduction"><a href="#introduction">Introduction</a></h2>

Developer who's interested in [angularjs][angularjs-url] may wondering if [angularjs][angularjs-url] can handle large application. That's what i'd like to share.

The answer is obviously positive, and i will demonstrate a bit in the following sections. 

A complete seed project is provided. Welcome to give a try, and register issues if anything confused.

<h2 id="prerequisites"><a href="#prerequisites">Prerequisites</a></h2>

- [![]({{ site.baseurl }}/assets/images/requirejs.png)](http://www.requirejs.org/)
- [![]({{ site.baseurl }}/assets/images/angularjs.png)](https://angularjs.org/)

<h2 id="file-structure"><a href="#file-structure">File Structure</a></h2>

    |root
    |--------img/
    |--------js/
    |        |--features/
    |        |  |-------common/
    |        |  |-------[feature-01]/
    |        |  |-------[feature-...]/
    |        |  |-------[feature-n]/
    |        |--fw/
    |        |--boot.js
    |        |--main.js
    |--------less/
    |--------bower.json
    |--------index.html
    |--------package.json
          

- **img:** just like what you saw, place images here
- **js:** all `JavaScript` files should be placed here
- **js-features:** business logic code should be placed here
- **js-features-common:** common stuff would be used for most features should be placed here
- **js-features-feaure:** each feature might contain the `controller`, `service`, `directive`, `route` and even `i18n` assets
- **fw:** framework-level folder, if you need something to be ready in [angularjs][angularjs-url]'s configure phase, write a [configuration](#configuration) module and import it in [boot.js](#bootjs)
- [boot.js](#bootjs): is responsible for organizing all the needed modules
- [main.js](#mainjs): is the main entrance of the whole application, which is a configuration module for `requirejs`. The `requirejs` related stuff such `path`, `shim` configurations should be in it

<h2 id="major-issue"><a href="#major-issue">Major Issue</a></h2>

The very first thing you may doubt that if [angularjs][angularjs-url] could be used for building up a large application, is `file organization`. Since there is no any documentation about this topic at [Official Website][angularjs-url], and it seems everything in [angularjs][angularjs-url] should be written in one file.

There is always a but ^^, it's not a good idea that multiple developers working on one file!!

Ok, let's talk about [requirejs][requirejs-url], since we know [requirejs][requirejs-url] is great at dependency management, and make `file organization` easy to play.

The next problem is, both [angularjs][angularjs-url] and [requirejs][requirejs-url] have their own [DI][DI-url] system, how to make them play together without conflict?

Following is a brief view about main functionalities around [DI][DI-url] between [angularjs][angularjs-url] and [requirejs][requirejs-url].


<h3 id="requirejs"><a href="#requirejs">requirejs</a></h3>

- module loader
- manage dependencies in injecting Classes or constructors

<h3 id="angularjs"><a href="#angularjs">angularjs</a></h3>

- manage dependencies in injecting instances

<h2 id="what-should-we-do-with-different-di"><a href="#what-should-we-do-with-different-di">What should we do with the different DI?</a></h2>

It's simple, [requirejs][requirejs-url] organize the files and expose the constructors of [angularjs][angularjs-url] modules.

Let's start going through the solution:

1. `index.html`

    ```HTML
    <!DOCTYPE html>
    <html>
        <head>
            <title>DEMO</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimal-ui" />
            <script type="text/javascript" data-main="js/main" src="bower_components/requirejs/require.js"></script>
        </head>
        <body>
            <!-- You know route system, right? -->
            <div ng-view></div>
        </body>
    </html>
    ```
2. <a href="#mainjs"><code id="mainjs">main.js</code></a>, the configuration for [requirejs][requirejs-url]

    ```JavaScript
    (function(require) {

        var baseUrl = '/';

        require.config({
            baseUrl: baseUrl,
            paths: {
                'fw': 'js/fw',
                'features': 'js/features',
                'common': 'js/features/common'
                //configure the path
            }
            //anything else, place it here if you need
        });

        var preloads = [];//place the paths you'd like to load before 
                          //application started, such as jquery, lodash
                          //angularjs and all the external angular modules
        
        require(preloads, function() {
            
            //load boot.js to fire up the whole application
            require(['js/boot']);

        });

    }(require));
    ```
3. <a href="#bootjs"><code id="bootjs">boot.js</code></a>

    ```JavaScript
    (function(define, _, angular) {
        'use strict';

        //specify each configure module, feature module here explicitly
        define([
            'fw/RouteConfig',
            'fw/TranslateConfig',
            'common/arstopnav/main',
            'common/arsbottomnav/main',
            'features/todo/main',
            'features/about/main'
        ], function() {

                var appName = 'angularjs-requirejs-skeleton';
                var modules = Array.prototype.slice.call(arguments, 0);
                var features = _.filter(modules, function(module) {
                    return angular.isObject(module) && module.name;
                });

                //specify any external angular dependency here
                var ngDependencies = ['ngRoute', 'pascalprecht.translate'];
                
                //each feature returns a literal object include a feature name
                //and any other attribute if needed
                _.each(features, function(module) {
                    if (module.name) {
                        ngDependencies.push(module.name);
                    }
                });
                
                //config modules are the files written in special form
                //under 'fw' folder
                var configModules = _.filter(modules, function(module) {
                    return angular.isFunction(module);
                });

                var app = angular.module(appName, ngDependencies);

                for (var i = 0; i < configModules.length; i++) {
                    var module = configModules[i];
                    module(features, app);
                }
                
                //fire up the application manually in angular way
                angular.bootstrap(document, [appName]);

                return app;
            });

    }(define, _, angular));
    ```

Now, everything should work smoothly. Let's take one step further.

<h2 id="configuration"><a href="#configuration">How a configuration module looks like?</a></h2>

Let's take the `fw/RouteConfig` from [boot.js](#bootjs) as example:

```JavaScript
(function(define) {
    "use strict";

    define([], function() {
        
        //only one function needs to be implemented
        //and it will be invoked with two arguments
        //features, app
        var config = function(features, app) {
            if (!features || features.length === 0) {
                console.warn('No features loaded');
                return;
            }
            
            //app comes form 'boot.js', 'var app = angular.module(appName, ngDependencies);'
            //config router
            app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

                    var routes = [];

                    //retrieve router from each feature
                    _.each(features, function(feature) {
                        if (!feature.routes) {
                            return;
                        }
                        _.each(feature.routes, function(route) {
                            routes.push(route);
                        });
                    });

                    //config each router
                    _.each(routes, function(route) {
                        $routeProvider
                            .when(route.when, {
                                templateUrl: route.templateUrl,
                                controller: route.controller
                            });
                    });

                    //config default page
                    var defaultRouter = _.find(routes, function(route) {
                        return route.isDefault;
                    });
                    if (defaultRouter) {
                        $routeProvider.otherwise({
                            redirectTo: defaultRouter.when
                        });
                    }

                }
            ]);

        };

        return config;

    });

}(define));
```
<h2 id="feature"><a href="#feature">What is a feature?</a></h2>

A feature is a [angularjs][angularjs-url] module, and should be imported in [boot.js](#bootjs), has following structure:

    |feature-name
    |--------controller/
    |        |---------controller-01
    |        |---------controller-*
    |        |---------controller-n
    |--------i18n/
    |        |---lang_en.js
    |        |---lang_zh.js
    |        |---lang_*.js
    |        partials/
    |        |-------01.html
    |        |-------*.html
    |        |-------n.html
    |        router/
    |        |-----Routes.js
    |        service/
    |        |-----Service-01.js
    |        |-----Service-*.js
    |        |-----Service-n.js
    |--------main.js

> Every feature should independent with each other

> Only `controller`, `partials`, `router` are mandatory

> `common` is a special feature which may contain multiple modules in it

Let's start writing a feature:

`features/todo/main.js`

```JavaScript
(function(define) {
    'use strict';

    define([
        'features/todo/router/Routes',
        'features/todo/controller/TodoController',
        'features/todo/service/TodolistService',
        'features/todo/i18n/lang_en',
        'features/todo/i18n/lang_zh'
    ], function(Routes,
       TodoController,
       TodolistService,
       lang_en,
       lang_zh) {

        var moduleName = 'Todo';

        var module = angular.module(moduleName, []);

        module.controller('TodoController', TodoController);

        module.service('TodolistService', TodolistService);

        //return the module name which will be used as dependency in framework
        return {
            name: moduleName,
            router: Routes,
            lang: {
                'en': lang_en,
                'zh': lang_zh
            }
        };

    });


}(define));

```



[angularjs-url]: https://angularjs.org/
[requirejs-url]: http://www.requirejs.org/
[DI-url]: http://en.wikipedia.org/wiki/Dependency_injection