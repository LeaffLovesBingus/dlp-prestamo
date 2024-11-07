Propuesta de diseño - by DLP-prestamo

Detalles a aclarar:

1.- La propiedad "background-color" no admite degradados como argumentos de entrada, entonces en su lugar para estos degradados se utilizan la propiedad "background", el cual recibe una función (linear-gradient) con tres argumentos, el ángulo al que se quiere dibujar el degradado, el color de inicio, el color final.

los argumentos de color que recibe la función pueden ir acompalados de un porcentaje de dominancia dentro del degradado si así se desea, adjunto un ejemplo.

background: linear-gradient(180deg, #191a24, #6063a4);

2.- Para importar la fuente utilizada para el diseño propuesta es "Kanit", y esta fue extraida de la web "fonts.google.com", en donde se pueden encontrar distintas tipografías para hacer uso de estas en distintos proyectos con distintos tipos de importes, en este caso, importamos al inicio del globals.css con la linea:

@import url({link_de_la_fuente});

y luego para hacer uso de esta fuente, dentro de la etiqueta del css respectiva se usa:

font-family: 'Kanit', sans-serif;

Definiciones:

Página:

    Color Fondo Sólido
        background-color: #2a2b3e

    Colores Fondo con degradado
        background: linear-gradient(180deg, #121219, #6063a4)

Botónes:

    Color Fondo Sólido
        background-color: rgba(24, 24, 32, 0.4);
    
    Bordes:
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 25px;
