const pathSrc = "./src";
const pathDest = "./public";

const path = {
  root: pathDest,
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },
  scss: {
    src: pathSrc + "/scss/*.scss",
    watch: pathSrc + "/scss/**/*.scss",
    dest: pathDest + "/css"
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },
};

export default path;
