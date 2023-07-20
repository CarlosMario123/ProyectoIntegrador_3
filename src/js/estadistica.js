export const dataStadistic = async () => {
    let fecha = new Date();
    let info = [];
    //hacemos la peticion http
    await fetch(`http://localhost:9000/Venta/Productos/${fecha.getFullYear()}/${fecha.getMonth()}`)
    .then(response => response.json())
    .then(data => {
      info = data;
      console.log(data)
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
    });
    let Productos = "error"
    try{
   Productos = info.map((producto) => ({

      Nombre: producto.Nombre,
      Total: producto.Cantidad_Vendida,
   
    }));
    }catch{
        Productos = "error";
        
    }
   let agrupado = "vacio";
    if(Productos != "error"){
     agrupado = Productos.reduce((acc, elemento) => {
        const { Nombre, Total } = elemento;
        acc[Nombre] = (acc[Nombre] || 0) + Total;
        return acc;
    }, {});

    }
    
   console.log(agrupado)

    return agrupado;
  };
  