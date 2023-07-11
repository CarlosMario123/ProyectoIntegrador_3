import { useState,useEffect } from "react";
import Formulario from "./Formulario";
import { Nave } from "../components/Navegador";
import { obtenerCliente } from "./ObtenerClientes";
import { BuscarCliente } from "./ListadoClientes";
function Clientes() {

  const [clientes, setClientes] = useState([]);

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
    <div className="container mx-auto mb-24 slide-down pt-7">
      <div className=" md:flex">
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
    <Nave/>
    </>
  );
}

export default Clientes;
