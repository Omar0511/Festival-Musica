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
const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done)
{
    src("src/scss/**/*.scss") // Identificar el archivo SASS
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarla en disco duro

    done(); // Callback: avisa a GULP cuando llegamos al final
}

function dev(done)
{
    watch("src/scss/**/*.scss", css)

    done();
}

// Llamar función CSS
exports.css = css;
exports.dev = dev;