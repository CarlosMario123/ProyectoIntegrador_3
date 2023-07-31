import { useState,useEffect } from "react";
import { Titulo as Encabezado } from "./Compartido";
import { Nave } from "./Navegador";
import { Contar } from "./Compartido";
import { agregarProducto } from "../js/Agregar";
import { asignarIdProducto } from "../js/AsignarIdProducto";
import { Modal1 } from "./Modal";
import { NavTop } from "./navegadorTop";


export function Agregar(){
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
     return( <>
     {((windowWidth >= 630 ) ? <NavTop/>  : <div></div>)}
     <div className={`w-full flex flex-col items-center h-screen p-5 pt-4 slide-down ${localStorage.getItem("1") != null ? "modeblack":"fondo "} ${window.innerWidth >= 630 ? "absolute top-16 ":""}`}>
        <Encabezado name = "Agregar producto"/>
       
        <Formulario/>
       
      
     </div>
      { (window.innerWidth < 630 ) ? <Nave/>  : <div></div>}
      
      </>
      )
}

function Formulario(){//molecula
        
    //estados
    const [presentacion, setpresentacion] = useState("tradicional");
    const [kg, setkg] = useState(0.5);
    const [cantidad,setcantidad] = useState(0);
  
    //evento click 
    const addTostada = ()=>{
   
        if(kg == 0 || cantidad == 0 || presentacion == ""){
            return
        }else{

            const producto = {
                id_Producto:asignarIdProducto(presentacion,kg),
                Nombre:presentacion,
                Presentacion:presentacion,
                Kilos: parseFloat(kg),
                Cantidad_Disponible:parseInt(cantidad)
            }
            console.log(producto)
            agregarProducto(producto);
            window.location.href = "#modal1"
        }
    }

    return <div className={`lg:w-1/3 container flex flex-col items-center py-5 lg:  shadow-xl rounded-xl px-9 ${localStorage.getItem("1") != null ? "bg-black ":"bg-white shadow-lg opacity-95 shadow-white"}`}>
         <Modal1/>
        <Titulo titulo = "Tipo"/>
        <SeleccionarPresentacion presentacion={presentacion} setpresentacion={setpresentacion}/>
        <Titulo titulo = "presentación"/>
        <SeleccionarCantidad kg = {kg} setkg={setkg}/>
        <Titulo titulo = "Cantidad"/>
        <Contar setcantidad = {setcantidad}/>
        <button className="w-40 py-1 mt-5 text-center text-white bg-sky-400 rounded-xl hover:bg-sky-600 hover:text-white" onClick={addTostada}>Agregar</button>
    </div>
}


export function Titulo(Props){//atomo
    return <p className={`text-3xl font-normal  ${localStorage.getItem("1") != null ? " text-white":"bg-white"}`}>{Props.titulo}</p>;
}

export function SeleccionarPresentacion({presentacion,setpresentacion}){//atomo

    const selecionarTostada = (event)=>{

        setpresentacion(event.target.value);
 
    }
    return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90" onChange={selecionarTostada} value={presentacion}>
        <option value="tradicional">Tradicional</option>
        <option value="botanera">Botanera</option>
        <option value="horneada">Horneada</option>

    </select>
}

export function SeleccionarCantidad({kg,setkg}){//atomo

    const cambiarKg =(event)=>{
      let number = parseFloat(event.target.value)
      setkg(number);
     
    }
    return <select value = {kg}className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90" onChange={cambiarKg}>
        <option value="0.5">1/2 kg</option>
        <option value="1">1 kg</option>
        <option value="2">2 kg</option>
    </select>
}


