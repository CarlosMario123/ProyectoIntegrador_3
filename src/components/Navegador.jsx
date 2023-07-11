import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export function Nave(){
    const location = useLocation();//use location para saber en que ubicacion estas en el navegador
    //alert(location.pathname);
    const navegar = useNavigate();
    const irAdd = () => navegar("/");
    const irVenta = ()=>navegar("/vender");
    const irInve = ()=>navegar("/inve");
    const irHome = ()=> navegar("/home");
    const irEstadistica = ()=>navegar("/estadistica");
    return <div className="fixed mt-5 btm-nav bg-sky-100 p-0.5">
    <button className={`${location.pathname === "/home" ? "bg-yellow-400 active bg-blue-400 bounceOnce rounded-full border-none mb-5 scale-100 shadow-white":""} duration-500 ease-in-out`} onClick={irHome}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgNJREFUSEuFVut5wzAIPDZxNnE2aSfpl0kySr1JvAktDwmQ5MR/YssSB3cHDkEuAsD9R5emK+/Re1/wjflpvF9GvjrwFv0ir+scKsoGpqeWCnwDOHP1a2DLvV+16HJkA/AEsPuqBL8TcCpc43gRjCIogcCWX7vsZQ7est7AWsEdhLPrt+B1rsAFdLAhON0AlrVfQIFPEO4CFrpXN6QKJhY9OO0EPplwS05TEAI2Ni0KXZkJq2AinzYCP5mwg+kE+DZbmTaAvRLd0+kqLOfSFJkg/Jqgxu9tSiIOVbpEEyhYd2bSQE+NglrwUffamAsQt7CT046n4OooKhbM3Tt1tQr+yha26iVOeFKa6CvpYW8/jZDgrzucgIONLmQXPQn4CvbgFVQPTIWEQXILHdojAhAJ9EbTjYQGQDvAP62LE8BBwIMJh1HB7JRSiIxcQU9FSUkavFz8wc+6//BGk5xS8WlC51Hhe+rGdtAKzC1jA9vXA0BYD7ZGm3omnQh9TloXgG52u2F7OQBk0fzAoIGnY6wlJgZKEkVl5i0G4ECRmKnJUlrO1s0PAlwraGUv+qcx7X3gAPnbYYcSgL5kF+XKRT27F6CDbBqv0ZMXDWjdKyM9ZlF2kQ+73YedtP/nfwQRQCz7AEOarORyPc0ygN/HrK9fwAXVdqL4YiRl4YC3+8fU/5n6A+E7CC4bEan/AAAAAElFTkSuQmCC"/>
    </button>
    <button className={`${location.pathname === "/" ? "bg-gray-100 active bg-green-400 bounceOnce rounded-full border-none mb-5 scale-100 shadow-white":""} duration-500 ease-in-out`} onClick={irAdd}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbJJREFUSEuVVtF1wzAIPDZJR8km7STOJu0o2STZhD4jJA4JvST+siUE3B0gC959BIC6sb8vS5v1fMq+dh7GDluF/bTaPQ0M5lZwg+IIYDmY2wQaZkDwhOIHwL0vC8ME8AvgmzAsBHKA6Wy3fQrwxWwygocCFwBXAe7NqCC/oMKdhF8Czlmq+zu3s29Wag/DAgggmgJEkp7ByVxPJrFEyAUCdavhYGGGMjWjgrpEkZrT5rs9WQj1hebXt1kDdWhN/KVkRA2ZBcie/Wts9rMjUhaJKXKnSz2NFAONR/fULH/K1MA5R0mDlGvkPTSwJAOBM7NWEWsg4lxbMvGemK8whQZVmQYCS6gq07J/SEQuq1VkG2dN2FSmJHgTuYWmKhooe4lNfRC2vU6TNrumWzjKjbFB0JZ3jbappUG4IXDhRk1RbwwAafhzYsv72iufBmCtN/OzdR4Pl6mTo6R6H1wBHTOdealDpHHS0FdlCuABweW8NAT4245rOsxTsxqP86i4QXDkQZa9TVSUotu4XoedOTovm/NGOxbtXtQq26cA9dTMTfTO70RxN5R9wJ5f3pa7mmKw/zNq4huxUqLGAAAAAElFTkSuQmCC"/>
    </button>
    <button className={`${location.pathname === "/vender" ? "bg-gray-100 active  transform bg-sky-300 bounceOnce rounded-full border-none mb-5":""} duration-500 ease-in-out`}onClick={irVenta}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAehJREFUSEuNldF5wjAMhH9tQicpTAJMUpgEOgl0kmYTt7LlWLIdWj9AvjiWdLo7WdAlQMo/9rz+1U3/Ih+ZrhginxUfe/tkV4R9aPFKIJLV2N7W2ofP10RDRQqxYvZBJ6VZ5fr353IoXSNj1RmBj+SKm/Q9tHwHfAB7QJ91PYEv4A4sryosHDSmezJPwM1vT4JdgUvsfPtqbFGDdkrCzbJrpZ/Aw44egKNDlZPMkLgEkTSBRxL2JM7WClVLMilry3VpUG2ftkyTDmsTAfCNsCPxJrAYu05Fa6xa+aX4KTLtOBjUqu1QYgv8IqVkapH/OQ8zmrHYSU2Dfph7jAN5mKFqi/4l8aH09ZRwIWUyqzzrVpOpsGgRrbiByzYG/EeumRpc5XoE2Q2Gqi10WPrRFmFOBO2dPMi0COEqcPEKWC3fDm9FDvmrJweZChymCaLn2idCOqXSez8OwiyyNuYZLyqxzVnkaW5OrkbzLu2HXXW7zqO3EqYjebgP2ovqUj3Vjwp197uRr/tngXtAsCbr2bcNg69JRplGmZxJuYCpWDacHAjfC+xTTPQEWSBp+/K4nt+M4cr0QSeXSdkuHBROX16Ts6G1aXsn5TJNS8Fh9eaKCeb4prgnA7OboF3irdhzf/w526JEfoH+AEPB6B9v2B02AAAAAElFTkSuQmCC"/>
    </button>
    <button className={`${location.pathname === "/inve" ? "bg-gray-100 active bg-red-300 bounceOnce rounded-full border-none mb-5 scale-100 shadow-white":""} duration-500 ease-in-out`} onClick ={irInve}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAeFJREFUSEuVVYFRwzAMfE1CmKSwSTsJ3aRlEtpJCJOIkyzLsi2Xkju41HYs6f/1IvhDIDCYALAt2vu0FBf6o+06fZM70wDrG5Idu6rmFRPtAkypbCAcrZoDgE3+CNhLgbQDvAO4A7gOqbe0E0Rk8wLgqPVVuIY8pfywKYE+QTjLed2xfwWitiJZflm2snOTDAm4MbBb1nJGHqlmY8IBTEflr5x5t8rK1S0PfSuZl4tP0A/is2JA4fuwbwUu+XYOQGA2FYXACbq5BjYGvqVKAr8aT7ECRaoGeFxBg7RGlwouILw5+LNMdcUo1RsEnhtAd3uX3xWyyoPA+SLQDEUVfRrhoRPAtbRBPi6agbNJ26YZqg07NpoFGEQYaHim0UykLtCYhUNkshsYti6NPZH3Sg5R7JylIBfVTBzMJOuRSPIap0S5sSh3uZHk0RhCh/dkLvylK26pomjRk12vLL0HiIBMRbEPYsIJsZN7pBMjqKh1pnvn80ZqnuMO2qszuKluSLvXGfB/kkusldnpfWJY0a6rlyfBeoIMhB2Mk9n72GgOrPiMeIzY76C+cZjoDKhnrhxs2r0oV5yuSqA3AD4ubRCZ4fnI/AHo/Mi7PPXowqv3JqB8KPQjtlSckvmMVfzd0MAvZufaH5cWYfoAAAAASUVORK5CYII="/>
    </button>
    <button className={`${location.pathname === "/estadistica" ? "bg-gray-100 active bg-purple-400 bounceOnce rounded-full border-none mb-5 scale-100 shadow-white":""} duration-500 ease-in-out`} onClick ={irEstadistica}>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfxJREFUSEuNltt14zAMRC86cTrxVmKlEmUrsVxJtJXYnTAH4EMASa2jL5kC8ZgZABamjwBp/untabyrv8DOfud0sJrc9UcuwJvUvOczp8XFYSqI/wHpjnAh8QB2hFesbCw/AxmjC6kBnCsoRkJ6JriUgxfwVwMJvAIjEzRD1vMAlsc9wdLnZIGEjYQG7RP+D39itXnk1Pkd2AQeCVbg6hLeSlUWqIM3eqqodNVegW8XUV/1bEW4OuVaoAO6M8xCBS2jJ5mHD1BI1MhI00A3gWvlSWBPB09FD7M+iPJSiBSq3ZHcxFQC3Epll4JTthV2zaRXtFeRfl9A7q6Tw2VHslZpHJWK9ZPZFugaTzFkvvA9yC5nZ7Ktsj6SkAWSBqsSV7uvDO/IvRopD/2Xmt0+mSqLwOp6SG3/VKVFBiwyq8OxceGDlnezdedq+xDYaoe7CpqZlrZCmpJcrEwIbiSd8eQhagGqDj7qLDpkKjchLW5saD/kuXXy9NO04q8K0D6wRjN8rdEacKGjp76LqZumZlYxVQf/tLHOR0VpwDdrJHAg8FXmT6/EOOxcM1RDg7Fm7fZXD9Ez74M2Hj5BtrP1eZDc7Ae0eoj8wlGYxgv9du33Y7fKR5n6MvsOCVMmjmu/xUKTTtZrh/AkYrHwuA99765FGH6hitkfmuFaOfgBLdfrH4MweewAAAAASUVORK5CYII="/>
    </button>
  </div>;
}

