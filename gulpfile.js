import gulp from "gulp";
import clean from "./task/clean.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import server from "./task/server.js";
import watch from "./task/watch.js";

const build = gulp.series(
  clean,
  gulp.parallel(pug, scss, js),
  gulp.parallel(server, watch)
);

export { clean };
export { pug };
export { scss };
export { js };
export { server };
export { watch };
export default build;
