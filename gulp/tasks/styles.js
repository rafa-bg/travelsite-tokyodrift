var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
	//.src indica el punto de partida
	//el primer .pipe aplica los filtros de post csscomo se indica 2 lineas abajo
	//on.error -> loggea a la consola un string con el informe del error
	//luego termina la tarea para no destruir el workflow
	//.dest indica donde dejar los archivos que pasan por el filtro
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});