import { useState } from "react"
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

export function Estadistica(){

    const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ];
      const fecha = new Date();
     //usamos un useState que sera util para la grafica
const [datosg, setdatosg] = useState({
    labels: ["Producto1","Producto2","Producto3"],//etiquetas de abajo de la grafica
    datasets: [
      //informacion de las barras de cantidad vendida
      {
        label: "Cantidad vendida del mes de: " + meses[fecha.getMonth()],
        data: [100,130,50],
        backgroundColor: [
          "#00BFFF",
         
        ],
        borderColor: "black",
        borderWidth: 2,

      },
         //informacion de las barras de invertido todo se maneja como objeto
   
    ],
  })


  
    return (
      <div  className='w-11/12'>
        <Bar data={datosg} />
      </div>
      
       
    )

}