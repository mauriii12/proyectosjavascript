const prompt = require("prompt-sync")()


function suma() {
    let num6 = Number(prompt("ingrese el primer numero "));
    let num5 = Number(prompt("ingrese el segundo numero  "));
    let total = num6 + num5;
    console.log("el resultado de la suma es", total);
}

function resta() {
    let num3 = Number(prompt("ingrese el primer numero "));
    let num4 = Number(prompt("ingrese el segundo numero  "));
    let total = num3 - num4;
    console.log("el resultado de la resta es", total)
}

function multiplicacion() {
    let num7 = Number(prompt("ingrese el primer numero "));
    let num8 = Number(prompt("ingrese el segundo numero  "));
    let total = num7 * num8;
    console.log("el resultado de la multiplicacion es", total)
}

function division() {
    let num1 = Number(prompt("ingrese el primer numero "));
    let num2 = Number(prompt("ingrese el segundo numero  "));
    let total = num1 / num2;
    console.log("el resultado de la division es", total);
}


function main() {
    let opcion;
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
                suma();
                break;
            case 2:
                resta();
                break;
            case 3:
                multiplicacion();
                break;
            case 4:
                division();
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