import gulp from "gulp";
import browserSync from "browser-sync";
import pug from "./pug.js";
import scss from "./scss.js";
import js from "./js.js";
import path from "../config/path.js";

export default () => {
  gulp.watch(path.pug.watch).on("change", gulp.series(pug, browserSync.reload));
  gulp.watch(path.scss.watch).on("change", gulp.series(scss, browserSync.reload));
  gulp.watch(path.js.watch).on("change", gulp.series(js, browserSync.reload));
};
