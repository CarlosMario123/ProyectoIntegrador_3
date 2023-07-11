import { Titulo } from "./Compartido";
import { Titulo as SubTitulo } from "./Agregar";
import { Nave } from "./Navegador";
import { obtenerProducto } from "../js/ObtenerProductos";
import { useEffect,useState } from "react";
import { kgToText } from "../js/convertidor";
export function Inventario(){
  return <><div className="flex flex-col items-center p-5 pt-4 mb-20 slide-down">
  <Titulo name = "inventario"/>
  <ContainerForms/>
  </div>;
  <Nave/>
  </>; 
}


function Formulario(Props){
  return <div className="container flex flex-col items-center py-5 mb-8 shadow-xl rounded-xl px-9 bg-sky-100">
    <SubTitulo titulo = {Props.titulo}/>
    <Informacion name = {Props.cantidad}/>
    <Informacion name = {Props.unidad}/>
  </div>;
}


function Informacion(Props){
  return <p className="w-64 py-2 mt-10 text-2xl text-center bg-white rounded-xl">{Props.name}</p>
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
     <Formulario titulo = "tradicional" cantidad = "1kg" unidad = "50"/>
     <Formulario titulo = "botanero" cantidad = "1kg" unidad = "35"/>
     <Formulario titulo = "tradicional" cantidad = "2kg" unidad = "25"/>
  </div>
}