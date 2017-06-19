var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('html', function(){
  return gulp.src('*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function(){
  return gulp.src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
  return gulp.src('client/*.js')
    .pipe(less())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('load', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', [ 'html', 'css', 'js' ]);