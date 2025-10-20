import promptSyn  from "prompt-sync";
import { NumberLiteralType } from "typescript";
const prompt = promptSyn();

 export class multiplicacion{

 numero1 : number;
 numero2 : number;


 constructor(numero1 : number,numero2 : number){

    this.numero1 = numero1;
    this.numero2 = numero2;
    
   
 }

  multiplicar() : void {

     console.log("El resultado de la multiplicacion es", this.numero1 * this.numero2);
     
  }

 

}