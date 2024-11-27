export async function GET(params) {
    let url = `https://dlp-api.vercel.app/libros`;
    const id = params.url.split("?id=")[1];
    console.log(id);
    if (!isNaN(parseInt(id))) url = `https://dlp-api.vercel.app/libros?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
}