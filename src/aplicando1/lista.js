const prompt = require("prompt-sync")()

const MAX_TAREAS = 10;

// Estados posibles
const Estado = {
    PENDIENTE: 1,
    EN_CURSO: 2,
    TERMINADA: 3
};

// Dificultades posibles
const Dificultad = {
    FACIL: 1,
    MEDIO: 2,
    DIFICIL: 3
};

// Lista de tareas
let tareas = [];
let cantidadTareas = 0;




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

    let nombre = new Array();
    console.log("-Inicio De Sesion-");
    nombre = prompt("ingrese su nombre>");
    console.log(`hola ${nombre} que deseas hacer`);
}

function crearTarea() {
    if (cantidadTareas >= MAX_TAREAS) {
        console.log("Límite de tareas alcanzado.");
        return;
    }

    let titulo = prompt("> Titulo: ");
    let descripcion = prompt("> Descripcion (opcional): ");


    let dif = Number(
        prompt("> Dificultad (1: facil, 2: media, 3: dificil): ")
    );

    let fechadecreacion;

    let fechadevencimiento;
    fechadevencimiento = new Date(prompt("ingrese la fecha de vencimiento de la tarea: (AAAA-MM-DD)"));



    let tarea = {

        titulo: titulo,
        descripcion: descripcion,
        estado: Estado.PENDIENTE,
        dificultad: dif,
        fechadecreacion: new Date(),
        fechadevencimiento: fechadevencimiento,
    };

    tareas.push(tarea);
    cantidadTareas++;
    console.log("Tarea agregada correctamente.");
}



function mostrarTarea(t, index) {





    console.log("\n-------------------------");
    console.log(`\nTarea #${index + 1}`);
    console.log(`Titulo: ${t.titulo}`);
    console.log(`Descripcion: ${t.descripcion}`);


    let estadoTexto;
    if (t.estado === Estado.PENDIENTE) {
        estadoTexto = "Pendiente";
    } else if (t.estado === Estado.EN_CURSO) {
        estadoTexto = "En curso";
    } else {
        estadoTexto = "Terminada";
    }

    console.log(`Estado: ${estadoTexto}`);

    let dificultadTexto;
    if (t.dificultad === Dificultad.FACIL) {
        dificultadTexto = "Facil";
    }
    else if (t.dificultad === Dificultad.MEDIO) {
        dificultadTexto = "Medio";
    }
    else {
        dificultadTexto = "Dificil";
    }

    console.log(`Dificultad: ${dificultadTexto}`);
    console.log(`Fecha de creacion: ${t.fechadecreacion}`);
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

        let tarea_opc = Number(prompt("> "));

        let mostradas = 0;

        for (let i = 0; i < cantidadTareas; i++) {
            let t = tareas[i];
            if (tareas[i] == -1) continue;
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


function buscarTarea() {
    if (cantidadTareas === 0) {
        console.log("No hay tareas para buscar.");
        return;
    }

    let buscado = prompt("> Ingrese el titulo a buscar: ");
    let encontradas = 0;

    for (let i = 0; i < cantidadTareas; i++) {
        if (tareas[i].titulo.includes(buscado)) { //el includes es como el sizeof en c y sirve para buscar tareas por strings
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

    let seleccion = Number(
        prompt("> Seleccione el numero de la tarea que desea editar: ")
    );

    if (seleccion < 1 || seleccion > cantidadTareas) {
        console.log("Numero invalido.");
        return;
    }

    let t = tareas[seleccion - 1];

    let nuevoTitulo = prompt(
        "> Nuevo titulo (ENTER para dejar igual): "
    );
    if (nuevoTitulo.trim() !== "") {   //el trim borra los espacios al principio y al final del string
        t.titulo = nuevoTitulo;
    }

    let nuevaDescripcion = prompt(
        "> Nueva descripcion (ENTER para dejar igual): "
    );
    if (nuevaDescripcion.trim() !== "") {
        t.descripcion = nuevaDescripcion;
    }

    let nuevoEstado = Number(
        prompt("> Nuevo estado (1: pendiente, 2: en curso, 3: terminada): ")
    );
    if (nuevoEstado >= 1 && nuevoEstado <= 3) {
        t.estado = nuevoEstado;
    }

    let nuevaDificultad = Number(
        prompt("> Nueva dificultad (1: facil, 2: media, 3: dificil): ")
    );
    if (nuevaDificultad >= 1 && nuevaDificultad <= 3) {
        t.dificultad = nuevaDificultad;
    }

    console.log("Tarea editada correctamente.");
}

function borrartarea() {


    let borrar;

    if (cantidadTareas === 0) {
        console.log("No hay tareas cargadas.");
        return;
    }

    console.log("\n--- Borrar Tareas---");
    for (let i = 0; i < cantidadTareas; i++) {
        console.log(`${i + 1}. ${tareas[i].titulo}`);
    }


    borrar = Number(prompt("ingrese la tarea que desea borrar"));

    if (borrar < 1 || borrar > cantidadTareas) {
        console.log("Numero invalido.");
        return;
    }

    

     let eliminada = tareas.splice(borrar - 1, 1);    // el termino splice sirve para borrar tareas
     
    cantidadTareas--;

    console.log(`Tarea "${eliminada[0].titulo}" eliminada correctamente.`);
}



function main() {

    iniciosesion();

    let opc;
    do {
        menuprincipal();
        opc = Number(prompt("> Seleccione una opcion: "));

        switch (opc) {
            case 1:
                vertareas();
                break;
            case 2:
                buscarTarea();
                break;
            case 3:
                crearTarea();
                break;
            case 4:
                editarTarea();
                break;
            case 5:
                borrartarea();
                break;
            case 0:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opc !== 0);
}

main();