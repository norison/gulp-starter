import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import path from "../config/path.js";

const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src(path.css.src)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest(path.css.dest));
};
