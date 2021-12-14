const pathSrc = "./src";
const pathDest = "./public";

const path = {
  root: pathDest,
  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },
  css: {
    src: pathSrc + "/scss/style.scss",
    watch: pathSrc + "/scss/**/*.scss",
    dest: pathDest + "/css"
  },
};

export default path;
