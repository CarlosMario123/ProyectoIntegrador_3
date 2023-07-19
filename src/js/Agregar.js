import axios from "axios";
export function agregarCliente(data){
    fetch('http://localhost:9000/Cliente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          // Aquí puedes manejar la respuesta de la solicitud
          console.log(data); // Imprimir los datos de la respuesta en la consola
        })
        .catch(error => {
          // Aquí puedes manejar los errores de la solicitud
          console.error(error);
        });
}


export  function agregarProducto(producto){
 console.log(producto)

  axios.post('http://localhost:9000/Producto', producto)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

}




 