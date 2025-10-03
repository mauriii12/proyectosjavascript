"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
function crearTarea() {
    if (cantidadTareas >= MAX_TAREAS) {
        console.log("Límite de tareas alcanzado.");
        return;
    }
    const titulo = prompt("> Titulo: ");
    const descripcion = prompt("> Descripcion (opcional): ");
    const dif = Number(prompt("> Dificultad (1: facil, 2: media, 3: dificil): "));
    const fechadevencimiento = new Date(prompt("Ingrese la fecha de vencimiento (AAAA-MM-DD): "));
    const tarea = {
        titulo,
        descripcion,
        estado: Estado.PENDIENTE,
        dificultad: dif,
        fechadecreacion: new Date(),
        fechadevencimiento
    };
    tareas.push(tarea);
    cantidadTareas++;
    console.log("Tarea agregada correctamente.");
}
