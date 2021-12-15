export default () => {
  return $.gulp
    .src($.path.scss.src)
    .pipe($.sass())
    .pipe($.gp.if($.app.isProd, $.gp.webpCss()))
    .pipe($.gp.autoprefixer())
    .pipe($.gp.shorthand())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gp.if($.app.isProd, $.gp.csso()))
    .pipe($.gp.rename($.app.rename.scss))
    .pipe($.gulp.dest($.path.scss.dest));
};
