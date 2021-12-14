import gulp from "gulp";
import clean from "./task/clean.js";
import pug from "./task/pug.js";
import css from "./task/css.js";
import server from "./task/server.js";
import watch from "./task/watch.js";

const build = gulp.series(
  clean,
  gulp.parallel(pug, css),
  gulp.parallel(server, watch)
);

export { clean };
export { pug };
export { css };
export { server };
export { watch };
export default build;
