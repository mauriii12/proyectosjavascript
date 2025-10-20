"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.division = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class division {
    constructor(numbero1, numero2) {
        this.numero1 = numbero1;
        this.numero2 = numero2;
    }
    dividir() {
        if (this.numero2 == 0) {
            console.log("No se puede dividir por 0");
        }
        else {
            console.log("El resultado de la division es", this.numero1 / this.numero2);
        }
    }
}
exports.division = division;
