# Festival Musica

## Herramientas utlizadas

- Visual Studio Code

### Tecnologías

- HTML5
- SASS
- JavaScript
- Gulp
- NPM

### Notas

1. Iniciando el proyecto en consola ingresamos: **npm init**
    - ENTER
    - ENTER
    - Description: **Proyecto con Gulp, Sass y HTML**
    - ENTER
    - ENTER
    - ENTER
    - Keywords: **SASS, Gulp,**
    - Author: **Omar Garcia**
    - ENTER
    - yes
1. Finalizando esto, se genera un archivo: **package.json**
    - Sirve para ejectuar comando NPM, instalar dependencias NPM

## INSTALACION SASS
1. En consola ingresamos: **npm install sass**
1. Se puede validar la dependencia en el archivo: **package.json**
1. Es mejor instalarla como dependencia de desarrollo, en consola con el comando: **npm install sass --save-dev**
1. Se valida en el mismo archivo de **package.json**
    - **NOTA:** se puede eliminar la carpeta de: **node_modules**, para recuperarla en consola solo ingresamos: **npm i**
1. Al terminar el proyecto se elimina esa carpeta como recomendación

## COMPILAR SASS

1. Editamos en el archivo **package.json**
1. Donde dice test por sass
    - **("sass": "sass --watch src/scss:build/css")**
    - **--watch** sirve para que se actualicen los cambios del css que están en el **app.scss**
1. En consola ingresamos: **npm run sass** (corremos el script) y podemos ver que ya no se detiene sass
1. Cualquier cambio ya lo mantedrá actualizado ya que el **--watch** para eso funciona

###  INSTALAR GULP
1. En consola: **npm i -D gulp**
1. Una vez instalado, creamos un archivo: **gulpfile.js**

#### LLAMAR TAREAS CON GULP NPX
1. En consola ponemos: **npx gulp primerTarea**

#### LLAMAR TAREAS CON GULP NPM
1. En consola ponemos: **npm run primerTarea** (esto porque asi se llama en el **gulpfile.js**)

#### INSTALAR SASS COMO DEPENDENCIA DE DESARROLLO
1. En consola ingresamos **npm i --save-dev gulp-sass**
1. Después corremos **npx gulp css**
1. Una vez que creamos el watch en consola ingresamos: **npm run dev oh npx gulp dev**
- Posteriormente podemos llamarla con: **_gulp dev_**

#### CREAR ARCHIVOS SASS
1. Al crear archivos SASS, debemos poner guión bajo, sino creará 2 hojas de estilos
    - **@FORWARD** solo va en el archivo **index**
    - **@USE** va en los demas archivos para mandarlos a llamar
    - **PLUMBER:** evitar que cuando tengamos un ERROR, GULP se detenga
1. Instalamos como dependencia de desarrollo en consola: **npm i --save-dev gulp-plumber**

#### CREAR SNIPET
1. Control + Shift + P
1. User snippets
1. scss.json
1. Movemos la carpeta de **IMG** que esta en RAIZ hacia **SRC** instalamos la dependencia de desarrollo en consola: **npm install --save-dev gulp-webp**

#### Aligerar Imagenes con GULP
1. En consola: **npm i --save-dev gulp-imagemin@7.1.0.**
1. El @ es para indicar una versión en específico.
1. Tenemos que instalar también: **npm i --save-dev gulp-cache**

#### Formato AVIF
1. En consola: **npm install --save-dev gulp-avif**

#### Crear SNIPPETS para imagenes
1. Control + Shift + P
1. Buscamos HTML y nos abrirá **html.json**

#### Instalaciones de dependencias, minificar CSS
1. **npm i --save-dev cssnano autoprefixer gulp-postcss**
1. Validamos en package.json que esten las dependencias y vamos a ingresar **gulp-css**
1. Sirve para una vez que monifica, ayuda a poder leer las hojas de estilo

####  SourceMaps
1. **npm i --save-dev gulp-sourcemaps**
1. Instalación de Depdendencia.
1. **npm i gulp-terser-js**

#### Carpetas
1. Podemos eliminar **package.lock**
    - Node_modules
    - gulpfile
1. Estas carpetas no se suben
1. Ejemplo: solo se suben carpetas de **BUILD, INDEX, VIDEO**

### URL

- Sitio: **( https://fest-of-music.netlify.app/ )**