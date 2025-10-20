"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resta = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promp = (0, prompt_sync_1.default)();
class resta {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    restar() {
        console.log("El resultado de la resta es", this.numero1 - this.numero2);
    }
}
exports.resta = resta;
