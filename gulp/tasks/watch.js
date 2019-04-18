var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	//inicia browsersync
	browserSync.init({
		//desactiva las notificaciones
		notify: false,
		//indica el directorio del cual se va a servir es servidor local
		server: {
			baseDir: "app"
		}
	});
	//inicia browsersync

	//wacha el archivo index.html
	watch('./app/index.html', function() {
		//cuando observe un cambio, recarga la pagina con browser sync
		browserSync.reload();
	});
	//wacha en la carpeta styles /*subcarpetas*/*uncss.css, cuando haya un cambio, inicia cssInject
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});
//cssInject no sucede hasta que la task "styles" haya sido completada con exito
gulp.task('cssInject', ['styles'],function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'] ,function() {
	browserSync.reload();
});
