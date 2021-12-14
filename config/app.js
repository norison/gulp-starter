const app = {
  pug: { pretty: false },
  rename: { scss: { extname: ".min.css" }, js: { extname: ".min.js" } },
  webpack: { mode: "production" },
  imagemin: { verbose: true },
};

export default app;
