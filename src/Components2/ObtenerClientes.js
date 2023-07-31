export const obtenerCliente = async () => {

  let info = [];
  //hacemos la peticion http
  await fetch('http://44.217.117.88/Cliente')
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
