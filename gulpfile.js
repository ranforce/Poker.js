var gulp = require("gulp");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var path = {
	HTML: "demo/*.html",
	JS: "source/*.js"
};
gulp.task('js', function() {
	return gulp.src(path.JS)
		.pipe(uglify())
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(gulp.dest('release'));
});
gulp.task("prod", ['js']);
gulp.task("default", ['prod']);