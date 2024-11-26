export async function Parametro(id){
    return GET(id);
}

export async function GET(params){
    const url = "https://dlp-api.vercel.app/libros?id=5";
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
}