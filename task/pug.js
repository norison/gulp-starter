import gulp from "gulp";
import pug from "gulp-pug";

export default () => {
  return gulp.src("./src/pug/*.pug").pipe(pug()).pipe(gulp.dest("./public"));
};
