const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-uglifycss');

function buildCSS() {
  return src(['./sass/**/*.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(
      minifyCss({
        uglyComments: true,
      })
    )
    .pipe(dest('dist'));
}

function buildDocs() {
  return src(['./documentation/docs.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist'));
}

function minifyJS() {
  return src('./documentation/prism/prism.js')
    .pipe(minifyJs())
    .pipe(dest('./documentation/prism'));
}

function minifyCSS() {
  return src('./documentation/prism/*.css')
    .pipe(
      minifyCss({
        uglyComments: true,
      })
    )
    .pipe(dest('./documentation/prism'));
}

function watchTask() {
  watch(['./sass/**/*.scss'], buildCSS);
  watch(['./documentation/docs.scss'], buildDocs);
  watch(['./documentation/prism/*.js'], minifyJS);
  watch(['./documentation/prism/*.css'], minifyCSS);
}

exports.build = buildCSS;
exports.buildDocs = buildDocs;
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
exports.watch = watchTask;

exports.default = series(
  parallel(buildCSS, buildDocs, minifyCSS, minifyJS),
  watchTask
);
