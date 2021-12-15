export default () => {
  return $.gulp
    .src($.path.js.src)
    .pipe($.gp.babel())
    .pipe($.webpack($.app.webpack))
    .pipe($.gp.rename($.app.rename.js))
    .pipe($.gulp.dest($.path.js.dest));
};
