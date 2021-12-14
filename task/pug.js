import gulp from "gulp";
import pug from "gulp-pug";
import webpHtml from "gulp-webp-html";
import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp
    .src(path.pug.src)
    .pipe(pug(app.pug))
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest));
};
