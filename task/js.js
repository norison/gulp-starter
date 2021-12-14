import gulp from "gulp";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp
    .src(path.js.src)
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(gulp.dest(path.js.dest));
};
