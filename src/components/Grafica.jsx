import { Nave } from "./Navegador";
import { Titulo,SubTitulo } from "./Compartido";
import { Estadistica } from "./Graphics";
import trofeo from "../imagenes/trofeo.png";
import { bestSeller } from "../js/bestSeller";
import { Configuracion } from "../Components2/Configuracion";
import { useState,useEffect } from "react";
export function Grafica(){
   return <>
   <div className={`flex flex-col items-center p-5 pt-4 mb-20 slide-down ${localStorage.getItem("1") != null ? "modeblack":""}`}>
    <Titulo name = "Estadisticas de venta"/>
    <Estadistica/>
    <SubTitulo name = "Producto mas vendido del mes"/>
      <CartTop/>
      <Configuracion/>
   </div>
      <Nave/>
   </> 
}

function CartTop(){
    const [producto, setproducto] = useState({});
    useEffect(() => {
        
        const obtenerProducto = async () => {
          try {
            const data = await bestSeller();
            setproducto(data)
            console.log(producto);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
         obtenerProducto()
      }, []);
    return <div className="flex flex-col items-center w-48 h-48 py-5 bg-white shadow-2xl opacity-75 rounded-xl shadow-yellow-500 gap-y-5">
        <p className="text-2xl">{producto.Nombre}</p>
        <div className="w-1/2">
            <img src={trofeo} alt="" />
        </div>
    </div>
}