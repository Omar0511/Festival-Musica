# Proyecto Festival Musica

## Descripción

- Iniciando el proyecto en consola ingresamos: npm init
- ENTER
- ENTER
- Description: Proyecto con Gulp, Sass y HTML
- ENTER
- ENTER
- ENTER
- Keywords: SASS, Gulp,
- Author: Omar Garcia
- ENTER
- yes
- Finalizando esto, se genera un archivo: package.json
- Sirve para ejectuar comando NPM, instalar dependencias NPM

- INSTALACION SASS
- En consola ingresamos: npm install sass
- Se puede validar la dependencia en el archivo: package.json
- Es mejor instalarla como dependencia de desarrollo, en consola con el comando: npm install sass --save-dev
- Se valida en el mismo archivo de package.json

- NOTA: se puede eliminar la carpeta de: node_modules, para recuperarla en consola solo ingresamos: npm i
- Al terminar el proyecto se elimina esa carpeta como recomendación

- COMPILAR SASS
- Editamos en el archivo package.json donde dice test por sass ("sass": "sass --watch src/scss:build/css")
- --watch sirve para que se actualicen los cambios del css que están en el app.scss
- En consola ingresamos: npm run sass (corremos el script) y podemos ver que ya no se detiene sass
- Cualquier cambio ya lo mantedrá actualizado ya que el --watch para eso funciona

- INSTALAR GULP
- En consola: npm i -D gulp
- Una vez instalado, creamos un archivo: gulpfile.js

- LLAMAR TAREAS CON GULP NPX
- En consola ponemos: npx gulp primerTarea

- LLAMAR TAREAS CON GULP NPM
- En consola ponemos: npm run primerTarea (esto porque asi se llama en el gulpfile.js)

- INSTALAR SASS COMO DEPENDENCIA DE DESARROLLO
- En consola ingresamos npm i --save-dev gulp-sass
- Después corremos npx gulp css
- Una vez que creamos el watch en consola ingresamos: npm run dev oh npx gulp dev

### Sitio

- URL : ( **https://fest-of-music.netlify.app/ **)
-