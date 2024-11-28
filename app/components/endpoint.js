
export async function fetchCatalogo() {
    try {
        const response = await fetch("api/libros", { 
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

  export async function fetchLibro(id) {
    try {
        const response = await fetch(`api/libros?id=${id}`, { 
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
  }
  
  export async function prestamoDevolucion(id, usuario, accion) {
      if (!id || !usuario || !accion) {
        console.error('Los datos enviados a la API no son válidos:', { id, usuario, accion });
        return;
    }
      try {
        const response = await fetch(`/api/prestamo`, { 
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
  }

  export async function cambioAPI(libroActualizado) {
    try {
      const response = await fetch("api/libros", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(libroActualizado), // Enviar solo el libro actualizado
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error al actualizar el libro:', errorData);
        throw new Error(errorData.message || 'Error desconocido');
      }
  
      const result = await response.json();
      console.log('Libro actualizado correctamente:', result);
      return result;
    } catch (error) {
      console.error('Error en cambioAPI:', error);
      throw error;
    }
  }