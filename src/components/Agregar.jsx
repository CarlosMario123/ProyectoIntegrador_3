import { useState } from "react";
import { Titulo as Encabezado } from "./Compartido";
import { Nave } from "./Navegador";
import { Contar } from "./Compartido";
import { agregarProducto } from "../js/Agregar";
import { asignarIdProducto } from "../js/AsignarIdProducto";
import { Modal1 } from "./Modal";

export function Agregar(){
     return <><div className="flex flex-col items-center h-screen p-5 pt-4 slide-down">
        <Encabezado name = "Agregar producto"/>
        <Formulario/>
       
     </div>
      <Nave/></>
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

    return <div className="container flex flex-col items-center py-5 shadow-xl rounded-xl px-9 bg-sky-100">
         <Modal1/>
        <Titulo titulo = "Presentacion"/>
        <SeleccionarPresentacion presentacion={presentacion} setpresentacion={setpresentacion}/>
        <Titulo titulo = "Cantidad"/>
        <SeleccionarCantidad kg = {kg} setkg={setkg}/>
        <Contar setcantidad = {setcantidad}/>
        <button className="w-40 py-1 mt-5 text-center text-black bg-sky-300 rounded-xl hover:bg-sky-600 hover:text-white" onClick={addTostada}>Agregar</button>
    </div>
}


export function Titulo(Props){//atomo
    return <p className="text-3xl font-light uppercase text-black">{Props.titulo}</p>;
}

export function SeleccionarPresentacion({presentacion,setpresentacion}){//atomo

    const selecionarTostada = (event)=>{

        setpresentacion(event.target.value);
 
    }
    return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90" onChange={selecionarTostada} value={presentacion}>
        <option value="Tradicional">Tradicional</option>
        <option value="Botanera">Botanera</option>
        <option value="Horneada">Horneada</option>

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


