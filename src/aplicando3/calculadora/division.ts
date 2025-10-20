import promptSync from "prompt-sync";
const prompt= promptSync();

export class division{

 numero1 : number;
 numero2 : number;

 constructor(numbero1 : number,numero2 : number){

    this.numero1 = numbero1;
    this.numero2 = numero2;
 }

 dividir() : void {


   if(this.numero2 == 0){
     console.log("No se puede dividir por 0");
    }
     else {
   
        console.log("El resultado de la division es",this.numero1 / this.numero2);

     }
  


 }
}

