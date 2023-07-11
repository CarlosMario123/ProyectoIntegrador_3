import { Cliente } from "./Cliente";
import { useState } from "react";

export function BuscarCliente({ clientes, setClientes }) {
  const [clienteB, setclienteB] = useState([]);
  const [presionado, setpresionado] = useState(0);
  const buscar = () => {
    console.log(clientes);
    setpresionado(1);
    let nombre = document.getElementById("buscador").value;
    let clientesFiltrados = "";
    if (nombre.length > 0) {
      console.log("entre");
      clientesFiltrados = clientes.filter((cliente) => {
        const nombreCliente = cliente.nombreCliente
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLocaleLowerCase();
        const nombreBuscadoSinAcentos = nombre
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLocaleLowerCase();
        return nombreCliente.includes(nombreBuscadoSinAcentos);
      });
      setclienteB(clientesFiltrados);
    } else {
      setclienteB([]);
    }
  };

  const eliminarC = (id) => {
    setpresionado(0)
    setclienteB([]);
    const filtrarClientes = clientes.filter(cliente => cliente.id != id);
    const url = `http://35.170.156.191:9000/Cliente/${id}`; // URL del endpoint para eliminar el cliente con ID 1
    setClientes(filtrarClientes);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Cliente eliminado correctamente");
        } else {
          alert("Error al eliminar el cliente");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });

     
  };

  return (
    <div className="flex flex-col items-center w-full px-5 py-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-3xl font-black text-center">
        Buscador de cliente
      </h2>
      <div className="flex flex-col items-center">
        <label htmlFor="" className="mb-4 font-bold">
          Ingrese el nombre del cliente
        </label>
        <input
          type="text"
          placeholder="Buscar"
          className="w-64 mb-4 text-center border border-gray-400 border-solid rounded"
          id="buscador"
        />
        <button
          className="w-48 py-1 font-bold text-white bg-sky-400"
          onClick={buscar}
        >
          Buscar
        </button>
        {clienteB.map((cliente) => (
          <Cliente
            key={cliente.id}
            cliente={cliente}
            setCliente={setClientes}
            eliminarCliente={eliminarC}
          />
        ))}
        <p className="mt-5 font-black text-red-500">
          {clienteB.length == 0 && presionado == 1
            ? "!Cliente no encontrado!"
            : ""}
        </p>
      </div>
    </div>
  );
}