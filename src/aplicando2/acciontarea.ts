import promptSync from "prompt-sync";

const prompt = promptSync();

import { Dificultad, Estado,Tarea } from "./extra";
const MAX_TAREAS = 10;
let tareas: Tarea[] = [];
let cantidadTareas: number = 0;


export function crearTarea(): void {
    if (cantidadTareas >= MAX_TAREAS) {
        console.log("Límite de tareas alcanzado.");
        return;
    }

    const titulo: string = prompt("> Titulo: ");
    const descripcion: string = prompt("> Descripcion (opcional): ");
    const dif: number = Number(prompt("> Dificultad (1: facil, 2: media, 3: dificil): "));
    const fechadevencimiento: Date = new Date(prompt("Ingrese la fecha de vencimiento (AAAA-MM-DD): "));

    const tarea: Tarea = {
        titulo,
        descripcion,
        estado: Estado.PENDIENTE,
        dificultad: dif as Dificultad,
        fechadecreacion: new Date(),
        fechadevencimiento
    };

    tareas.push(tarea);
    cantidadTareas++;
    console.log("Tarea agregada correctamente.");
}

 export function mostrarTarea(t: Tarea, index: number): void {
    console.log("\n-------------------------");
    console.log(`Tarea #${index + 1}`);
    console.log(`Titulo: ${t.titulo}`);
    console.log(`Descripcion: ${t.descripcion}`);

    let estadoTexto: string;
    switch (t.estado) {
        case Estado.PENDIENTE:
            estadoTexto = "Pendiente";
            break;
        case Estado.EN_CURSO:
            estadoTexto = "En curso";
            break;
        default:
            estadoTexto = "Terminada";
    }
    console.log(`Estado: ${estadoTexto}`);

    let dificultadTexto: string;
    switch (t.dificultad) {
        case Dificultad.FACIL:
            dificultadTexto = "Fácil";
            break;
        case Dificultad.MEDIO:
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

export function vertareas(): void {
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
                    if (t.estado === Estado.PENDIENTE) mostrar = true;
                    break;
                case 3:
                    if (t.estado === Estado.EN_CURSO) mostrar = true;
                    break;
                case 4:
                    if (t.estado === Estado.TERMINADA) mostrar = true;
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

export function buscarTarea(): void {
    if (cantidadTareas === 0) {
        console.log("No hay tareas para buscar.");
        return;
    }

    const buscado: string = prompt("> Ingrese el titulo a buscar: ");
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

export function editarTarea(): void {
    if (cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }

    console.log("\n--- EDITAR TAREA ---");
    for (let i = 0; i < cantidadTareas; i++) {
        console.log(`${i + 1}. ${tareas[i].titulo}`);
    }

    const seleccion: number = Number(prompt("> Seleccione el número de la tarea: "));

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
        t.estado = nuevoEstado as Estado;
    }

    const nuevaDificultad = Number(prompt("> Nueva dificultad (1: facil, 2: media, 3: dificil): "));
    if (nuevaDificultad >= 1 && nuevaDificultad <= 3) {
        t.dificultad = nuevaDificultad as Dificultad;
    }

    console.log("Tarea editada correctamente.");
}

export function borrartarea(): void {
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