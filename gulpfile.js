 var gulp  = require("gulp"); 
 var sass = require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('src/styles/basic.scss')
	.pipe(sass())
    .pipe(gulp.dest('./dist/css'));
  9
})


gulp.task("default" , function(){
	gulp.watch("src/styles/*.scss",['sass'])
})

