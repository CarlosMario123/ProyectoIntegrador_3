import { Titulo } from "./Compartido";
import { Titulo as SubTitulo } from "./Agregar";
import { Nave } from "./Navegador";
import { obtenerProducto } from "../js/ObtenerProductos";
import { useEffect,useState } from "react";
import { kgToText } from "../js/convertidor";
import { NavTop } from "./navegadorTop";
export function Inventario(){

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
  return <>{((windowWidth >= 630 ) ? <NavTop/>  : <div></div>)}
  <div className={`flex flex-col p-5 pt-4 mb-20 slide-down ${localStorage.getItem("1") != null ? "modeblack":"fondo"} h-screen overflow-auto`}>
  <Titulo name = "Inventario"/>
  <ContainerForms/>
  </div>;
  { (window.innerWidth < 630 ) ? <Nave/>  : <div></div>}
  </>; 
}


function Formulario(Props){
  return <div className={`container flex flex-col items-center py-5 mb-8 uppercase  w-96 shadow-xl rounded-xl px-9 ${localStorage.getItem("1") != null ? "bg-black":"bg-white"}`}>
    
   
    <SubTitulo titulo = {Props.titulo + " " + Props.kg} /> 

    <Informacion name = {Props.unidad}/>
   
   
    <div>
      <img/>
    </div>
  </div>;
}


function Informacion(Props){
  return <p className={`w-64 py-2 mt-10 text-2xl text-center rounded-xl ${localStorage.getItem("1") != null ? "bg-blue-600 text-white":"bg-yellow-300"}`}>{Props.name}</p>
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
  return <div className="flex flex-row flex-wrap justify-center w-11/12 py-5 shadow-xl rounded-xl gap-x-10">
     {productos.map((producto) => (

         <Formulario key ={producto.id_Producto} titulo={producto.Presentacion} kg = {kgToText(producto.Kilos) + " Kg"} unidad = {producto.Cantidad_Disponible + " unidades"}/>
        ))}
    
  </div>
}