
import { Pessoa } from "../model/pessoa";

let pessoa = new Pessoa (`Rian`, `5555555555`, new Date(2000, 9, 15), `000000000000`, `Rua Número 1`, 170, 70);

pessoa.mostraPessoa();

pessoa.falar();
pessoa.falarFrase("VAI CURINTIA!!!! BANDO DE OREIUDOO");
pessoa.andar();
pessoa.andarRapido(15);
pessoa.comer();
pessoa.comerPrato("parmegiana");

let pessoa2 = new Pessoa (`Francisley`, `22343557890`, new Date (1899, 4, 13), `99193456000`, `Rua numero 123`, 220, 20);
pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("Ooo meu fii");
pessoa.comer();
pessoa.comerPrato("Açai");

let pessoa3 = new Pessoa (`jubiscleudo`, `1234587630`, new Date(1630, 3, 22), `12345633`, `Rua numero 33`, 233, 56);

pessoa.mostraPessoa();
pessoa.falar();
pessoa.falarFrase("Aqui e corinthians");
pessoa.comer();
pessoa.comerPrato("Macarrao");