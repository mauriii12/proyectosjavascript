// Estados posibles
 export enum Estado {
    PENDIENTE = 1,
    EN_CURSO,
    TERMINADA
}

// Dificultades posibles
export enum Dificultad {
    FACIL = 1,
    MEDIO,
    DIFICIL
}

// Definición de la estructura de una tarea
 export interface Tarea {
    titulo: string;
    descripcion: string;
    estado: Estado;
    dificultad: Dificultad;
    fechadecreacion: Date;
    fechadevencimiento: Date;
}