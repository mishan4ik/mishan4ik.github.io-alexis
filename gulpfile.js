var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

//конвектирую стилус в css файл
function convector_stylus() {
  return gulp.src('app/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.stream());
}

function watch__stylus(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
     //слежу за файлами watch
        gulp.watch('app/stylus/*.styl', convector_stylus)
        gulp.watch("./index.html").on('change', browserSync.reload);
    }
gulp.task("styl",convector_stylus);
gulp.task("watch",watch__stylus);
gulp.task("build",gulp.series("styl","watch"));