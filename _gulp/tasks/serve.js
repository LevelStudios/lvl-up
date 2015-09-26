var gulp        = require('gulp');
var exec        = require('child_process').exec;
// var nodemon     = require('gulp-nodemon');

gulp.task('serve', function (cb) {
    exec('node server/app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});