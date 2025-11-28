
import PromptSync from "prompt-sync";
const prompt = PromptSync();
import fs from "fs";

// Entrada de datos para nueva tarea (IMPURA)
export function pedirDatosTarea() {
    const titulo = prompt("Título: ");
    const descripcion = prompt("Descripción (opcional): ");
    const dificultad = prompt("Dificultad (Fácil/Media/Difícil): ");
    const fecha = prompt("Fecha de vencimiento (YYYY-MM-DD, opcional): ") || null;

    return { titulo, descripcion, dificultad, fechaVencimiento: fecha };
}

// Mostrar tareas (IMPURA)
export function mostrarTareas(lista) {
    if (lista.length === 0) {
        console.log("No hay tareas.");
        return;
    }

    lista.forEach((t, i) => {
        console.log(`\nTarea #${i + 1}`);
        console.log(`ID: ${t.id}`);
        console.log(`Título: ${t.titulo}`);
        console.log(`Descripción: ${t.descripcion}`);
        console.log(`Estado: ${t.estado}`);
        console.log(`Dificultad: ${t.dificultad}`);
        console.log(`Creación: ${t.fechaCreacion}`);
        console.log(`Última edición: ${t.fechaUltimaEdicion}`);
        console.log(`Vencimiento: ${t.fechaVencimiento}`);
        console.log("--------------------------");
    });
}

// Guardar archivo (IMPURA)
export function guardarEnArchivo(lista, archivo = "tareas.json") {
    fs.writeFileSync(archivo, JSON.stringify(lista, null, 2), "utf8");
    console.log("Tareas guardadas.");
}

// Cargar archivo (IMPURA)
export function cargarDeArchivo(archivo = "tareas.json") {
    if (!fs.existsSync(archivo)) return [];
    return JSON.parse(fs.readFileSync(archivo, "utf8"));
}
