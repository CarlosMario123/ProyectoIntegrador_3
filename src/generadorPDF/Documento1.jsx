import { Document, Page, Text, View } from "@react-pdf/renderer";
import { productoById } from "../js/ProductoById";

export const Documento1 = ({venta,info})=>{
;    
  let producto = productoById(venta.id_Producto);



   
    const titulo = {
        display:"flex",
        justifyContent: "center",
        width:'100%',
        color:"black",
        textAlign: 'center',
        marginTop: 30,
    }


    const pie = {
        display:"flex",
        justifyContent: "center",
        width:'100%',
        color:"black",
        textAlign: 'center',
        marginTop: 150,
    }

    const subtitulo = {
        display:"flex",
        justifyContent: "center",
        width:'100%',
        color:"white",
        marginTop: 20,
        backgroundColor:"blue",
        padding: 10
    }

    const top = {
        width:'100%',
        color:"blue",
        marginBottom: 10,
        backgroundColor:"blue",
      
    }

    const campo = {
        marginTop: 25,
        marginLeft:30
    }
    return(
        <Document>
            <Page size="a4">
                <View>
                <Text style={top}>z</Text>
                <Text style={titulo}>Ticket de compra</Text>
                </View>
                <Text style={subtitulo}>Informacion de la compra:</Text>
                <Text style={titulo}>Informacion del cliente</Text>
                <Text style={campo}>Nombre Completo: {info[0].Nombre} </Text>
                <Text style = {campo}>Nombre de la tienda: {info[0].Nombre_Tienda}</Text>
                <Text style={titulo}>Informacion del producto</Text>
                <Text style = {campo}>Presentacion: {producto.presentacion}</Text>
                <Text style = {campo}>Cantidad adquirida: {venta.Cantidad_Vendida}</Text>
                <Text style={pie}>Gracias por su compra {":)"}</Text>
                <Text style={subtitulo}></Text>
                
            </Page>
        </Document>
    )
}