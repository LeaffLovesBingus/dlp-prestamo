export async function fetchLibro(id) {
    try {
        const response = await fetch(`../components/api/libros?id=${id}`, { 
            method: "GET", 
            headers: {'Accept': 'application/json'
            },
        });
    
        if (response.ok) {
            console.log('Todo bien');
        } else {
            console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        };
    
        const json = await response.json();
        console.log(json);
        return json;
    
    
        } catch (error) {
        console.log('Hubo un problema con la petición Fetch: ' + error.message);
    }

  };