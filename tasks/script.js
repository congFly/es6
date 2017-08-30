/**
 * Created by Administrator on 2017/8/30.
 */
import gulp from 'gulp';
import gulpif from 'gulp-if';//处理if else
import concat from 'gulp-concat';//处理文件拼接
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';//文件流
import named from 'vinyl-named';//文件重命名
import livereload from 'gulp-livereload';//热更新，浏览器自动刷新
import plumber from 'gulp-plumber';//文件信息流
import rename from 'gulp-rename';//文件重命名
import uglify from 'gulp-uglify';//压缩js、css
import {log,colors} from 'gulp-util';//命令行工具输出的包
import args from './util/args';//引入命令行参数解析的包


gulp.task('script',()=>{
    "use strict";
    return gulp.src(['app/js/index.js'])
        //处理错误逻辑
        .pipe(plumber({
            errorHandler:function () {

            }
        }))

        .pipe(named())

        .pipe(gulpWebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader:'babel'
                }]
            }
        }),null,(err,stats)=>{
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks:false
        }))
        })

        //编译完的路径
        .pipe(gulp.dest('server/public/js'))

        //编译完的文件再复制一份
        .pipe(rename({
            basename:'cp',
            extname:'.min.js'
        }))

        //将编译完的文件进行压缩
        .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))

        //存储到某个地方
        .pipe(gulp.dest('server/public/js'))

        //监听文件，当文件变化后，自动刷新
        .pipe(gulpif(args.watch,livereload()))
});