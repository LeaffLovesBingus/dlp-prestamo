export async function GET(params){
    const id = params.url.split("?")[1].split("=")[1];
    const url = `https://dlp-api.vercel.app/libros?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
}