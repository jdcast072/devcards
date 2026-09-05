# DevCards

DevCards es una mini aplicación web para mostrar tecnologías, habilidades y perfil profesional en formato de tarjetas. El proyecto permite editar la información del perfil, cambiar la imagen de avatar y crear, visualizar y eliminar tarjetas de tecnologías.

Página desplegada en GitHub Pages:
[DevCards](https://jdcast072.github.io/devcards/)

## Descripción del proyecto

La aplicación está pensada como una tarjeta personal interactiva para presentar tecnologías y conocimientos técnicos. Actualmente incluye:

- edición del nombre, profesión y descripción del perfil
- cambio de imagen de avatar
- creación de nuevas tarjetas de tecnologías
- renderizado inicial a partir de un array de datos
- opción de dar like y eliminar tarjetas
- interacción con modales para edición y creación

## Funcionalidades implementadas

### Perfil
- Mostrar nombre, profesión y descripción del usuario.
- Abrir un modal para editar estos datos.
- Guardar los cambios en la interfaz principal.

### Avatar
- Abrir un modal para cambiar la imagen del perfil.
- Actualizar la imagen del avatar principal y del encabezado.

### Tarjetas de tecnologías
- Mostrar tarjetas con:
  - nombre
  - categoría
  - descripción
  - imagen
- Crear tarjetas nuevas desde un formulario.
- Eliminar tarjetas desde el botón de eliminación.
- Dar like a una tarjeta.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- DOM para manipulación dinámica
- Templates y clonación de nodos

## Estructura del proyecto

```text
devcards/
├── src/
│   ├── blocks/
│   ├── components/
│   ├── pages/
│   │   └── index.js
│   └── styles/
│       └── index.css
├── index.html
├── README.md
└── package.json
```

## Estado actual del proyecto

Hasta el momento, el proyecto incluye la base de la interfaz y la lógica principal de:

- actualización del perfil
- edición del avatar
- creación de tarjetas tecnológicas
- eliminación de tarjetas
- renderizado inicial de datos

## Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Ejecutar la aplicación con Live Server o abrir el archivo `index.html` en el navegador.
3. Interactuar con los modales para editar el perfil, cambiar el avatar y crear nuevas tarjetas.

## Objetivo

El proyecto busca simular una landing page personal para mostrar tecnologías y habilidades de un desarrollador, con una experiencia visual clara y dinámica.

## Próximos pasos sugeridos

- validar formularios
- limpiar inputs después de enviar
- guardar datos en localStorage
- agregar edición de tarjetas existentes
- mejorar la experiencia visual y responsive
- refactorizar la lógica para mantener un orden más limpio y escalable

## Enlaces

- Página pública: [DevCards](https://jdcast072.github.io/devcards/)
- Repositorio del proyecto: consultar la sección de GitHub del usuario o el enlace del repositorio asociado
