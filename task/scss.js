import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import rename from "gulp-rename";
import path from "../config/path.js";
import app from "../config/app.js";

const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src(path.scss.src)
    .pipe(sass(app.sass))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(rename(app.rename))
    .pipe(gulp.dest(path.scss.dest));
};
