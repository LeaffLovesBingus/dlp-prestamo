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

  export async function prestamoDevolucion(id, usuario,accion) {
    try {
      const response = await fetch(`./components/api/prestamo`, { 
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_libro: id,
          usuario: usuario,
          accion: accion}),
      });
  
      if (response.ok) {
        console.log('Todo bien');
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      };
  
      console.log(response);
  
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch: ' + error.message);
      }
      
  };