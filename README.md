# dlp-prestamo
DLP library - catálogo y préstamos

## Sprint 1
### Tareas
 *desactualizado*
| Actividad | Responsable | Estado (❌, 🕐, ✅) |
| --------- | ----------- | ----------------------------- |
| Crear el repositorio para el proyecto | Matías Soto | ✅ |
| Definir mockup del catálogo principal | - | ✅ |
| Definir estructura de datos que almacene los libros y su información | Julio Guerra | ✅ |
| Prototipo semifuncional | - | 🕐 |
| Buscar APIs útiles / Pedirle al team de la api | - | 🕐 |
| Aprender a utilizar APIs | - | 🕐 |
| Aprender sobre la lectura de QR | - | 🕐 |
| Definir paleta de colores, estilos, animaciones, etc... | - | ✅ |
| - | - | - |

## Logotipo

[Drive a Logotipos DLP Library (Catálogo o Administrador), con versiones blanco y negro](https://drive.google.com/drive/folders/1jMX7kN7D6zTGZekeNZgAgEqKPmEGnNmA?usp=sharing)

## Propuesta de diseño - by DLP-prestamo

Detalles a aclarar:

1- La propiedad "background-color" no admite degradados como argumentos de entrada, entonces en su lugar para estos degradados se utilizan la propiedad "background", el cual recibe una función (linear-gradient) con tres argumentos, el ángulo al que se quiere dibujar el degradado, el color de inicio, el color final.

los argumentos de color que recibe la función pueden ir acompañados de un porcentaje de dominancia dentro del degradado si así se desea, adjunto un ejemplo.
```css
background: linear-gradient(180deg, #abcdef 20%, #012345 100%);
```

2. Para importar la fuente utilizada para el diseño propuesta es "Kanit", y esta fue extraida de la web "fonts.google.com", en donde se pueden encontrar distintas tipografías para hacer uso de estas en distintos proyectos con distintos tipos de importes, en este caso, importamos al inicio del globals.css con la linea:
```css
@import url({link_de_la_fuente});
```

y luego para hacer uso de esta fuente, dentro de la etiqueta del css respectiva se usa:
```css
font-family: 'Kanit', sans-serif;
```

### Página:

* Color Fondo Sólido: ![#2a2b3e](https://placehold.co/20x20/2a2b3e/2a2b3e.png) `#2a2b3e`

```css
background-color: #2a2b3e
```

* Colores Fondo con degradado: <img src="https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/color-fondo-gradiente.png" width="20">

```css
background: linear-gradient(180deg, #121219 10%, #6063a4 100%);
```

### Cajas(Marcos para titulos, descripciones, etc...):

* Color Fondo Sólido: <img src="https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/color-fondo-caja.png" width="20">

```css
background-color: rgba(24, 24, 32, 0.4);
```
  
* Bordes: <img src="https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/color-borde-caja.png" width="20">

```css
border: 0.15vwpx solid rgba(0, 0, 0, 0.3);
border-radius: 2vh; 
```

### Botones:

* Fondo de botones: <img src="https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/color-fondo-boton.png" width="20">
```css
background: linear-gradient(90deg, #75a8ff 30%, #b8d9ff);
transition: background-color 1s ease-in; (para transición al hacer hover)
```
  
* Botón al hacer Hover: <img src="https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/color-hover-boton.png" width="20">
```css
button:hover{
    background: linear-gradient(90deg, #75a8ff 60%, #b8d9ff);
}
```
* Bordes de los botones: ![#b8d9ff](https://placehold.co/20x20/b8d9ff/b8d9ff.png) `#b8d9ff`
```css
border: 0.4vh solid #b8d9ff;
```
* Radio de los Botones:
```css
border-radius: 1vw;
```
* Color del texto dentro de los botones: ![#2f4668](https://placehold.co/20x20/2f4668/2f4668.png) `#2f4668`
```css
color: #2f4668;
```

En general usamos letras blancas (color: ![#FFFFFF](https://placehold.co/20x20/FFFFFF/FFFFFF.png) `#FFFFFF`) a menos que se especifique, y los fondos negros (![#000000](https://placehold.co/20x20/000000/000000.png) `#000000`) pero con distintas opacidades, por ejemplo: ![#000040](https://placehold.co/20x20/000040/000040.png) `#000040`, esto es a gusto. 

## Propuesta de diseño

![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/PaginaPrincipal.png)

![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/Catalogo.png)

![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/LandingPage.png)

![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/Formulario.png)


## Boceto Catalogo (Bitácora)
![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/mockup1.jpg)

- Requiere:
  - Arreglo de Información Libros de la Biblioteca
  
![](https://github.com/LeaffLovesBingus/dlp-prestamo/blob/main/Graphics/boceto-prestamo-devolucion.png)

- Requiere:
  - Información Libro Escaneado
  
- Entrega:
  - Prestamo
