import PromptSync from "prompt-sync";
const prompt = PromptSync();


export function menuprincipal() {
    console.log("---Menu Principal---");
    console.log("1. Ver mis tareas");
    console.log("2. Buscar una tarea");
    console.log("3. Agregar una tarea");
    console.log("4. Editar una tarea");
    console.log("5. Borrar una tarea");
    console.log("0. Salir del programa");
}

export function iniciosesion() {
    let nombre;
    console.log("-Inicio De Sesion-");
    nombre = prompt("ingrese su nombre>");
    console.log(`hola ${nombre} que deseas hacer`);
}
