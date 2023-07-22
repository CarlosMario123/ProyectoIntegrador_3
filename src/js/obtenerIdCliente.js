export async function obtenerClienteId(nombre) {
    let info = 0;
    //hacemos la peticion http

    await fetch(`http://localhost:9000/Cliente/${nombre}`)
    .then(response => response.json())
    .then( async (data) => {  
        info = data;
    
       return data;
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
    });
    let datos = await info;
    console.log("datos ")
    console.log(datos)
    return datos;
  }
