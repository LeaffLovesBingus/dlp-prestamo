export async function GET(params) {
    const url = "https://dlp-api.vercel.app/libros";
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
}