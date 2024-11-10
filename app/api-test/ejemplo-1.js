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
      id: 15,
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
];

// Y la manejamos con el método GET, por ruta sería en (local): http://localhost:3000/api/ejemplo-1
// Al ser relativo, se hace un fetch a /api/ejemplo-1
// Donde '/api/ejemplo' es la ruta en la que se encuentra este archivo

export async function GET() {
  return new NextResponse(200, miArreglo);
}
