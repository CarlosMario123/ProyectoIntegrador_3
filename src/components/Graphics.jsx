import { useState,useEffect } from "react"
import { Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
import { datosGrafica } from "../Components2/datosGrafica";
export function Estadistica(){
  const fecha = new Date();
     //usamos un useState que sera util para la grafica
const [datosg, setdatosg] = useState({
    labels: ["Producto1","Producto2","Producto3"],//etiquetas de abajo de la grafica
    datasets: [
      //informacion de las barras de cantidad vendida
      {
        label: "Cantidad vendida del mes de: ",
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

  const options = {
    scales: {
      x: {
        ticks: {
          color:  (localStorage.getItem("1") != null ? "white":"black"), // Cambia el color de las etiquetas del eje X
        },
      },
      y: {
        ticks: {
          color: (localStorage.getItem("1") != null ? "white":"black"), // Cambia el color de las etiquetas del eje Y
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: (localStorage.getItem("1") != null ? "white":"black"), // Cambia el color de las etiquetas de la leyenda
        },
      },
    },
  };

      useEffect(()=>{
          const traerDatos = async()=>{
            let data = await datosGrafica();
             setdatosg(data);
          }
          traerDatos()
      },[])

  

      

  
    return (
      <div  className='w-11/12 text-white opacity-100'>
        <Bar data={datosg} options={options} />
      </div>
      
       
    )

}