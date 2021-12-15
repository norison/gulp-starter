export default () => {
  return $.gulp
    .src($.path.font.src)
    .pipe($.gp.newer($.path.font.dest))
    .pipe($.gp.fonter($.app.fonter))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.gp.ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest));
};
