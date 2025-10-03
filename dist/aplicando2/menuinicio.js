"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuprincipal = menuprincipal;
exports.iniciosesion = iniciosesion;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
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
