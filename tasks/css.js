/**
 * Created by Administrator on 2017/8/30.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';


gulp.task('css',()=>{
    "use strict";
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
});