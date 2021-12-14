import gulp from "gulp";
import browserSync from "browser-sync";
import pug from "./pug.js";
import scss from "./scss.js";
import js from "./js.js";
import img from "./img.js";
import path from "../config/path.js";

export default () => {
  gulp.watch(path.pug.watch).on("change", gulp.series(pug, browserSync.reload));
  gulp.watch(path.scss.watch).on("change", gulp.series(scss, browserSync.reload));
  gulp.watch(path.js.watch).on("change", gulp.series(js, browserSync.reload));
  gulp.watch(path.img.watch).on("change", gulp.series(img, browserSync.reload));
};
