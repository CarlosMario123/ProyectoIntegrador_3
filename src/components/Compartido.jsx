import { useState } from "react";
export function Titulo(Props){
    return  <h1 className="w-full mb-16 text-4xl text-center text-black">{Props.name}</h1>;
}

export function SubTitulo(Props){
    return  <h2 className="w-full mt-10 mb-10 text-3xl text-center text-black">{Props.name}</h2>;
}


export function Contar({setcantidad}){
    const[value,modificarContar] = useState(0);
    setcantidad(value);
    const quitar = () =>{
         modificarContar((value)=>{
             if(value === 0){
                return 0;
             }
             return value - 1;
         })
    }
   
    const add = () =>{
        modificarContar(value + 1)
   }


   return <div className="flex flex-row items-center gap-5 my-5">
         <button onClick={quitar} className="text-4xl font-semibold text-red-600">-</button>
      <p className="text-4xl">
        {value}
      </p>
     
      <button onClick={add}t className="text-4xl font-semibold text-green-600">+</button>
   </div>
}

