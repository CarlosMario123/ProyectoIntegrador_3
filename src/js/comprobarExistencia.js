import axios from 'axios';

export async function ComprobarExistencia(id,cantidad){
    try {
        console.log("id",cantidad)
        const response = await axios.get(`http://44.217.117.88/Producto/id/${id}`);
    
        // Obtener los datos de la respuesta
        const data = response.data;
        console.log('Datos del producto:', data);
        let cantidadAct = response.data;//cantidad actual de la bd
        console.log(cantidadAct)
       

    
        // Puedes retornar los datos para su posterior uso si es necesario
        return data;
      } catch (error) {
        // Manejo de errores en caso de que la solicitud falle
        console.error('Error al obtener el producto:', error);
        return null;
      }
}