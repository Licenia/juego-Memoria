# Miauw Card

**Miauw Card** es un juego de memoria en el que el jugador debe encontrar 6 pares de cartas con imágenes aleatorias. Cuenta con 3 vidas y un tiempo límite para completar el desafío. Si logras encontrar todos los pares antes de que se acabe el tiempo, ¡obtendrás puntos extra!

## Objetivo

Desarrollar un juego interactivo utilizando **Vite** con el fin de:

- Familiarizarme con esta tecnología.
- Aplicar modularización de código.
- Usar templates HTML y fragmentos.
- Implementar delegación de eventos.
- Maquetar el sitio con **CSS Grid** y **Flexbox**.
- Hacer el juego responsive para distintos dispositivos.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Git y GitHub
- Vite

## Componentes Principales

- __Header:__ incluye el nombre del juego , las instrucciones y el boton para comenzar
- __Tablero de cartas:__  Contiene un nav con las vidas el puntaje y el cronometro ademas de las cartas para jugar
- __Mensajes:__ Pantallas de victoria o derrota con sus respectivos botones de reinicio.

## Estructura del Proyecto

```
juego-Memoria/
├── index.html
├── src/
│   ├── js/
│   │   ├── card.js
│   │   └── game.js
│   └── css/
│       └── style.css
├── public/
│   ├── corazon.png
│   ├── fresa.png
│   ├── gato.jpeg
│   ├── naranja.png
│   ├── palta.png
│   ├── pera.png
│   └── repollo.png
├── vite.config.js
└── package.json

```
## Proyecto publicado en Netlify

Puedes probar la aplicación directamente en el siguiente enlace:

https://miauw-card.netlify.app/


## Como ejecutar el proyecto de manera local

### **Clonar el repositorio**

```bash
	
git clone https://github.com/Licenia/juego-Memoria.git
```

### **Instalar dependencias**

En la terminal, ejecuta:

```bash

npm install
```

### **Ejecutar la aplicación en modo desarrollo**

```bash

npm run dev
```

### **Abrir la app en el navegador**

Copia y pega el enlace que te proporciona la terminal al ejecutar el proyecto. Generalmente suele ser el siguiente:

```

http://localhost:5173/

```

## Capturas de pantalla
<img src="./public/Captura%20de%20pantalla.png" alt="Captura del juego" width="400"  height="600"/>

![](/public/captura-pantalla2.png)

