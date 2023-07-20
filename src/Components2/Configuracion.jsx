import { useEffect, useState } from "react";
export function Configuracion(){
    const [isChecked, setIsChecked] = useState(false);
      useEffect(()=>{
         if(localStorage.getItem("1") == null){
             setIsChecked(false)
         }else{
            setIsChecked(true)
         }
      },[])
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(localStorage.getItem("1"))
     if(localStorage.getItem("1") == null){
          localStorage.setItem("1","hola")
     }else{
        localStorage.removeItem("1")
     }
     window.location.reload()
  };

    return(
        <div className={`flex flex-col items-center w-full px-5 py-10 mt-10 rounded-lg shadow-md ${localStorage.getItem("1") != null ? "bg-purple-600 ":"bg-white"}`}>
        <h2 className={`mb-5 text-3xl font-black text-center ${localStorage.getItem("1") != null ? "text-white ":"text-black"}`}>
          White/Dark 
        </h2>
        <input type="checkbox" className="toggle toggle-lg" checked = {isChecked} onChange={handleCheckboxChange} />
        </div>
    )
}