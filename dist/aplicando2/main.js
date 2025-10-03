"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const menuinicio_1 = require("./menuinicio");
const acciontarea_1 = require("./acciontarea");
function main() {
    (0, menuinicio_1.iniciosesion)();
    let opc;
    do {
        (0, menuinicio_1.menuprincipal)();
        opc = Number(prompt("> Seleccione una opción: "));
        switch (opc) {
            case 1:
                (0, acciontarea_1.vertareas)();
                break;
            case 2:
                (0, acciontarea_1.buscarTarea)();
                break;
            case 3:
                (0, acciontarea_1.crearTarea)();
                break;
            case 4:
                (0, acciontarea_1.editarTarea)();
                break;
            case 5:
                (0, acciontarea_1.borrartarea)();
                break;
            case 0:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opc !== 0);
}
main();
