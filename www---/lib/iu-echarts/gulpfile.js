'use strict';
var gulp = require('gulp'),
	  rename = require('gulp-rename'),
	  uglify = require('gulp-uglify'),
	  util = require('gulp-util');

var config = {
	  js:['src/iuChart.js']
};

/*==============================================================
= js
==============================================================*/
gulp.task('js', function() {
  return gulp.src(config.js)
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
