import { Titulo } from "./Compartido";
import { SeleccionarCantidad,SeleccionarPresentacion } from "./Agregar";
import { Contar } from "./Compartido";
import { Titulo as SubTitulo } from "./Agregar";
import { Nave } from "./Navegador";
import { obtenerCliente } from "../Components2/ObtenerClientes";
import { useState,useEffect } from "react";
import { obtenerClienteId } from "../js/obtenerIdCliente";
import { asignarIdProducto } from "../js/AsignarIdProducto";
import { agregarVenta } from "../js/realizarVenta";
import { Modal2 } from "./Modal";
export function Vender(){
  
   return   <><div className="flex flex-col items-center p-5 pt-4 mb-20 slide-down">
   <Titulo name = "Vender producto"/>
   <Formulario />
   </div>;
   <Nave/>
   </>
}

function Formulario(){
  const [cantidad,setcantidad] = useState(0);
  const [presentacion, setpresentacion] = useState("tradicional");
  const [kg, setkg] = useState(0.5);
  const [cliente, setcliente] = useState("");
  const [id, setid] = useState(0);


  useEffect(() => {
    const obtenerId_1 = async () => {
      try {
        const datos = await obtenerClienteId(cliente);
        return datos;
      } catch (error) {
        throw error;
      }
    };
  
    const obtenerInfo = async () => {
      try {
        const info = await obtenerId_1();
        setid(info[0].id_Cliente);
      } catch (error) {
        console.error(error);
      }
    };
  
    obtenerInfo();
  }, []);
  

  

  const comprobarVenta = ()=>{
    let fecha = new Date();
    console.log(id)
        if(id == 0 || cantidad == 0 || cliente == "" || true == isNaN(id)){
          alert("error no se pudo realizar la venta")
          return 0;
        }else{
          const venta = {
            id_Cliente:id,
            id_Producto:asignarIdProducto(presentacion,kg),
            Cantidad_Vendida:cantidad,
            Total_Vendido:cantidad,
            Fecha_entrega:fecha.getFullYear() +"-" + fecha.getMonth() + "-"+fecha.getDate()
          }
           console.log(venta)
          return venta;
        }
  }

  const realizarVenta =  ()=>{
       const promesa = new Promise((resolve, reject) => {
        console.log(cliente)
          let info = obtenerClienteId(cliente);
          resolve(info);
       })

       promesa.then((info)=>{
           setid(info[0].id_Cliente)
           let datos = comprobarVenta();
           
           if(datos == 0){
              console.log("entre al error")
           }else{
                
           agregarVenta(datos)
           window.location.href = "#modal2"
           }
           
          
         
       })
  }


 
   return <div className="container flex flex-col items-center py-5 shadow-xl rounded-xl px-9 bg-sky-100">
     <Modal2/>
      <SubTitulo titulo = "No. Cliente"/>
      <SeleccionarCliente setCliente = {setcliente} cliente={cliente}/>
       <SubTitulo titulo = "Presentacion"/>
       <SeleccionarPresentacion  presentacion={presentacion} setpresentacion={setpresentacion}/>
       <SubTitulo titulo = "Cantidad"/>
       <SeleccionarCantidad kg = {kg} setkg={setkg}/>
       < Contar setcantidad={setcantidad}/>
       <button className="w-40 py-1 mt-5 text-center text-black bg-sky-300 rounded-xl hover:bg-sky-600 hover:text-white" onClick={realizarVenta}>Vender</button>
       
   </div>
}

function SeleccionarCliente({setCliente,cliente}){
   const [clientes, setClientes] = useState([]);

   useEffect(() => {
      const obtenerClientes = async () => {
        try {
          const data = await obtenerCliente();
          setClientes(data);
          setCliente(data[0].nombreCliente)
          console.log(cliente);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      obtenerClientes();
    }, []);

    const verCliente = (event) =>{
      setCliente(event.target.value);
    }
   return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90" onChange={verCliente} value={cliente}>
      {clientes.map((cliente) => (
          <option
            key={cliente.id}
             value = {cliente.nombreCliente}

       
          >{cliente.nombreCliente}</option>
        ))}
</select>
}