import promptSync from "prompt-sync";
const promp = promptSync();


export class resta{

numero1 : number;
numero2 : number;

constructor(numero1 : number,numero2: number){

this.numero1 = numero1;
this.numero2 = numero2;
}
restar () :void {
    
    console.log("El resultado de la resta es",this.numero1 - this.numero2);

}

}