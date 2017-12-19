const gulp = require('gulp');
const watch = require('gulp-watch');
const fork = require('child_process').fork;

process.on('uncaughtException', function (exception) {
  console.error(exception);
  process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
  console.error("Unhandled Rejection at: Promise:", p, " reason: ", reason);
  process.exit(1);
});

gulp.task('tests', function () {
  let ls = null;
  let runTests = () => {
    if (ls) {
      ls.kill();
      ls = null;
    }
    let command = `${process.env['PWD']}/testRunner.js`;
    let options = {
      cwd: process.env.PWD + '/',
      env: process.env,
      silent: false
    };
    ls = fork(command, options);
  }
  runTests();
  // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
  return watch(['src/**/*.js', 'spec/**/*.js', 'index.js', 'testRunner.js', 'config/**/*.json'], function () {
    runTests();
  });
});