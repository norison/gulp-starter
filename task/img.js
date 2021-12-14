import gulp from "gulp";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import path from "../config/path.js";
import app from "../config/app.js";

export default () => {
  return gulp
    .src(path.img.src)
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(imagemin(app.imagemin))
    .pipe(gulp.dest(path.img.dest));
};
