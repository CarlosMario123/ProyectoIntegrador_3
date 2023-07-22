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
import { PDFDownloadLink } from "@react-pdf/renderer"
import { Documento1 } from "../generadorPDF/Documento1";
import { ComprobarExistencia } from "../js/comprobarExistencia";
import { NavTop } from "./navegadorTop";
export function Vender(){

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
  
   return   <>{((windowWidth >= 630 ) ? <NavTop/>  : <div></div>)}
   <div className={`flex flex-col items-center p-5 pt-4 mb-20 slide-down ${localStorage.getItem("1") != null ? "modeblack":"fondo"}`}>
   <Titulo name = "Vender producto"/>
   <Formulario />
   </div>;
   { (window.innerWidth < 630 ) ? <Nave/>  : <div></div>}
   </>
}

function Formulario(){
  const [cantidad,setcantidad] = useState(0);
  const [presentacion, setpresentacion] = useState("tradicional");
  const [kg, setkg] = useState(0.5);
  const [cliente, setcliente] = useState("");
  const [id, setid] = useState(0);
  let [venta, setventa] = useState(0);


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
            Cantidad_Vendida:cantidad,
            Total_Vendido:cantidad,
            Fecha_entrega:fecha.getFullYear() +"-" + fecha.getMonth() + "-"+fecha.getDate(),
            id_Producto:asignarIdProducto(presentacion,kg),
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
        let datos = "";
          try{
            setid(info[0].id_Cliente)
             datos = comprobarVenta();
             setventa(comprobarVenta())
             setventa(datos);
          }catch{
           
           
          }
          
           
           if(datos == 0){
              console.log("entre al error")
           }else{
             //ComprobarExistencia(datos.id_Cliente,datos.Cantidad_Vendida)
           
            agregarVenta(datos)
    
            setventa(datos);
          
           
           window.location.href = "#modal2"
           }
           
          
         
       })
  }


 
   return (<div className={`container flex flex-col lg:w-1/3 items-center py-5  shadow-xl rounded-xl px-9 ${localStorage.getItem("1") != null ? "bg-black ":"bg-white bg-white shadow-lg opacity-95 shadow-white"}`}>
     <Modal2/>
      <SubTitulo titulo = "Nombre Cliente"/>
      <SeleccionarCliente setCliente = {setcliente} cliente={cliente}/>
       <SubTitulo titulo = "Tipo"/>
       <SeleccionarPresentacion  presentacion={presentacion} setpresentacion={setpresentacion}/>
       <SubTitulo titulo = "Presentación"/>
       <SeleccionarCantidad kg = {kg} setkg={setkg}/>
       <SubTitulo titulo = "Cantidad"/>
       < Contar setcantidad={setcantidad}/>
       <button className={`w-40 py-1 mt-5 text-center ${localStorage.getItem("1") != null ? "bg-indigo-600 text-white ":"bg-sky-300 text-black"}  rounded-xl hover:bg-sky-600 hover:text-white`} onClick={realizarVenta}>Vender</button>
      {
       ( (venta != 0) ? <PDFDownloadLink document={<Documento1 venta={venta}/>} fileName="ticketVenta.pdf" className="mt-5"><button className="w-40 p-1 text-white bg-red-600 rounded-sm">Descargar ticket de compra</button></PDFDownloadLink> : <div></div>)
      } 
      
      
   </div>)
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