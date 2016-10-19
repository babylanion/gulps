/**
 * Created by mayi on 2016/10/19.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    SSI = require('browsersync-ssi'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    watchPath = require('gulp-watch-path'),
    rename = require('gulp-rename'),   //重命名
    concat = require('gulp-concat'),   //合并
    sourcemaps = require('gulp-sourcemaps'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-scss'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),
    stylus = require('gulp-stylus'),
    validator = require('gulp-html'),
    connect = require('gulp-connect');

//让命令行输出文字有颜色
gulp.task('default',function(){
    gutil.log('message');
    gutil.log(gutil.colors.red('error'));
    gutil.log(gutil.colors.green('message:') + "some");
});

//js处理
gulp.task('uglifyjs', function () {
    return gulp.src('app/js/*.js')
         .pipe(sourcemaps.init())
        //.pipe(concat('all.js'))
        //.pipe(gulp.dest('dist/js/tmp'))
        //.pipe(rename('all.min.js'))
        .pipe(uglify({mangle: {except: ['require' ,'exports' ,'module' ,'$']}}))/*排除混淆关键字*/
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
});

//检测到某个 js 文件被修改时，只编写当前修改的 js 文件
gulp.task('watchjs', function () {
    gulp.watch('app/js/**/*.js', function (event) {
        var paths = watchPath(event, 'app/', 'dist/');
        /*
         paths
         { srcPath: 'src/js/log.js',
         srcDir: 'src/js/',
         distPath: 'dist/js/log.js',
         distDir: 'dist/js/',
         srcFilename: 'log.js',
         distFilename: 'log.js' }
         */
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath)
        gutil.log('Dist ' + paths.distPath)

        gulp.src(paths.srcPath)
            .pipe(uglify())
            .pipe(gulp.dest(paths.distDir))
    })
});

//gulp.task('default', ['uglifyjs']);
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        //.pipe(plumber())//默认的 Gulp 任务在执行过程中如果出错会报错并立即停止当前工作流（如在 watch Sass编译时候恰巧 Sass代码写错了）。使用plumber 模块可以在纠正错误后继续执行任务。
        //.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCss())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'not ie <= 8']
        }))
        .pipe(sourcemaps.write())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'));
});

//html
gulp.task('changehtml', function() {
    return gulp.src('app/index.html')
        //.pipe(validator())
        .pipe(gulp.dest('dist/'));
});
//gulp.task('default', ['html']);

//serve
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./dist/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'],['app/sass/**/*.scss'],['app/js/*.js'], ['changehtml'],['sass'],['watchjs']).on('change',browserSync.reload);
});

gulp.task('default', ['connect', 'watch']);
