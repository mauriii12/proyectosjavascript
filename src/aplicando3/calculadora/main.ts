import promptSync from "prompt-sync";
import { suma } from "./suma";
import { resta } from "./resta";
import { division } from "./division";
import { multiplicacion } from "./multiplicacion";
const prompt = promptSync();


function main() {
    let opcion : number;
    do {
        console.log("---calculadora----");
        console.log("1 si quiere realizar una suma");
        console.log("2 si quiere realizar una resta");
        console.log("3 si quiere realizar una multiplicacion");
        console.log("4 si quiere realizar una division");
        console.log("0 si quiere salir del programa");
        opcion = Number(prompt("ingrese la opcion"));
        switch (opcion) {
            case 1:
                 const sum = new suma(Number(prompt("Ingrese el primer valor a sumar")),Number(prompt("Ingrese el segundo valor a sumar")));
                 sum.sumar();
                 break;
            case 2:
               const rest=  new resta(Number(prompt("Ingrese el primer numero")),Number(prompt("Ingrese cuanto le quiere restar")));
               rest.restar();
               break;
            case 3:
                 const mult = new multiplicacion(Number(prompt("Ingrese el numero a multiplicar")),Number(prompt("Ingrese por cuanto quiere multiplicar")));
                   mult.multiplicar();
                break;
            case 4:
                const divd =new division(Number(prompt("Ingrese el numero a dividir")),Number(prompt("Ingrese por cuanto desea dividir")));
                 divd.dividir();
                break;
            case 0:
                console.log("saliendo del programa...");
                break;
            default:
                console.log("usted ingreso una opcion invalida,vuelva a abrir el programa");
        }
    } while (opcion != 0);
    return;
}
main()