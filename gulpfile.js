const { src, dest, watch, series, parallel } = require("gulp");

const del = require("del");

const sass = require("gulp-sass");
sass.compiler = require("node-sass");

const minifyCSS = require("gulp-csso");
const sourcemaps = require("gulp-sourcemaps");
const stripCssComments = require('gulp-strip-css-comments');

const rename = require("gulp-rename");

const connect = require("gulp-connect");
const open = require("gulp-open");

const postcss = require("gulp-postcss");
const postcssCustomProperties = require("postcss-custom-properties");

const paths = {
    demo: "./demo",
    source: "./src",
    assets: "./node_modules/@patternfly",
    compiled: "./dist"
};

const demoIndex = paths.demo + "/index.html";

function clean() {
  return del(["*"], {
    cwd: paths.compiled
  });
}

function css() {
  return src(["*theme.scss", "typography.scss"], {
    cwd: paths.source
  })
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(stripCssComments())
    .pipe(postcss([
      postcssCustomProperties()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.compiled))
    .pipe(connect.reload());
}

function minifycss() {
  return src(["*theme.css", "typography.css"], {
    cwd: paths.compiled
  })
    .pipe(minifyCSS())
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(dest(paths.compiled));
}

function copy() {
  return src(["*"], {
    cwd: paths.demo
  })
    .pipe(dest(paths.compiled))
    .pipe(connect.reload());
}

function watchSass() {
  return watch(paths.source + "/**/*.scss", {ignoreInitial: false}, css);
}

function watchDemo() {
  return watch(paths.demo, {ignoreInitial: false}, copy);
}

function serve() {
  connect.server({
      root: [paths.demo, paths.compiled, paths.assets],
      port: 8010,
      livereload: true
  });
}

function trigger() {
  var options = {
    uri: "http://localhost:8010",
    app: "Google chrome"
  };
  return src(demoIndex)
    .pipe(open(options))
    .pipe(connect.reload(demoIndex));
}

// Default task is the build
exports.build = series(clean, css, minifycss);
exports.watch = series(exports.build, parallel(serve, trigger, watchDemo, watchSass));
exports.prod  = series(clean, css, minifycss);

exports.default = exports.build;