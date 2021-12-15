import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import csso from "gulp-csso";
import rename from "gulp-rename";
import webpCss from "gulp-webp-css";
import gulpif from "gulp-if";
import path from "../config/path.js";
import app from "../config/app.js";

const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src(path.scss.src)
    .pipe(sass())
    .pipe(gulpif(app.isProd, webpCss()))
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(gulpif(app.isProd, csso()))
    .pipe(rename(app.rename.scss))
    .pipe(gulp.dest(path.scss.dest));
};
