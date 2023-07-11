export function kgToText(a){
    let s = "" +a;
      if(a == 0.5){
        s = "1/2";
      }else if(0.25 == a){
        s = "1/4";
      }

      return s;
}