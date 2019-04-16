//aca van los plugins
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

//aca van los plugins

//accion (task) por defecto
gulp.task('default', function() {
	console.log("yay!");
});

//estas tasks hacen cosas
gulp.task('html', function() {
	console.log("Algo bonito aca ;)");
});

gulp.task('styles', function() {
	//.src indica el punto de partida
	//el priper .pipe aplica los filtros de post csscomo se indica 2 lineas abajo
	//.dest indica donde dejar los archivos que pasan por el filtro
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

//gulp watch
gulp.task('watch', function() {
	//wacha el archivo en rutadearchivo, en este caso index.html
	watch('./app/index.html', function() {
		//cuando observe un cambio, haz la task "start"
		gulp.start('html');
	});
	//wacha en la carpeta styles /*subcarpetas*/*uncss.css
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('styles');
	});
});

//estas tasks hacen cosas