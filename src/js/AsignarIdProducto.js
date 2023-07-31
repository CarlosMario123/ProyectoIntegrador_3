export function asignarIdProducto(presentacion,cantidad){
    let id = 0;

    if(presentacion == "botanera" && cantidad == 0.5){
        id = 1;
    }else if(presentacion == "botanera" && cantidad == 1){
        id = 2;
    }else if(presentacion == "botanera" && cantidad == 2){
      id = 3;
    }

    if(presentacion == "tradicional" && cantidad == 0.5){
        id = 4;
    }else if(presentacion == "tradicional" && cantidad == 1){
        id = 5;
    }else if(presentacion == "tradicional" && cantidad == 2){
      id = 6;
    }


    if(presentacion == "horneada" && cantidad == 0.5){
        id = 7;
    }else if(presentacion == "horneada" && cantidad == 1){
        id = 8;
    }else if(presentacion == "horneada" && cantidad == 2){
      id = 9;
    }



    return id;


}