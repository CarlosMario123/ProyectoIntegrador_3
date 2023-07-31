import { Nave } from "./Navegador";
import { Titulo,SubTitulo } from "./Compartido";
import { Estadistica } from "./Graphics";
import trofeo from "../imagenes/trofeo.png";
import { bestSeller } from "../js/bestSeller";
import { Configuracion } from "../Components2/Configuracion";
import { useState,useEffect } from "react";
import { Ranking } from "./rankin";
import { NavTop } from "./navegadorTop";
export function Grafica(){

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agregar el evento 'resize' para escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Eliminar el evento cuando el componente se desmonte para evitar pérdidas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
   return <>
   {((windowWidth >= 630 ) ? <NavTop/>  : <div></div>)}
   <div className={`flex flex-col items-center p-5 pt-4 mb-20 slide-down ${localStorage.getItem("1") != null ? "modeblack":"fondo"}`}>
    <Titulo name = "Estadisticas de venta"/>
    <Estadistica/>
    <SubTitulo name = "Producto mas vendido del mes"/>
      <CartTop/>
      <Options/>
   </div>
   { (windowWidth < 630 ) ? <Nave/>  : <div></div>}
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

function Options(){
  return(<div className="flex md:flex-row gap-x-10 w-11/12 flex-col">
     <Ranking/>
      <Configuracion/>
  </div>)
}