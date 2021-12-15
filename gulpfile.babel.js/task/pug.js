export default () => {
  return $.gulp
    .src($.path.pug.src)
    .pipe($.gp.pug($.app.pug))
    .pipe($.gp.if($.app.isProd, $.gp.webpHtml()))
    .pipe($.gulp.dest($.path.pug.dest));
};
