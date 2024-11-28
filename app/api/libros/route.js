import { NextResponse } from "next/server";

export async function GET(params) {
    let url = "https://dlp-api.vercel.app/libros";
    const reqUrl = params.url;
    if (reqUrl.includes("?id=")) {
        const id = reqUrl.split("?id=")[1];
        if (!isNaN(parseInt(id))) url = `https://dlp-api.vercel.app/libros?id=${id}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
}

export async function PUT(req) {
    try { 
      // Obtener los datos del cuerpo de la solicitud
      const libroActualizado = await req.json();
  
      // Crear la URL para la API externa, usando el id del libro actualizado
      const url = 'https://dlp-api.vercel.app/libros';
  
      // Hacer el PUT a la API externa con el libro actualizado
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(libroActualizado), // Enviar el libro actualizado como cuerpo
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el libro');
      }
  
      // Responder con éxito si todo va bien
      return NextResponse.json({ message: 'Libro actualizado con éxito' });
    } catch (error) {
      console.error(error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }