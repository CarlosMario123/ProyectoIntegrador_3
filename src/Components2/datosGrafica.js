import { dataStadistic } from "../js/estadistica"
export async function datosGrafica(){
       let datos = await dataStadistic();
       const fecha= new Date();//indicar que fecha es
  let meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]


const nombres = Object.keys(datos);

const valores = Object.values(datos);
       let informacion = {
         labels: nombres,
         datasets:[
            {
                label: "Cantidad vendida del mes de: " + meses[fecha.getMonth()],
                data: valores,
                backgroundColor: [
                  "#00BFFF",
                 
                ],
                borderColor: "black",
                borderWidth: 2,
          
              }
         ]
       }
       return informacion;
}