# Express

Este es un servidor de ejemplo en el que exploramos varios conceptos básicos de backend con Node.js y Express.

## Instalación

Clona el repositorio y ejecuta `npm install` para instalar las dependencias.

Lanza el servidor con `npm start`.

## Secciones

Dispone de varios routers para explorar diferentes conceptos:

- **ejemplo-api**: Un ejemplo básico de API REST con Express en el que podemos hacer operaciones CRUD sobre una lista de usuarios.
- **api-figlet**: Un ejemplo de API REST que utiliza un módulo de npm para convertir texto a arte ASCII.
- **exec**: Un ejemplo de cómo ejecutar comandos del sistema desde un servidor Express, en este caso con el comando `ping` de ubuntu.
- **forms**: Un ejemplo de cómo recibir datos de un formulario en un servidor Express usando formularios HTML y JSON.

## TO-DO

Hay varias cosas en las que podeis trabajar sobre este servidor:

### Añadir fuentes a la API de figlet

El formulario de figlet incluye un campo para seleccionar la fuente. Intenta añadir mas fuentes, ¿de donde crees que puedes sacar los nombres de las fuentes?

### Añadir opciones a la API de figlet

La API de figlet solo permite convertir texto a arte ASCII. Intenta añadir opciones para cambiar el tamaño de la fuente, el espaciado entre letras, el ancho del texto, etc.

### Sustituir el comando `ping` por otro comando

El comando `ping` del router `exec` funciona en ubuntu, pero no en Windows. Intenta sustituirlo por otro comando que funcione en Windows.

### Sustituir lista de usuarios por una base de datos

El router `ejemplo-api` utiliza una lista de usuarios en memoria. Intenta sustituirla por una base de datos real, como SQLite o MongoDB.

### Añadir validación de datos a los formularios

Ningun formulario de este servidor valida los datos que recibe. Intenta añadir validación de datos a los formularios, por ejemplo, para comprobar que un email tiene el formato correcto.

### Instala y configura un logger

Instala un módulo de npm para loguear las peticiones que recibe el servidor. Puedes usar `morgan` o `winston`.

Asegurate de guardar los logs en un fichero y no en la consola.