export default () => {
  if ($.app.isProd) {
    $.gulp
      .src($.path.img.src)
      .pipe($.gp.newer($.path.img.dest))
      .pipe($.gp.webp())
      .pipe($.gulp.dest($.path.img.dest));
  }

  return $.gulp
    .src($.path.img.src)
    .pipe($.gp.newer($.path.img.dest))
    .pipe($.gp.if($.app.isProd, $.gp.imagemin($.app.imagemin)))
    .pipe($.gulp.dest($.path.img.dest));
};
