const pathSrc = "./src";
const pathDest = "./public";

const path = {
  root: pathDest,
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },
  scss: {
    src: pathSrc + "/scss/*.scss",
    watch: pathSrc + "/scss/**/*.scss",
    dest: pathDest + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },
  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },
  font: {
    src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: pathDest + "/font",
  },
};

export default path;
