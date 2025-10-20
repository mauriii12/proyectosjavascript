"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const suma_1 = require("./suma");
const resta_1 = require("./resta");
const division_1 = require("./division");
const multiplicacion_1 = require("./multiplicacion");
const prompt = (0, prompt_sync_1.default)();
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
                const sum = new suma_1.suma(Number(prompt("Ingrese el primer valor a sumar")), Number(prompt("Ingrese el segundo valor a sumar")));
                sum.sumar();
                break;
            case 2:
                const rest = new resta_1.resta(Number(prompt("Ingrese el primer numero")), Number(prompt("Ingrese cuanto le quiere restar")));
                rest.restar();
                break;
            case 3:
                const mult = new multiplicacion_1.multiplicacion(Number(prompt("Ingrese el numero a multiplicar")), Number(prompt("Ingrese por cuanto quiere multiplicar")));
                mult.multiplicar();
                break;
            case 4:
                const divd = new division_1.division(Number(prompt("Ingrese el numero a dividir")), Number(prompt("Ingrese por cuanto desea dividir")));
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
main();
