

const MAX_TAREAS = 20;

import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { Estado,dificultad } from "./enum.js";
import { tarea } from "./tareaprototipo.js";



export function GestorTareas() {

    this.tareas = [];
    this.cantidadTareas = 0;
}

  GestorTareas.prototype.crearTarea = function () {
    if (this.cantidadTareas >= MAX_TAREAS) {
        console.log("Límite de tareas alcanzado.");
        return;
    }

    const titulo = prompt("> Titulo: ");
    const descripcion = prompt("> Descripcion (opcional): ");


    const dif = Number(
        prompt("> Dificultad (1: facil, 2: media, 3: dificil): ")
    );
    
    const estado = Estado.PENDIENTE;
   
    let fechadevencimiento;
    fechadevencimiento = new Date(prompt("ingrese la fecha de vencimiento de la tarea: (AAAA-MM-DD)"));


    const nueva = new tarea(titulo, descripcion,estado, dif, fechadevencimiento);
    this.tareas.push(nueva);
    this.cantidadTareas++;
    console.log("Tarea agregada correctamente.");
}
 GestorTareas.prototype.verTareas = function () {
    if (this.cantidadTareas === 0) {
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

        let tarea_opc = Number(prompt("> "));

        let mostradas = 0;

        for (let i = 0; i < this.cantidadTareas; i++) {
            let t = this.tareas[i];
            if (this.tareas[i] == -1) continue;
            let mostrar = false;

            switch (tarea_opc) {
                case 1:
                    mostrar = true;
                    break;
                case 2:
                    if (t.Estado === Estado.PENDIENTE) mostrar = true;
                    break;
                case 3:
                    if (t.Estado === Estado.ENCURSO) mostrar = true;
                    break;
                case 4:
                    if (t.Estado === Estado.TERMINADA) mostrar = true;
                    break;
                case 0:
                    return;
                default:
                    console.log("Opción inválida. Intente de nuevo.");
            }

            if (mostrar) {
                this.tareas[i].mostrarTarea(i);
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


GestorTareas.prototype.buscarTarea = function () {
    if (this.cantidadTareas === 0) {
        console.log("No hay tareas para buscar.");
        return;
    }

    let buscado = prompt("> Ingrese el titulo a buscar: ");
    let encontradas = 0;

    for (let i = 0; i < this.cantidadTareas; i++) {
        if (this.tareas[i].Titulo.includes(buscado)) { //el includes es como el sizeof en c y sirve para buscar tareas por strings
            this.tareas[i].mostrarTarea(i);
            encontradas++;
        }
    }

    if (encontradas === 0) {
        console.log("No se encontraron tareas con ese titulo.");
    }
}
GestorTareas.prototype.editarTarea = function () {
    if (this.cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }

    console.log("\n--- EDITAR TAREA ---");
    for (let i = 0; i < this.cantidadTareas; i++) {
        console.log(`${i + 1}. ${this.tareas[i].Titulo}`);
    }

    let seleccion = Number(
        prompt("> Seleccione el numero de la tarea que desea editar: ")
    );

    if (seleccion < 1 || seleccion > this.cantidadTareas) {
        console.log("Numero invalido.");
        return;
    }

    let t = this.tareas[seleccion - 1];

    let nuevoTitulo = prompt(
        "> Nuevo titulo (ENTER para dejar igual): "
    );
    if (nuevoTitulo.trim() !== "") {   //el trim borra los espacios al principio y al final del string
        t.Titulo = nuevoTitulo;
    }

    let nuevaDescripcion = prompt(
        "> Nueva descripcion (ENTER para dejar igual): "
    );
    if (nuevaDescripcion.trim() !== "") {
        t.Descripcion = nuevaDescripcion;
    }

    let nuevoEstado = Number(
        prompt("> Nuevo estado (1: pendiente, 2: en curso, 3: terminada): ")
    );
    if (nuevoEstado >= 1 && nuevoEstado <= 3) {
        t.Estado = nuevoEstado;
    }

    let nuevaDificultad = Number(
        prompt("> Nueva dificultad (1: facil, 2: media, 3: dificil): ")
    );
    if (nuevaDificultad >= 1 && nuevaDificultad <= 3) {
        t.dificultad = nuevaDificultad;
    }

    console.log("Tarea editada correctamente.");
}

GestorTareas.prototype.borrarTarea = function () {


    let borrar;

    if (this.cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }

    console.log("\n--- Borrar Tareas---");
    for (let i = 0; i < this.cantidadTareas; i++) {
        console.log(`${i + 1}. ${this.tareas[i].Titulo}`);
    }


    borrar = Number(prompt("ingrese la tarea que desea borrar"));

    if (borrar < 1 || borrar > this.cantidadTareas) {
        console.log("Numero invalido.");
        return;
    }



    let eliminada = this.tareas.splice(borrar - 1, 1);    // el termino splice sirve para borrar tareas

    this.cantidadTareas--;

    console.log(`Tarea "${eliminada[0].Titulo}" eliminada correctamente.`);
}