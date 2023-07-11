
import { Titulo as Encabezado } from "./Compartido";
import { Nave } from "./Navegador";
import { Contar } from "./Compartido";
export function Agregar(){
     return <><div className="flex flex-col items-center h-screen p-5 pt-4 slide-down">
        <Encabezado name = "Agregar producto"/>
        <Formulario/>
        
     </div>
      <Nave/></>
}

function Formulario(){//molecula
    return <div className="container flex flex-col items-center py-5 shadow-xl rounded-xl px-9 bg-sky-100">
        <Titulo titulo = "Presentacion"/>
        <SeleccionarPresentacion/>
        <Titulo titulo = "Cantidad"/>
        <SeleccionarCantidad/>
        <Contar/>
        <button className="w-40 py-1 mt-5 text-center text-black bg-sky-300 rounded-xl hover:bg-sky-600 hover:text-white">Agregar</button>
    </div>
}

export function Titulo(Props){//atomo
    return <p className="text-3xl font-light text-black">{Props.titulo}</p>;
}

export function SeleccionarPresentacion(){//atomo
    return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90">
        <option value="value1">Tradicional</option>
        <option value="value2">Botanera</option>

    </select>
}

export function SeleccionarCantidad(){//atomo
    return <select className="w-64 p-1 my-5 bg-white shadow-xl rounded-xl opacity-90">
        <option value="value1">1/2 kg</option>
        <option value="value2">1 kg</option>
        <option value="value2">2 kg</option>
    </select>
}


