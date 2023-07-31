import axios from "axios";
export  function agregarVenta(Venta){
  return axios
    .post('http://44.217.117.88/Venta', Venta)
    .then(response => {
      // Si la petición es exitosa, podemos retornar los datos recibidos
      return response.data;
    })
    .catch(error => {
      // Si ocurre un error, lanzamos una excepción para que sea capturada fuera de la función
     throw error.response.data.error;
    });
  
   }
   