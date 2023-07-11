import { useState } from "react"
import { Error } from "./Error"
import { agregarCliente } from "../js/Agregar";

 const Formulario = ({ clientes, setClientes }) => {
    const [nombreTienda, setNombreTienda] = useState('');
    const [nombreCliente, setNombreCliente] = useState('');
    const [numero, setNumero] = useState('');
    const [direccion, setDireccion] = useState('');
    const [localidad, setLocalidad] = useState('');

    const [error, setError] = useState(false);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return fecha + random;
      }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombreTienda, nombreCliente, numero, direccion, localidad].includes('')) {
            setError(true);
            return;
        }

        setError(false)

        const objetoCliente = {
            Nombre:nombreCliente,
            Numero:numero,
            Direccion: direccion,
            Referencias:localidad,
            Nombre_Tienda:nombreTienda,
        }
     console.log(objetoCliente);
        agregarCliente(objetoCliente);
        setClientes([...clientes, objetoCliente]);

        setNombreTienda('')
        setNombreCliente('')
        setNumero('')
        setDireccion('')
        setLocalidad('')
    }
  return (
    <div className="mx-5 md:2-1/2 lg:2-2/5">
        <h2 className="text-3xl font-bold text-center">
            Registro de Clientes
        </h2>

        <p className="mt-5 mb-10 text-lg text-center">
            Añade clientes y { '' }
            <span className="font-bold text-indigo-600">Administralos</span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md">  
        {error &&
            <Error>
                <p>Todos los campos son obligatorios</p>
            </Error>
        }

        <div className="mb-5">
            <label htmlFor="tienda"
            className="block font-bold text-gray-700 uppercase">
                Nombre de la Tienda
            </label>
            <input
            id="tienda" 
            type="text"
            placeholder="Nombre de la tienda"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-"
            value={ nombreTienda }
            onChange={ (e) => setNombreTienda(e.target.value) } 
            />
        </div>

        <div className="mb-5">
            <label htmlFor="cliente"
            className="block font-bold text-gray-700 uppercase">
                Nombre del Cliente
            </label>
            <input
            id="cliente" 
            type="text"
            placeholder="Nombre del Cliente"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-"
            value={ nombreCliente }
            onChange={ (e) => setNombreCliente(e.target.value) } 
            />
        </div>

        <div className="mb-5">
            <label htmlFor="numero"
            className="block font-bold text-gray-700 uppercase">
                Número Telefónico
            </label>
            <input
            id="numero" 
            type="text"
            placeholder="Número Telefónico"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md border-"
            value={ numero }
            onChange={ (e) => setNumero(e.target.value) } 
            />
        </div>

        <div className="mb-5">
            <label htmlFor="direccion" className="block font-bold text-gray-700 uppercase">
                Dirección
            </label>
            <textarea 
            id="direccion"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md boder-2"
            placeholder="Describa la Dirección"
            value={ direccion }
            onChange={ (e) => setDireccion(e.target.value) }
            />
        </div>

        <div className="mb-5">
            <label htmlFor="localidad" className="block font-bold text-gray-700 uppercase">
                Localidad
            </label>
            <textarea 
            id="localidad"
            className="w-full p-2 mt-2 placeholder-gray-600 rounded-md boder-2"
            placeholder="Describa la Localidad"
            value={ localidad }
            onChange={ (e) => setLocalidad(e.target.value) }
            />
        </div>{
              <input type="submit"
              className="w-full p-3 font-bold text-white uppercase transition-colors cursor-pointer bg-sky-300 hover:bg-sky-500 "
              />
             
        }
       
        </form>
    </div>
  )
}

export default Formulario