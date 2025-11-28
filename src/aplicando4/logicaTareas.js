
import { crearTarea, actualizarTarea } from "./modelo.js";

// Agregar tarea (NO MUTA, devuelve nuevo array)
export function agregarTarea(lista, datos) {
    const nueva = crearTarea(datos);
    return [...lista, nueva];
}

// Borrar tarea por id
export function borrarTarea(lista, id) {
    return lista.filter(t => t.id !== id);
}

// Editar tarea
export function editarTarea(lista, id, cambios) {
    return lista.map(t => (t.id === id ? actualizarTarea(t, cambios) : t));
}

// Filtrar por estado
export function filtrarPorEstado(lista, estado) {
    return lista.filter(t => t.estado === estado);
}

// Buscar por texto en el título
export function buscarPorTitulo(lista, texto) {
    return lista.filter(t => t.titulo.toLowerCase().includes(texto.toLowerCase()));
}

// Ordenar por fecha de vencimiento
export function ordenarPorVencimiento(lista) {
    return [...lista].sort((a, b) => {
        if (!a.fechaVencimiento) return 1;
        if (!b.fechaVencimiento) return -1;
        return new Date(a.fechaVencimiento) - new Date(b.fechaVencimiento);
    });
}
