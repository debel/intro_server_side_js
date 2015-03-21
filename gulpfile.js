var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('build', function () {
    gulp.src(['bower_components/impress.js/js/impress.js', 'bower_components/highlightjs/highlight.pack.js'])
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('js/'));
        
    gulp.src(['bower_components/highlightjs/styles/default.css','css/impress.css'])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('css/'));
});


gulp.task('watch', function () {
    gulp.watch(['bower_components/impress.js/js/impress.js', 'bower_components/highlightjs/highlight.pack.js', 'bower_components/highlightjs/styles/default.css', 'css/impress.css'], ['build']);
});
