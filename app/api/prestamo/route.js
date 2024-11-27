export async function POST(req) {
    try {
        const body = await req.json();
        const apiUrl = 'https://dlp-api.vercel.app/prestamoDevolucion';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorText = await response.text();
            return new Response(
                JSON.stringify({ message: `Error en la API: ${response.status}`, error: errorText }),
                { status: response.status }
            );
        }
        const result = await response.json();
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        console.error('Error en la API interna:', error);
        
        return new Response(
            JSON.stringify({ message: 'Error interno del servidor', error: error.message }),
            { status: 500 }
        );
    }
}