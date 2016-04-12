var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	clean = require('gulp-clean'),
	livereload = require('gulp-livereload'),
	webserver = require('gulp-webserver');

gulp.task('clean', function() {
	return gulp.src(['public/stylesheets', 'public/images', 'public/javascipts'],{read: false})
		.pipe(clean());
});

gulp.task('styles', function() {
	return gulp.src('public/src/css/*.css')
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('public/stylesheets'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('public/stylesheets'));
});
gulp.task('scripts', function() {
	return gulp.src('public/src/scripts/*.js')
		.pipe(gulp.dest('public/javascripts'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('public/javascripts'));
})
gulp.task('images', function() {
	return gulp.src('public/src/images/*')
		.pipe(imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest('public/images'));
});
gulp.task('webserver', function() {
	gulp.src('./')
	.pipe(webserver({
		livereload: true,
		open: true
	}));
});

gulp.task('watch', function() {

	//看守所有css文档
	gulp.watch('public/src/css/*.css', ['styles']);

	//看守所有js脚本
	gulp.watch('public/src/scripts/*.js', ['scripts']);

	//看守所有图片
	gulp.watch('public/src/images/*', ['images']);

	//建立即时重整伺服器
	// var server = livereload();
	// gulp.watch(['dist/**']).on('change', function(file) {
	// 	server.change(file.path);
	// })
});

gulp.task('default', ['webserver', 'watch']);
