var gulp = require('gulp');
var postcss = require('gulp-postcss');

var postcssProcesses = [
  require('autoprefixer')(['last 3 versions', '> 1%', 'ie 9']),
  require('postcss-import')(),
  require('postcss-simple-vars')(),
  require('postcss-simple-extend')(),
  require('postcss-nested')(),
];

gulp.task('css', function() {
  return gulp.src('./src/style.css')
    .pipe(postcss(postcssProcesses))
    .pipe(require('gulp-uncss')({
      html: ['./src/index.html'],
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['css'], function() {
  return gulp.src('./src/index.html')
    .pipe(require('gulp-inline-source')())
    .pipe(gulp.dest('./'));
})

gulp.task('dev', ['build'], function() {
  gulp.watch('src/*', ['build']);
});
