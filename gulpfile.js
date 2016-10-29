require('babel-core/register')

const gulp    = require('gulp')
const mocha   = require('gulp-mocha')
const webpack = require('webpack-stream')

gulp.task('mocha', () => {
  return gulp.src('test/*').pipe(mocha())
})

gulp.task('webpack', () => {
  return gulp.src('./src/*')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public/dist'))
})

gulp.task('watch', () => {
  return gulp.watch('./src/*', ['mocha', 'webpack'])
})

gulp.task('default', ['mocha', 'webpack', 'watch'])
