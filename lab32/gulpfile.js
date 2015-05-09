var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');  //min para arhivos de tip CSS


gulp.task('concat-css', function(){
    return gulp.src(['source/normalize.css', 'source/skeleton.css', 'source/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('source'));
});

gulp.task('minify-css', ['concat-css'], function(){
  return gulp.src('source/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});