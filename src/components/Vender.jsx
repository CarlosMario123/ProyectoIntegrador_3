import { Titulo } from "./Compartido";
import { SeleccionarCantidad,SeleccionarPresentacion } from "./Agregar";
import { Contar } from "./Compartido";
import { Titulo as SubTitulo } from "./Agregar";
import { Nave } from "./Navegador";
import { obtenerCliente } from "../Components2/ObtenerClientes";
import { useState,useEffect } from "react";
export function Vender(){
  
   return   <><div className="flex flex-col items-center p-5 pt-4 mb-20 slide-down">
   <Titulo name = "Vender producto"/>
   <Formulario />
   </div>;
   <Nave/>
   </>
}

function Formulario(){//molecula
   return <div className="container flex flex-col items-center py-5 shadow-xl rounded-xl px-9 bg-sky-100">
      <SubTitulo titulo = "No. Cliente"/>
      <SeleccionarCliente/>
       <SubTitulo titulo = "Presentacion"/>
       <SeleccionarPresentacion/>
       <SubTitulo titulo = "Cantidad"/>
       <SeleccionarCantidad/>
       <Contar/>
       <button className="w-40 py-1 mt-5 text-center text-black bg-sky-300 rounded-xl hover:bg-sky-600 hover:text-white">Vender</button>
       
   </div>
}

function SeleccionarCliente(){
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
    }, []);
   return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90">
      {clientes.map((cliente) => (
          <option
            key={cliente.id}
             value = {cliente.nombreCliente}
       
          >{cliente.nombreCliente}</option>
        ))}
</select>
}