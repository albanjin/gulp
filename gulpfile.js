const gulp = require('gulp'),
    babel = require("gulp-babel"),
    fs = require('fs'),
    assetRev = require('gulp-asset-rev'),
    //runSequence = require('run-sequence'),
    //rev = require('gulp-rev'),
    //revCollector = require('gulp-rev-collector'),
    $ = require('gulp-load-plugins')()


const pathUrl = {
    output: './dist/',
    main: './src/',
}

gulp.task("default", ['watch'])

//gulp.watch(['default'],function)
gulp.task('watch', function() {
    gulp.watch('src/**/*', ['js', 'scss', "html"])
})
gulp.task('js', () => {
    gulp.src(pathUrl.main + "**/*.js")
        .pipe($.concat('main.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist"))
        .pipe($.notify({ message: 'Scripts common task complete' }))
})

gulp.task("scss", () => {
    gulp.src(pathUrl.main + "**/*.scss")
        .pipe($.sass().on('error', $.sass.logError))
        // .pipe($.assetRev())
        .pipe(gulp.dest('dist'))
})

gulp.task('html', () => {
    gulp.src(pathUrl.main + "**/*.html")
        .pipe($.assetRev())
        .pipe(gulp.dest("dist"))
})


// albanjin 


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function() {
        gulp.src("./dist/**/*.css")
            .pipe(rev())
            .pipe(rev.manifest())
            .pipe(gulp.dest('rev/css'))
    })
    //js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function() {
    return gulp.src("./dist/**/*.js")
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));
})

//Html替换css、js文件版本
gulp.task('revHtml', function() {
    return gulp.src(['rev/**/*.json', 'View/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('View'));
})

//开发构建
gulp.task('dev', function(done) {
    condition = false;
    runSequence(
        ['revCss'], ['revJs'], ['revHtml'],
        done);
})