"use strict";

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var sass = require('gulp-sass');
var minify = require('gulp-minify');

var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5

/*
    browserify
 */

// add custom browserify options here
var customOpts = {
  entries: ['./js/sample.js'],
  debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)).transform(babelify, {presets: ['es2015', 'react']}); // Babel tranforms; 


gulp.task('js', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
  return b.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    //.pipe(source('app.js'))
    .pipe(source('main.jsx')) // Set source name
    // optional, remove if you don't need to buffer file contents
    .pipe(buffer())

    // optional, remove if you dont want sourcemaps
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(gulp.dest('./js/'));
}

/*
    minify
 */

gulp.task('compress', function() {
  gulp.src('./js/app.js')
    .pipe(minify())
    .pipe(gulp.dest('./'));
});







