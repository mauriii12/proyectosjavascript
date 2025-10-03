"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dificultad = exports.Estado = void 0;
// Estados posibles
var Estado;
(function (Estado) {
    Estado[Estado["PENDIENTE"] = 1] = "PENDIENTE";
    Estado[Estado["EN_CURSO"] = 2] = "EN_CURSO";
    Estado[Estado["TERMINADA"] = 3] = "TERMINADA";
})(Estado || (exports.Estado = Estado = {}));
// Dificultades posibles
var Dificultad;
(function (Dificultad) {
    Dificultad[Dificultad["FACIL"] = 1] = "FACIL";
    Dificultad[Dificultad["MEDIO"] = 2] = "MEDIO";
    Dificultad[Dificultad["DIFICIL"] = 3] = "DIFICIL";
})(Dificultad || (exports.Dificultad = Dificultad = {}));
