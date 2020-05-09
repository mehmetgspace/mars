const gulp = require('gulp');
const sass = require('gulp-sass');

function style() {
  return gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'))
}

exports.style = style;
