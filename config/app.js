const isProd = process.argv.includes("--production");
const isDev = !isProd;

const app = {
  isProd: isProd,
  isDev: isDev,
  pug: { pretty: isDev },
  rename: { scss: { extname: ".min.css" }, js: { extname: ".min.js" } },
  webpack: { mode: isProd ? "production" : "development" },
  imagemin: { verbose: true },
  fonter: { formats: ["ttf", "woff", "eot", "svg"] },
};

export default app;
