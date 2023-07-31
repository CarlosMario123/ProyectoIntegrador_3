export function productoById(id){
    let datos = ""
    switch(id){
        case 1: datos = {presentacion:"botanera",cantidad:0.5}
        break;

        case 2: datos = {presentacion:"botanera",cantidad:1}
        break;

        case 3: datos = {presentacion:"botanera",cantidad:2}
        break;

        
        case 4: datos = {presentacion:"tradicional",cantidad:0.5}
        break;

        case 5: datos = {presentacion:"tradicional",cantidad:1}
        break;

        case 6: datos = {presentacion:"tradicional",cantidad:2}
        break;

        case 7: datos = {presentacion:"horneada",cantidad:0.5}
        break;

        
        case 8: datos = {presentacion:"horneada",cantidad:1}
        break;

        case 9: datos = {presentacion:"horneada",cantidad:2}
        break;
        default:
            
    }

    return datos;

   
}







