const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    startPath: './app/index.html'
  });
  gulp.watch('./app/assets/styles/**/*.scss', style);
  gulp.watch('./app/*.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
