---
layout: default
---

## [Prerequisites](#prereq) ##

- [![](assets/images/requirejs.png)](http://www.requirejs.org/)
- [![](assets/images/angularjs.png)](https://angularjs.org/)

## [Architecture](#arch) ##

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

## [Dependency Injection](#di) ##

### [requirejs](#requirejs) ###

- management of import dependencies(file organization)
- class or constructor would be injdected as dependency

### [angularjs](#angularjs) ###

- instance would be injdected as dependency
