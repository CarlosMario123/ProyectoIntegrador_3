import axios from "axios";
export  function agregarVenta(Venta){
    console.log(Venta)
   
     axios.post('http://localhost:9000/Venta', Venta)
     .then(response => {
       console.log(response.data);
     })
     .catch(error => {
       console.error(error);
     });
   
   }
   