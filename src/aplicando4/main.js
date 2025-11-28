// main.js
import {
    agregarTarea,
    borrarTarea,
    editarTarea,
    filtrarPorEstado,
    buscarPorTitulo,
    ordenarPorVencimiento
} from "./logicaTareas.js";

import {
    pedirDatosTarea,
    mostrarTareas,
    guardarEnArchivo,
    cargarDeArchivo
} from "./io.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function main() {
    let tareas = cargarDeArchivo();

    let opcion;
    do {
        console.log("\n--- MENÚ ---");
        console.log("1. Ver tareas");
        console.log("2. Buscar por título");
        console.log("3. Agregar tarea");
        console.log("4. Editar tarea");
        console.log("5. Borrar tarea");
        console.log("6. Ordenar por vencimiento");
        console.log("7. Guardar");
        console.log("0. Salir");

        opcion = Number(prompt("Opción: "));

        switch (opcion) {
            case 1:
                mostrarTareas(tareas);
                break;
            case 2:
                tareas = buscarPorTitulo(tareas, prompt("Texto a buscar: "));
                mostrarTareas(tareas);
                break;
            case 3:
                tareas = agregarTarea(tareas, pedirDatosTarea());
                break;
            case 4: {
                mostrarTareas(tareas);
                const id = prompt("ID de la tarea a editar: ");
                const datos = pedirDatosTarea();
                tareas = editarTarea(tareas, id, datos);
                break;
            }
            case 5:
                mostrarTareas(tareas);
                tareas = borrarTarea(tareas, prompt("ID a borrar: "));
                break;
            case 6:
                tareas = ordenarPorVencimiento(tareas);
                mostrarTareas(tareas);
                break;
            case 7:
                guardarEnArchivo(tareas);
                break;
            case 0:
                console.log("Saliendo...");
        }
    } while (opcion !== 0);
}

main();
