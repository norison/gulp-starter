import gulp from "gulp";
import pug from "gulp-pug";
import path from "../config/path.js";

export default () => {
  return gulp.src(path.pug.src).pipe(pug()).pipe(gulp.dest(path.pug.dest));
};
