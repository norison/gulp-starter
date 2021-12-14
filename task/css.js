import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

export default () => {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./public/css"));
};
