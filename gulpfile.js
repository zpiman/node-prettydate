var gulp = require("gulp"),
    mocha = require("gulp-mocha");

gulp.task("test", function(){
  gulp.src("test/*")
    .pipe(mocha());
});
