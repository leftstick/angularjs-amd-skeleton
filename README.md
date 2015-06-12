> This is really the old style, and deprecated. If you are interested in this topic, please refer to [generator-require-angular](https://github.com/leftstick/generator-require-angular)

angularjs-requirejs-skeleton
============================

A seed project can be forked for web-developer. You would learn how `angularjs` used for organizing complicated application.

For detail explanation of the project, please refer to [documentation][doc-url]


[doc-url]: http://leftstick.github.io/angularjs-requirejs-skeleton/


## This skeleton is playable, follow below steps to run it locally ##

- Install [Nodejs][node-url]. (Ignore if you have it installed)
- Install [sero-cli][sero-url] globally
- Install [bower][bower-url] globally
- Move to `angularjs-requirejs-skeleton` folder
- Execute `bower install` to install bower dependencies
- Execute `sero` to launch a terminal-ui
- Choose the fourth item 'Start a static web server for current working directory', press `Enter`
- Use default value for every question it required
- Open [http://localhost:8080/](http://localhost:8080/) in browser
- ^^, see, the demo


## Try the compressed version ##

- Install [Nodejs][node-url]. (Ignore if you have it installed)
- Install [gulp][gulp-url] globally
- Move to `angularjs-requirejs-skeleton` folder
- Execute `npm install` to install npm dependencies
- Execute `gulp compress` to compress all the `js` file into one

After above operations, the compressed code was generated into `build/` directory.

You would find there are two `js` files left in `build/js/` folder, `main.js`, `boot.js`. And `boot.js` is uglified and compressed with all the other `js` files.

- Execute `sero` to launch a terminal-ui
- Choose the fourth item 'Start a static web server for current working directory', press `Enter`
- Type `./build` as the value of `root for webserver`
- Use default value for every question left
- A static webserver was started for `build/` directory
- Open [http://localhost:8080/](http://localhost:8080/) in browser
- ^^, see, the demo


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angularjs-requirejs-skeleton/master/LICENSE)


[node-url]: http://nodejs.org
[gulp-url]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally
[sero-url]: https://github.com/leftstick/Sero-cli
[bower-url]: http://bower.io/
