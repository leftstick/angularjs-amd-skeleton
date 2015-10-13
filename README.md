angularjs-amd-skeleton
============================

A seed project can be forked for web-developer. You would learn how `angularjs` used for organizing complicated application.

This seed project is powered by [generator-amd-angular](https://github.com/leftstick/generator-amd-angular)


## This skeleton is playable, follow below steps to run it locally ##

- Install [Nodejs][node-url]. (Ignore if you have it installed)
- Install [gulp][gulp-url] globally
- Move to `angularjs-amd-skeleton` folder
- Execute `npm install` to install dependencies
- Execute `gulp dev` to start web server
- Use default value for every question it required
- Open [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html) in browser
- ^^, see, the demo


## Try the compressed version ##

- Install [Nodejs][node-url]. (Ignore if you have it installed)
- Install [sero-cli][sero-url] globally
- Install [gulp][gulp-url] globally
- Move to `angularjs-amd-skeleton` folder
- Execute `npm install` to install npm dependencies
- Execute `gulp release` to compress all the `js` file into one, by using `webpack`

After above operations, the compressed code was generated into `build/` directory.

- Execute `sero server -r ./build/ -p 8080` start web server
- A static webserver was started for `build/` directory
- Open [http://localhost:8080/](http://localhost:8080/) in browser
- ^^, see, the demo


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/angularjs-amd-skeleton/master/LICENSE)


[node-url]: http://nodejs.org
[gulp-url]: https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally
[sero-url]: https://github.com/leftstick/Sero-cli
