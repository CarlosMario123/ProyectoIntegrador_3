export const obtenerCliente = async () => {

  let info = [];
  //hacemos la peticion http
  await fetch('http://35.170.156.191:9000/Cliente')
  .then(response => response.json())
  .then(data => {
    info = data;
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error);
  });

  const clientes = info.map((cliente) => ({
    nombreTienda: cliente.Nombre_Tienda,
    nombreCliente: cliente.Nombre,
    numero:cliente.Numero,
    direccion:cliente.Direccion,
    localidad:cliente.Referencias,
    id:cliente.id_Cliente,
  }));
  console.log("inicio")
  console.log(clientes)
  return clientes;
};
