# Proyecto de Blog con React y Node.js

Este proyecto consiste en una aplicación de blog que permite a los usuarios ver, crear, editar y eliminar posts. Utiliza React en el frontend y Node.js en el backend.

## Descripción

El blog permite a los usuarios interactuar con contenido dinámico gestionado a través de una API RESTful. Los usuarios pueden leer posts, además de crear y editar entradas si están autenticados como administradores.

### Características

- Visualización de posts.
- Autenticación de usuarios.
- Creación y edición de posts.
- Separación de texto en párrafos ajustados para una mejor lectura.
- Estilo responsivo y accesible.

## Configuración

Para ejecutar este proyecto, necesitarás tener instalado Node.js y npm. Sigue los pasos siguientes para configurar el entorno de desarrollo.

### Instalación Backend

1. Navega al directorio del backend.
2. Ejecuta `npm install` para instalar las dependencias.
3. Asegúrate de configurar las variables de entorno necesarias en un archivo `.env`.
4. Ejecuta `node server.js` para iniciar el servidor.

### Instalación Frontend

1. Navega al directorio del frontend.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor de desarrollo de React.

## Uso

### Acceso al Blog

- Navega a `http://localhost:3000` para acceder al blog.
- Los usuarios pueden leer posts sin necesidad de autenticarse.

### Administración

- Accede con el usuario `admin`.
- Usuario: `admin`
- Contraseña: `12345`
- Como administrador, podrás crear nuevos posts y editar o eliminar los existentes.

### Creación y Edición de Posts

- Accede a la interfaz de administración.
- Sigue las instrucciones en pantalla para crear o editar posts.
- Utiliza el formulario provisto para ingresar el título, contenido y detalles del post.

## Dirección del repositorio:

- Backend: https://github.com/BryanEspana/BlogVR-JS 
- Frontend: https://github.com/BryanEspana/BlogVR_ReactVite
- Link Producción: https://blog-vr-react-vite.vercel.app
- USUARIO ADMINISTRADOR:
    name: admin
    contraseña: 12345