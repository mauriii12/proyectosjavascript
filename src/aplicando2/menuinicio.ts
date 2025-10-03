import promptSync from "prompt-sync";

const prompt = promptSync();

 export function menuprincipal(): void {
    console.log("---Menu Principal---");
    console.log("1. Ver mis tareas");
    console.log("2. Buscar una tarea");
    console.log("3. Agregar una tarea");
    console.log("4. Editar una tarea");
    console.log("5. Borrar una tarea");
    console.log("0. Salir del programa");
}

export function iniciosesion(): void {
    console.log("-Inicio De Sesion-");
    const nombre: string = prompt("Ingrese su nombre> ");
    console.log(`Hola ${nombre}, ¿qué deseas hacer?`);
}