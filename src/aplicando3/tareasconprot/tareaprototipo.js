


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const MAX_TAREAS = 20;

import { Estado,dificultad } from "./enum.js";

export function tarea(Titulo, Descripcion, Estado, dificultad, fechadevencimiento) {

    this.Titulo = Titulo;
    this.Descripcion = Descripcion
    this.Estado = Estado
    this.dificultad = dificultad;
    this.fechadecreacion = new Date();
    this.fechadevencimiento = fechadevencimiento
}






  tarea.prototype.mostrarTarea =  function (index) {


    console.log("\n-------------------------");
    console.log(`\nTarea #${index + 1}`);
    console.log(`Titulo: ${this.Titulo}`);
    console.log(`Descripcion: ${this.Descripcion}`);


    let estadoTexto;
    if (this.Estado === Estado.PENDIENTE) {
        estadoTexto = "Pendiente";
    } else if (this.Estado === Estado.ENCURSO) {
        estadoTexto = "En curso";
    } else {
        estadoTexto = "Terminada";
    }

    console.log(`Estado: ${estadoTexto}`);

    let dificultadTexto;
    if (this.dificultad === dificultad.Facil) {
        dificultadTexto = "Facil";
    }
    else if (this.dificultad === dificultad.Medio) {
        dificultadTexto = "Medio"
    }
    else {
        dificultadTexto = "Dificil";
    }

    console.log(`Dificultad: ${dificultadTexto}`);
    console.log(`Fecha de creacion: ${this.fechadecreacion}`);
    console.log(`Fecha de vencimiento: ${this.fechadevencimiento}`);
    console.log("\n-------------------------");
}
