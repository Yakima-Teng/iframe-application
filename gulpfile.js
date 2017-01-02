const gulp = require('gulp')
const less = require('gulp-less')
const autoPrefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const rename = require('gulp-rename')
const proxyMiddleware = require('http-proxy-middleware')
const changed = require('gulp-changed')
const minifycss = require('gulp-clean-css')
const path = require('path')
const ghpages = require('gh-pages')

// 将less目录下less指定的less文件编译后输出到css目录下
gulp.task('globalLess', () => {
  const SRC = path.join(__dirname, 'styles')
  const DEST = path.join(__dirname, 'css')
  return gulp.src([path.join(SRC, 'reset.less'), path.join(SRC, 'importer.less')])
    .pipe(changed(DEST, { extension: '.min.css' }))
    .pipe(less()).on('error', e => console.log(e))
    .pipe(autoPrefixer({
      browsers: [ 'last 20 versions' ],
      cascade: true
    }))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(DEST))
    .pipe(browserSync.stream())
})

// 将pages目录下各个子目录中的importer.less文件编译后输出为同级目录下的importer.min.css
gulp.task('pageLess', () => {
  const SRC = path.join(__dirname, 'pages')
  const DEST = path.join(__dirname, 'pages')
  return gulp.src(path.join(SRC, '**/*.less'))
    .pipe(changed(DEST, { extension: '.min.css' }))
    .pipe(less()).on('error', e => console.log(e))
    .pipe(autoPrefixer({
      browsers: [ 'last 20 versions' ],
      cascade: true
    }))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(DEST))
    .pipe(browserSync.stream())
})

// 开启本地服务器 & 监听文件变动
gulp.task('dev', ['globalLess', 'pageLess'], () => {
  browserSync.init({
    server: './'
  })

  gulp.watch(path.join(__dirname, 'styles', '*.less'), ['globalLess'])
  gulp.watch(path.join(__dirname, 'pages', '**/*.less'), ['pageLess'])
  gulp.watch([
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'scripts', '*.js'),
    path.join(__dirname, 'pages', '**/*.html'),
    path.join(__dirname, 'pages', '**/*.js')
  ]).on('change', browserSync.reload)
})

// 发布DEMO
gulp.task('deploy', () => {
  return ghpages.publish(__dirname, {
    src: [
      'index.html',
      'scripts/**/*.js',
      'pages/**/*.*',
      'lib/**/*.js',
      'img/**/*.*',
      'fonts/**/*.*',
      'css/**/*.css'
    ]
  }, err => {
    if (err) {
      console.log(err)
      console.log('Failed deploying')
      return
    }
    console.log('Finished deploying')
  })
})
