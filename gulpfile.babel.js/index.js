import gulp from "gulp";
import del from "del";
import webpack from "webpack-stream";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import loadPlugins from "gulp-load-plugins";
import browserSync from "browser-sync";
import path from "./config/path.js";
import app from "./config/app.js";

import clean from "./task/clean.js";
import pug from "./task/pug.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import font from "./task/font.js";
import server from "./task/server.js";
import watch from "./task/watch.js";

global.$ = {
  gulp,
  gp: loadPlugins(),
  del,
  webpack,
  sass: gulpSass(dartSass),
  browserSync,
  path,
  app,
};

const build = gulp.series(clean, gulp.parallel(pug, scss, js, img, font));
const dev = gulp.series(build, gulp.parallel(server, watch));

export { clean };
export { pug };
export { scss };
export { js };
export { img };
export { font };
export { server };
export { watch };
export { build };
export { dev };
export default app.isProd ? build : dev;
