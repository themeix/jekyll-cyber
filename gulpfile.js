/*!
 * Themeix Gulp Package (https://themeix.com/)
 * Copyright 2016-2020 themeix team
 * Licensed under MIT
 * Available Main Task Command : production, gulp, zip
 */

(function () {
    'use strict';
    /*
    =============================
        Let's see all CSS/JS Plugin into [package.json]
    =============================
    */

    var File_Name = 'html-primula.zip';
    var CSS_Files = [
 
    './node_modules/wowjs/css/libs/animate.css', 
    './node_modules/owl.carousel/dist/assets/owl.carousel.min.css', 
    './assets/css/fontawesome-all.min.css',
    './assets/css/custom.css',
    ];
    var JS_Files = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery.easing/jquery.easing.min.js',
    './node_modules/owl.carousel/dist/owl.carousel.min.js',
    './node_modules/wowjs/dist/wow.min.js',
    './assets/js/fontawesome.min.js',
    './assets/js/app.js',
    ];
 
 
/*
=============================
	Include Gulp & Plugins
=============================
*/
var gulp 			= require('gulp'),

sass = require('gulp-sass')(require('sass')),
 cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
terser = require('gulp-terser'),
jshint = require('gulp-jshint'),
plumber = require('gulp-plumber'),
c = require('ansi-colors'),
replace = require('gulp-replace'),
size = require('gulp-size'),
zip = require('gulp-zip'),

// postcss 		= require('postcss'),
atimport = require("postcss-import"),
purgecss = require("@fullhuman/postcss-purgecss")
 
 

gulp.task('sass', function(done) {
    return gulp.src('./assets/scss/*.scss')
        .pipe(plumber({
           // errorHandler: onError
        }))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets/css'))
        .pipe(size())
    done();
});
gulp.task('watch', function() {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
 
});

gulp.task(
    'default',
    gulp.series( 'sass','watch')
);

})();