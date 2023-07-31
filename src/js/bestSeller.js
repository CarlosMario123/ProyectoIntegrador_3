export const bestSeller = async () => {
  
    let fecha = new Date();
   console.log(fecha.getFullYear());
console.log(fecha.getMonth())
    let info = [];
    //hacemos la peticion http
    await fetch(`http://44.217.117.88/Venta/${fecha.getMonth()}/${fecha.getFullYear()}`)
    .then(response => response.json())
    .then(data => {
      info = data;
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error:', error);
     
    });
   let Productos = ["vacio"];
  try{
       Productos = info.map((producto) => ({
      id_Producto: producto.id_Producto,
        Nombre:producto.Nombre,
        Total_Vendido: producto.Total_Vendido
    }));
  }catch{
       Productos = []
  }
   
    console.log("inicio")
   

    if(Productos.length == 0){
        const producto = {
            id_Producto: 0,
            Nombre: "",
            Total_Vendido: 18
          };
        return producto;
    }
    return Productos[0];
  };
  