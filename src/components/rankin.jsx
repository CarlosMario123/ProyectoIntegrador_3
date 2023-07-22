import axios from "axios"
import React, { useEffect, useState } from 'react';
export function Ranking(){



  const [data, setData] = useState([]); // Estado local para almacenar los datos de la respuesta

  useEffect(() => {
    // Función para realizar la petición GET
    const fetchData = async () => {
      try {
        const response = await axios.get('http://44.217.117.88/Venta/mejorCliente'); // Cambia la URL por la de tu API
        setData(response.data); // Almacenamos los datos en el estado local
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Llamamos a la función para hacer la petición GET cuando el componente se monte o cuando cambie alguna dependencia en el array de dependencias del useEffect
  }, []); // Si quieres que se ejecute solo al montar el componente, deja el array de dependencias vacío ([]).


    return(<div className={`flex flex-col items-center w-full px-5 py-10 mt-10 rounded-lg shadow-md ${localStorage.getItem("1") != null ? "bg-purple-600 ":"bg-white"}`}>
    <h2 className={`mb-5 text-3xl font-black text-center ${localStorage.getItem("1") != null ? "text-white ":"text-black"}`}>
    Clientes más frecuentes
    </h2>
        {data.map((cliente,index)=>{
           return <p className="p-2 mb-3 font-semibold text-black bg-yellow-300 rounded-lg">{(index + 1) + "-. "+cliente.Nombre}</p>
        })
    }
  
    </div>)
}