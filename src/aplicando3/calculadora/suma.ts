import promptSync from "prompt-sync";
const prompt = promptSync();

export class suma {

  numero1: number;
  numero2: number;


 constructor(numero1 : number,numero2: number){

 this.numero1 = numero1;
 this.numero2 = numero2;
 }

 
 sumar(): void {
   
    console.log("El resultado es:", this.numero1 + this.numero2);
  }


}



 

