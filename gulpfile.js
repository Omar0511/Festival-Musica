/*
    function tarea(done)
    {
        console.log("Primer tarea");

        done();
    }

    Código node.js, mandamos a llamar la función
    exports.primerTarea = tarea;
*/

/*
    Manda llamar GULP que instalamos en el package.json ( require("gulp") );
    
    src = sirve para identificar un archivo o varios
    dest = almacena algo en una carpeta de estilo
*/
const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes
const webp = require('gulp-webp');

function css(done)
{
    src('src/scss/**/*.scss') // Identificar el archivo SASS
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarla en disco duro

    done(); // Callback: avisa a GULP cuando llegamos al final
}

function versionWebp( done )
{
    // La calidad de las IMG
    const opciones = {
        quality: 50
    };

    // Si tuvieramos más formatos, los ingresamos dentro de las llaves..
    src('src/img/**/*.{png, jpg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )

    done();
}

function dev(done)
{
    watch('src/scss/**/*.scss', css)

    done();
}

// Llamar función CSS
exports.css = css;
exports.versionWebp = versionWebp;
/*
    series: ejecuta una tarea tras otra
    paralell: ejecuta las tareas al mismo tiempo
*/
exports.dev = parallel( versionWebp, dev );