export const obtenerProducto = async () => {

  let info = [];
  //hacemos la peticion http
  await fetch('http://35.170.156.191:9000/Producto')
  .then(response => response.json())
  .then(data => {
    info = data;
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });

  const Productos = info.map((producto) => ({
    id_Producto: producto.id_Producto,
    Nombre: producto.Nombre,
    Presentacion: producto.Presentacion,
    Kilos: producto.Kilos,
    Cantidad_Disponible: producto.Cantidad_Disponible
  }));
  console.log("inicio")
  console.log(Productos)
  return Productos;
};
