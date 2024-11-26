import { Parametro } from "./libro/route";


export async function fetchLibro(id){
    try {
      const response = await fetch("/api/libro", { 
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
      return json;


    } catch (error) {
      console.log('Hubo un problema con la petición Fetch: ' + error.message);
    }
    
};