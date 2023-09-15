"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("../model/pessoa");
let pessoa = new pessoa_1.Pessoa(`Rian`, `5555555555`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 170, 70);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("VAI CURINTIA!!!! BANDO DE OREIUDOO");
pessoa.andar();
pessoa.andarRapido(15);
pessoa.comer();
pessoa.comerPrato("parmegiana");
let pessoa2 = new pessoa_1.Pessoa(`Francisley`, `22343557890`, new Date(1899, 4, 13), `99193456000`, `Rua numero 123`, 220, 20);
pessoa.comer();
pessoa.comerPrato("");
pessoa;
//# sourceMappingURL=teste.js.map