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
    return NextResponse.json(data);
}