export const Cliente = ({ cliente, setCliente, eliminarCliente }) => {
      

    const {nombreTienda, nombreCliente, numero, direccion, localidad, id} = cliente

     
    const handleEliminar = () =>{
          eliminarCliente(id)

      }
  
    return (
    <div className="px-5 py-10 mx-5 my-10 mt-5 bg-white shadow-md rounded-xl">
        <p className="mb-3 font-bold text-gray-700 uppercase">Nombre de la Tienda: { '' }
            <span className="normal-case font-nomal">
                { nombreTienda }
            </span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Nombre del Cliente: { '' }
            <span className="normal-case font-nomal">
                { nombreCliente }
            </span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Número del Cliente: { '' }
            <span className="normal-case font-nomal">
                { numero }
            </span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Dirección de la Tienda: { '' }
            <span className="normal-case font-nomal">
                { direccion }
            </span>
        </p>

        <p className="mb-3 font-bold text-gray-700 uppercase">Localidad del Negocio: { '' }
            <span className="normal-case font-nomal">
                { localidad }
            </span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="px-10 py-2 font-bold text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
            onClick = { () =>setCliente(cliente) } 
          >Editar</button>

          <button
            type="button"
            className="px-10 py-2 font-bold text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
            onClick={ handleEliminar }
          >Eliminar</button>
        </div>

        

    </div>
  )
}