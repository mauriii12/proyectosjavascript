"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
exports.mostrarTarea = mostrarTarea;
exports.vertareas = vertareas;
exports.buscarTarea = buscarTarea;
exports.editarTarea = editarTarea;
exports.borrartarea = borrartarea;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const extra_1 = require("./extra");
const MAX_TAREAS = 10;
let tareas = [];
let cantidadTareas = 0;
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
        estado: extra_1.Estado.PENDIENTE,
        dificultad: dif,
        fechadecreacion: new Date(),
        fechadevencimiento
    };
    tareas.push(tarea);
    cantidadTareas++;
    console.log("Tarea agregada correctamente.");
}
function mostrarTarea(t, index) {
    console.log("\n-------------------------");
    console.log(`Tarea #${index + 1}`);
    console.log(`Titulo: ${t.titulo}`);
    console.log(`Descripcion: ${t.descripcion}`);
    let estadoTexto;
    switch (t.estado) {
        case extra_1.Estado.PENDIENTE:
            estadoTexto = "Pendiente";
            break;
        case extra_1.Estado.EN_CURSO:
            estadoTexto = "En curso";
            break;
        default:
            estadoTexto = "Terminada";
    }
    console.log(`Estado: ${estadoTexto}`);
    let dificultadTexto;
    switch (t.dificultad) {
        case extra_1.Dificultad.FACIL:
            dificultadTexto = "Fácil";
            break;
        case extra_1.Dificultad.MEDIO:
            dificultadTexto = "Medio";
            break;
        default:
            dificultadTexto = "Difícil";
    }
    console.log(`Dificultad: ${dificultadTexto}`);
    console.log(`Fecha de creación: ${t.fechadecreacion}`);
    console.log(`Fecha de vencimiento: ${t.fechadevencimiento}`);
    console.log("\n-------------------------");
}
function vertareas() {
    if (cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }
    while (true) {
        console.log("\n--- VER TAREAS ---");
        console.log("1. Todas las tareas");
        console.log("2. Tareas pendientes");
        console.log("3. Tareas en curso");
        console.log("4. Tareas completadas");
        console.log("0. Volver");
        const tarea_opc = Number(prompt("> "));
        let mostradas = 0;
        for (let i = 0; i < cantidadTareas; i++) {
            const t = tareas[i];
            let mostrar = false;
            switch (tarea_opc) {
                case 1:
                    mostrar = true;
                    break;
                case 2:
                    if (t.estado === extra_1.Estado.PENDIENTE)
                        mostrar = true;
                    break;
                case 3:
                    if (t.estado === extra_1.Estado.EN_CURSO)
                        mostrar = true;
                    break;
                case 4:
                    if (t.estado === extra_1.Estado.TERMINADA)
                        mostrar = true;
                    break;
                case 0:
                    return;
                default:
                    console.log("Opción inválida. Intente de nuevo.");
            }
            if (mostrar) {
                mostrarTarea(t, i);
                mostradas++;
            }
        }
        if (mostradas === 0 && tarea_opc >= 1 && tarea_opc <= 4) {
            switch (tarea_opc) {
                case 2:
                    console.log("No hay tareas pendientes.");
                    break;
                case 3:
                    console.log("No hay tareas en curso.");
                    break;
                case 4:
                    console.log("No hay tareas completadas.");
                    break;
            }
        }
    }
}
function buscarTarea() {
    if (cantidadTareas === 0) {
        console.log("No hay tareas para buscar.");
        return;
    }
    const buscado = prompt("> Ingrese el titulo a buscar: ");
    let encontradas = 0;
    for (let i = 0; i < cantidadTareas; i++) {
        if (tareas[i].titulo.includes(buscado)) {
            mostrarTarea(tareas[i], i);
            encontradas++;
        }
    }
    if (encontradas === 0) {
        console.log("No se encontraron tareas con ese titulo.");
    }
}
function editarTarea() {
    if (cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }
    console.log("\n--- EDITAR TAREA ---");
    for (let i = 0; i < cantidadTareas; i++) {
        console.log(`${i + 1}. ${tareas[i].titulo}`);
    }
    const seleccion = Number(prompt("> Seleccione el número de la tarea: "));
    if (seleccion < 1 || seleccion > cantidadTareas) {
        console.log("Número inválido.");
        return;
    }
    const t = tareas[seleccion - 1];
    const nuevoTitulo = prompt("> Nuevo titulo (ENTER para dejar igual): ");
    if (nuevoTitulo.trim() !== "") {
        t.titulo = nuevoTitulo;
    }
    const nuevaDescripcion = prompt("> Nueva descripcion (ENTER para dejar igual): ");
    if (nuevaDescripcion.trim() !== "") {
        t.descripcion = nuevaDescripcion;
    }
    const nuevoEstado = Number(prompt("> Nuevo estado (1: pendiente, 2: en curso, 3: terminada): "));
    if (nuevoEstado >= 1 && nuevoEstado <= 3) {
        t.estado = nuevoEstado;
    }
    const nuevaDificultad = Number(prompt("> Nueva dificultad (1: facil, 2: media, 3: dificil): "));
    if (nuevaDificultad >= 1 && nuevaDificultad <= 3) {
        t.dificultad = nuevaDificultad;
    }
    console.log("Tarea editada correctamente.");
}
function borrartarea() {
    if (cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }
    console.log("\n--- BORRAR TAREAS ---");
    for (let i = 0; i < cantidadTareas; i++) {
        console.log(`${i + 1}. ${tareas[i].titulo}`);
    }
    const borrar = Number(prompt("Ingrese la tarea que desea borrar: "));
    if (borrar < 1 || borrar > cantidadTareas) {
        console.log("Número inválido.");
        return;
    }
    const eliminada = tareas.splice(borrar - 1, 1);
    cantidadTareas--;
    console.log(`Tarea "${eliminada[0].titulo}" eliminada correctamente.`);
}
