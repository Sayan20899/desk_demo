const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', function() {
  return gulp.src('app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app'));
});

gulp.task('watch', function() {
  gulp.watch('app/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));
