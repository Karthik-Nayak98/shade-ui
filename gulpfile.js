const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildCSS() {
  return src(['./sass/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
}

function watchTask() {
  watch(['./sass/**/*.scss'], buildCSS);
}

exports.build = buildCSS;
exports.watch = watchTask;
exports.default = series(buildCSS, watchTask);
