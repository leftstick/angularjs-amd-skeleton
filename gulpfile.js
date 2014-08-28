'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var fs = require('fs');
var merge = require('merge-stream');
var exec = require('child_process').exec;

var isWin = function() {
    return process.platform === 'win32';
};


gulp.task('clean', function() {
    return gulp.src('build/', {
        raad: false
    }).pipe(clean());
});

gulp.task('compress', ['clean'], function(cb) {
    var html = gulp.src(['index.html'])
        .pipe(gulp.dest('build/'));
    var css = gulp.src(['css/*'])
        .pipe(gulp.dest('build/css/'));
    var img = gulp.src(['img/*'])
        .pipe(gulp.dest('build/img/'));
    var js = gulp.src(['js/**/*.html', 'js/main.js'])
        .pipe(gulp.dest('build/js/'));
    var bower = gulp.src(['bower_components/**/*.min.js',
        'bower_components/**/*.map',
        'bower_components/**/*.min.css',
        'bower_components/**/fonts/*',
        'bower_components/**/require.js'
    ])
        .pipe(gulp.dest('build/bower_components/'));


    var merged = merge(html, css, img, js);

    merged.on('end', function() {
        var cmd = isWin() ? 'r.js.cmd' : 'r.js';

        var cp = exec(cmd + ' -o build.json', {
            maxBuffer: 5000 * 1024
        }, cb);

        cp.stdout.pipe(process.stdout);
        cp.stderr.pipe(process.stderr);
    });
});
