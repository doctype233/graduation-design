(function (r) {
    "use strict";
    const scss = r("gulp-scss");
    const gulp = r("gulp");
    const babel = require('gulp-babel');
    const swig = require('gulp-swig');
    const browserify = require('browserify');
    const sourcemaps = require('gulp-sourcemaps');
    const source = require('vinyl-source-stream');
    const buffer = require('vinyl-buffer');
    gulp.task("scss", function () {
        gulp.src(
            "src/scss/**/*.scss"
        ).pipe(scss())
        .pipe(gulp.dest("dist/css"));
    });

    gulp.task('babel', () =>
        gulp.src('src/es/*.js')
            .pipe(babel({
                presets: ['env']
            }))
            .pipe(gulp.dest('./dist/js'))
    );

    gulp.task('swig', function () {
        gulp.src('src/html/**/*.html')
            .pipe(swig({ defaults: { cache: false } }))
            .pipe(gulp.dest('./dist/html'))
    });
    // gulp.task('browserify',function(){
    //     var b = browserify({
    //         entries:'src/es/header-main.js',
    //         debug:true  //告知browserify在运行同时生成内联sourcemap用于调试
    //     });
    //     return b.bundle()
    //     .pipe(source('home.js'))
    //     .pipe(buffer())
    //     .pipe(sourcemaps.init({loadMaps:true}))
    //     .pipe(sourcemaps.write('.'))
    //     .pipe(gulp.dest('./dist/js'))
    // });
    
    gulp.task('dev', [ 'scss','babel', 'swig','browserify']);
    gulp.task('watch',function(){
        gulp.watch('src/scss/**/*.scss',['scss']);
        gulp.watch('src/html/**/*.html',['swig']);
        // gulp.watch('src/components/**/*.html',['swig1']);
        gulp.watch('src/es/*.js',['babel']);
        // gulp.watch('src/es/header-main.js',['browserify']);
      
    })
}(require));



