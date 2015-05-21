var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var critical    = require('critical');
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build SASS

gulp.task('sass', function () {
    return gulp.src('./assets/css/main.sass')
        .pipe(sass({
            includePaths: ['sass'],
            outputStyle: "compressed",
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.reload({stream:true}))
});

// Build the Jekyll Site

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server

gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '../html'
        }
    });
});

// Watch sass files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync

gulp.task('watch', function () {
    gulp.watch('./_sass/*.sass', ['sass']);
    gulp.watch("./assets/css/*.sass", ['css', 'jekyll-rebuild']);
    gulp.watch("./assets/js/*.js", ['js', 'jekyll-rebuild']);
    gulp.watch(['./index.html', './_layouts/*.html', './_posts/*', './_includes/*'], ['jekyll-rebuild']);
});

// Default task, running just `gulp` will compile the sass,
// compile the jekyll site, launch BrowserSync & watch files.

gulp.task('default', ['browser-sync', 'watch']);
