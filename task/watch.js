import gulp from "gulp";
import browserSync from "browser-sync";

export default () => {
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug", browserSync.reload));
  gulp.watch("./src/scss/**/*.scss", gulp.series("css", browserSync.reload));
};
