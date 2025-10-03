import promptSync from "prompt-sync";

const prompt = promptSync();

  import { menuprincipal,iniciosesion } from "./menuinicio";
  import { Tarea,Dificultad,Estado } from "./extra";
  import { crearTarea,vertareas,borrartarea,editarTarea,mostrarTarea,buscarTarea } from "./acciontarea";


function main(): void {
    iniciosesion();

    let opc: number;
    do {
        menuprincipal();
        opc = Number(prompt("> Seleccione una opción: "));

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
