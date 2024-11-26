
export async function fetchCatalogo(api_local) {
  try {
    const response = await fetch(api_local, { 
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