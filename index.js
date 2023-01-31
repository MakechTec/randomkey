"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
const pipe_1 = require("@makechtec/pipe");
class IdGenerator {
    constructor() {
        this.generatedIds = [];
        this.generatedIds = [];
    }
    generate() {
        let id = this.createId();
        while (this.isAlreadyGenerated(id)) {
            id = this.createId();
        }
        this.saveInRegistry(id);
        return id;
    }
    createId() {
        return (new pipe_1.Pipe(Math.random()))
            .addAction((n) => n * 1000000000)
            .addAction((n) => Math.round(n))
            .addAction((n) => Date.now() + n)
            .execActions();
    }
    isAlreadyGenerated(id) {
        return this.generatedIds.indexOf(id) !== -1;
    }
    saveInRegistry(id) {
        this.generatedIds.push(id);
    }
}
exports.IdGenerator = IdGenerator;
