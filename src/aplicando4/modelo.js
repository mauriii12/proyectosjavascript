
export const Estado = {
    PENDIENTE: "Pendiente",
    EN_CURSO: "En Curso",
    TERMINADA: "Terminada",
    CANCELADA: "Cancelada"
};

export const Dificultad = {
    FACIL: "Fácil",
    MEDIA: "Media",
    DIFICIL: "Difícil"
};


const congelar = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((clave) => {
        if (typeof obj[clave] === "object" && obj[clave] !== null) {
            if (!Object.isFrozen(obj[clave])) congelar(obj[clave]);
        }
    });
    return obj;
};

// Crear una tarea nueva (PURA)
export function crearTarea({ titulo, descripcion = "", dificultad = Dificultad.FACIL, fechaVencimiento = null }) {
    const ahora = new Date().toISOString();
    const tarea = {
        id: crypto.randomUUID(),
        titulo,
        descripcion,
        estado: Estado.PENDIENTE,
        dificultad,
        fechaCreacion: ahora,
        fechaUltimaEdicion: ahora,
        fechaVencimiento
    };
    return congelar(tarea);
}

// Actualizar una tarea sin mutar (PURA)
export function actualizarTarea(tarea, cambios) {
    const nueva = {
        ...tarea,
        ...cambios,
        fechaUltimaEdicion: new Date().toISOString()
    };
    return congelar(nueva);
}
