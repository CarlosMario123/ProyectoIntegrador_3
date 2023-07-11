import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Agregar } from './components/Agregar';
import { Vender } from './components/Vender';
import { Inventario } from './components/Inventario';
import Clientes from './Components2/Clientes';
import { Grafica } from './components/Grafica';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
function Rutas(){
  return <Router>{/*Todo se debe encapsular en los router */}
  <Routes>
     <Route path="/" element={<Agregar />} />
     <Route  path="/vender" element={<Vender/>} />
     <Route  path="/inve" element={<Inventario/>} />
     <Route  path="/home" element={<Clientes/>} />
     <Route  path="/estadistica" element={<Grafica/>} />
  </Routes>
</Router>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Rutas/>
  </>
);
