export const enviarNombre = async (venta) => {
    try {
      // Hacemos la petición http usando fetch con async/await
      const response = await fetch(`http://44.217.117.88/Cliente/id/${venta.id_Cliente}`);
      const data = await response.json();
      
      console.log(data); // Aquí tendrás acceso a los datos de la respuesta
  
      return data[0]; // Devolvemos el resultado de la promesa resuelta
    } catch (error) {
      // Manejo de errores
      console.error('Error:', error);
      throw error; // Lanzamos el error nuevamente para que pueda ser manejado externamente si es necesario
    }
  };
  
  