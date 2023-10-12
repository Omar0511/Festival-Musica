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
const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done)
{
    src("src/scss/app.scss") // Identificar el archivo SASS
        .pibe(sass()) // Compilarlo
        .pibe(dest("build/css")); // Almacenarla en disco duro

    done(); // Callback: avisa a GULP cuando llegamos al final
}

// Llamar función CSS
exports.css = css;