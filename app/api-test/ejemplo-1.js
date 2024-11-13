// https://nextjs.org/docs/app/api-reference
// https://stackoverflow.com/questions/76209343/next-13-4-where-is-the-api-folder
import { NextResponse } from "next/server";

export const libros = [
    {
      id: 5,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 6,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 7,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 8,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 9,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 10,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 11,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 12,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 13,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "...",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 14,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "iVBORw0KGgoAAAANSUhEUgAAAPMAAAD9CAYAAABp/EFPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAL4SURBVHhe7dMhEQAgAMBA8kAH+rcCTwN2L97Mb8y1D/C/8QbgT2aGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHCzBBhZogwM0SYGSLMDBFmhggzQ4SZIcLMEGFmiDAzRJgZIswMEWaGCDNDhJkhwswQYWaIMDNEmBkizAwRZoYIM0OEmSHiApVsM1YcdraAAAAAAElFTkSuQmCC",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
    {
      id: 15,
      titulo: "Moby Dick",
      autores: "Herman Melville",
      caratula: "iVBORw0KGgoAAAANSUhEUgAAAHYAAAB1CAYAAACbMxW/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAABP0lEQVR4Xu3RMQqAMBAAwSR/9k/+UktBVLBdZpoLd1XYue3HMXi15hhzXvPtvdbH7WH3dP+6/d2t+0doEDZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho4SNEjZK2Chho04QWwR1kSz8wwAAAABJRU5ErkJggg==",
      isbn: "9788491054290",
      tags: [
        "aventura",
        "épica",
        "clásico"
      ],
      donante: "mayra.carrillo@alumnos.uach.cl",
      fecha_donacion: "2021-07-07T16:20:00.000Z",
      prestado: false,
      borrado: false,
    },
];

// Y la manejamos con el método GET, por ruta sería en (local): http://localhost:3000/api/ejemplo-1
// Al ser relativo, se hace un fetch a /api/ejemplo-1
// Donde '/api/ejemplo' es la ruta en la que se encuentra este archivo

export async function GET() {
  return new NextResponse(200, libros);
}
