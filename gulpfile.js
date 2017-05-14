/**
 * Created by john zhou on 2017/5/14.
 */
var gulp = require("gulp");

var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");


//处理css
gulp.task("css",function(){

    gulp.src("./public/css/*.css")
        .pipe(cssmin())
        .pipe(gulp.dest("./release/css"));

});

//处理js
gulp.task("js",function(){

    gulp.src("./public/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./release/js"));

});



