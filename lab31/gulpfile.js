/*
* Dependencias
*/                                  //modulos para ser instalados
var gulp = require('gulp'),
	concat = require('gulp-concat'), //mofdulo para concatenar
	uglify = require('gulp-uglify');  //modulopara crear .min

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('source/*.js')    //toma los nombres de los js en la pcarpeta source
		.pipe(concat('lab31.min.js'))  //concatena los nombre con la palabra min
		.pipe(uglify())     // crea los .min
		.pipe(gulp.dest('build/')) //guarda los .min en la carpeta build
});