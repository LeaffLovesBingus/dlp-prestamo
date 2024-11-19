

const fetchData = async () => {
    try {
      const res = await fetch("https://dlp-api.vercel.app/libros", { method: "GET" });
      //const res = await import(".//api-test/ejemplo-1", { method: "GET" });
      const data = res.libros;
      const data_parsed = await data.json();
      
      if (response.ok) {
        console.log('Todo bien');
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
      return data_parsed;
  
    } catch (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    }
    
};

export default fetchData;