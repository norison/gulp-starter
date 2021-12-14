import gulp from "gulp";
import browserSync from "browser-sync";
import pug from "./pug.js";
import css from "./css.js";
import path from "../config/path.js";

export default () => {
  gulp.watch(path.pug.watch).on("change", gulp.series(pug, browserSync.reload));
  gulp.watch(path.css.watch).on("change", gulp.series(css, browserSync.reload));
};
