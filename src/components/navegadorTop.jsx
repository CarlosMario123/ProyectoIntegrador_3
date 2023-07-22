import { Link } from "react-router-dom"
export function NavTop(){
  return(<div className="fixed z-10 justify-between navbar bg-base-100 colorNav">
  <p className="text-xl normal-case btn btn-ghost text-white">ToastTracer</p>
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