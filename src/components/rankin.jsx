export function Ranking(){
    return(<div className={`flex flex-col items-center w-full px-5 py-10 mt-10 rounded-lg shadow-md ${localStorage.getItem("1") != null ? "bg-purple-600 ":"bg-white"}`}>
    <h2 className={`mb-5 text-3xl font-black text-center ${localStorage.getItem("1") != null ? "text-white ":"text-black"}`}>
    Clientes más frecuentes
    </h2>
   
    </div>)
}