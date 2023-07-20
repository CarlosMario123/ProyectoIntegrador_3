import { Titulo } from "./Compartido";
import { Titulo as SubTitulo } from "./Agregar";
import { Nave } from "./Navegador";
import { obtenerProducto } from "../js/ObtenerProductos";
import { useEffect,useState } from "react";
import { kgToText } from "../js/convertidor";
export function Inventario(){
  return <><div className={`flex flex-col items-center p-5 pt-4 mb-20 slide-down ${localStorage.getItem("1") != null ? "modeblack":""}`}>
  <Titulo name = "Inventario"/>
  <ContainerForms/>
  </div>;
  <Nave/>
  </>; 
}


function Formulario(Props){
  return <div className={`container flex flex-col items-center py-5 mb-8  shadow-xl rounded-xl px-9 ${localStorage.getItem("1") != null ? "bg-black":"bg-white"}`}>
    <SubTitulo titulo = {Props.titulo}/>
    <Informacion name = {Props.cantidad}/>
    <Informacion name = {Props.unidad}/>
  </div>;
}


function Informacion(Props){
  return <p className={`w-64 py-2 mt-10 text-2xl text-center rounded-xl ${localStorage.getItem("1") != null ? "bg-blue-600 text-white":"bg-white"}`}>{Props.name}</p>
}

function ContainerForms(){
  const [productos, setproductos] = useState([]);

  useEffect(() => {
     const ObtenerProductos = async () => {
       try {
         const data = await obtenerProducto();
         setproductos(data);
       } catch (error) {
         console.error('Error:', error);
       }
     };
   
     ObtenerProductos();
   }, []);
  return <div className="container flex flex-col items-center py-5 shadow-xl rounded-xl p-9">
     {productos.map((producto) => (

         <Formulario key ={producto.id_Producto} titulo={producto.Presentacion} cantidad = {kgToText(producto.Kilos) + " Kg"} unidad = {producto.Cantidad_Disponible + " unidades"}/>
        ))}
    
  </div>
}