import { useState,useEffect } from "react";
import Formulario from "./Formulario";
import { Nave } from "../components/Navegador";
import { obtenerCliente } from "./ObtenerClientes";
import { BuscarCliente } from "./ListadoClientes";
import { NavTop } from "../components/navegadorTop";

function Clientes() {

  const [clientes, setClientes] = useState([]);
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
useEffect(() => {
  const obtenerClientes = async () => {
    try {
      const data = await obtenerCliente();
      setClientes(data);
      console.log(clientes);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  obtenerClientes();
},[]);

  


  return (
    <>
    {((windowWidth >= 630 ) ? <NavTop/>  : <div></div>)}
    <div className={` mx-auto mb-24 slide-down py-20  ${localStorage.getItem("1") != null ? "modeblack":"fondo"} `}>
      <div className=" items-center flex flex-col justify-center">
      <Formulario
        clientes = { clientes }
        setClientes = { setClientes } 
      />
      <BuscarCliente 
        clientes = { clientes }
        setClientes = { setClientes }
      />
      </div>
    </div>
  
    { (windowWidth < 630 ) ? <Nave/>  : <div></div>}
    </>
  );
}

export default Clientes;
