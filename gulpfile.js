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