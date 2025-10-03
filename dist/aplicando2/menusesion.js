"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function menuprincipal() {
    console.log("---Menu Principal---");
    console.log("1. Ver mis tareas");
    console.log("2. Buscar una tarea");
    console.log("3. Agregar una tarea");
    console.log("4. Editar una tarea");
    console.log("5. Borrar una tarea");
    console.log("0. Salir del programa");
}
function iniciosesion() {
    console.log("-Inicio De Sesion-");
    const nombre = prompt("Ingrese su nombre> ");
    console.log(`Hola ${nombre}, ¿qué deseas hacer?`);
}
