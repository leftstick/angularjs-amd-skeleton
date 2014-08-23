---
layout: default
---

## [Prerequisites](#prerequisites) ##

- [![](assets/images/requirejs.png)](http://www.requirejs.org/)
- [![](assets/images/angularjs.png)](https://angularjs.org/)

## [Architecture](#architecture) ##

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
          

- **img:** used in application should be placed here
- **js:** `JavaScript` files should be placed here
- **js-features:** business logic code should be placed here
- **js-features-common:** common stuff would be used for most features should be placed here
- **js-features-feaure:** each feature should contain the `controller`, `service`, `directive`, `route` and even `i18n` assets

## [Dependency Injection](#dependency-injection) ##

### [requirejs](#requirejs) ###

- management of import dependencies(file organization)
- class or constructor would be injdected as dependency

### [angularjs](#angularjs) ###

- instance would be injdected as dependency

## [What should we do for those different DI?](#what-should-we-do-for-those-different-di?) ##

It's simple, we just use `requirejs` organize all the files and `angularjs` only care about the
 instances.

Let's start going through the solution:

1. configuration(`main.js`)

```JavaScript
    (function(require) {

        var baseUrl = '/';

        require.config({
            baseUrl: baseUrl,
            paths: {
                //configure the path
            }
            //anything else, place it here if you need
        });

        var preloads = [];//place your preloads path ids here

        //Load all preload dependencies
        require(preloads, function() {
            require(['js/boot']);
        });

    }(require));
```

2. manually start up

```JavaScript
    (function(require) {

        var baseUrl = '/';

        require.config({
            baseUrl: baseUrl,
            paths: {
                //configure the path
            }
            //anything else, place it here if you need
        });

        var preloads = [];//place your preloads path ids here

        //Load all preload dependencies
        require(preloads, function() {
            require(['js/boot']);
        });

    }(require));
```