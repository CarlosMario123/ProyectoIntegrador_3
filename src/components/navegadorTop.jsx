import { Link } from "react-router-dom"
export function NavTop(){
  return(<div className={`fixed z-10 justify-between navbar bg-base-100  ${localStorage.getItem("1") != null ? "bg-blue-700" : "colorNav"}`}>
  <p className="text-xl text-white normal-case btn btn-ghost">ToastTracker</p>
  <div className="flex flex-wrap justify-around w-1/2">
  <Link to={"/home"} className="font-semibold text-white">Home</Link>
  <Link to={"/"} className="font-semibold text-white">Agregar</Link>
   <Link to={"/vender"} className="font-semibold text-white">Vender</Link>
   <Link to={"/inve"} className="font-semibold text-white">Inventario</Link>
   <Link to={"/estadistica"} className="font-semibold text-white">Estadistica</Link>
  </div>
   
</div>
)
}