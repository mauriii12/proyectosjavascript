import PromptSync from "prompt-sync";
const prompt= PromptSync();


const MAX_TAREAS = 20;


import { GestorTareas } from "./Gestortarea.js";
import { menuprincipal,iniciosesion } from "./inicioymenu.js";




function main() {

    iniciosesion();
    const gestor = new GestorTareas();
    let opc;
    do {
        menuprincipal();
        opc = Number(prompt("> Seleccione una opcion: "));

        switch (opc) {
            case 1:
                gestor.verTareas();
                break;
            case 2:
                gestor.buscarTarea();
                break;
            case 3:
                gestor.crearTarea();
                break;
            case 4:
                gestor.editarTarea();
                break;
            case 5:
                gestor.borrarTarea();
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

