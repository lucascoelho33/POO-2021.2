/*
1) É porque ela é uma variável local e variáveis locais
   devem ser inicializadas obrigatoriamente antes do uso.
*/
/* ------------------------------------------------------------*/
2.;
var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas;
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.quantReservas);
/* -----------------------------------------------------------------*/
/* 3) Não foi fornecido um argumento para 'volume' na hora da instanciação.
      A solução seria colocar o valor na instanciação.
*/
/*--------------------------------------------------------------------*/
4.;
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var c1 = new Conta("1", 100);
var c2 = new Conta("2", 200);
c1 = c2;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.saldo);
console.log(c2.saldo);
/* a)  O resultado é igual para as duas contas.Porque ambas as contas estão sendo apontadas para c2.*/
/* b)  Ele vai equivaler a c2 portanto o valor vai dar 190 pois está sendo sacado o valor 10 da conta c2.*/
/*------------------------------------------------------------------------*/
5.;
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pa_number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pa_number;
    }
    Jogador.prototype.calcularPontos = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacarJogador = function (Jogador) {
        return this.pontos_atuais - this.pontos_atuais;
    };
    return Jogador;
}());
var j = new Jogador(50, 2, 200);
var j2 = new Jogador(70, 3, 500);
console.log("Os pontos do ataque são " + j.calcularPontos());
/*----------------------------------------------------------------------------*/
6.;
var Conta2 = /** @class */ (function () {
    function Conta2(numero, saldoInicial) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }
    Conta2.prototype.sacar = function (valor) {
        this.saldo = this.saldo - valor;
        if (this.saldo < 0) {
            return false;
        }
    };
    Conta2.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta2.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta2.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        this.depositar(valor);
    };
    return Conta2;
}());
var x1 = new Conta2("1", 200);
var x2 = new Conta2("2", 50);
x1.sacar(250);
x1.transferir(x2, 30);
console.log(x1.saldo + "O saque não pode ser realizado!");
console.log(x2.saldo);
/*-------------------------------------------------------------------*/
7.;
var Produto = /** @class */ (function () {
    function Produto(codigo, descricao, valor, qtdMinima) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidadeMinima = qtdMinima;
    }
    Produto.prototype.baixar = function (quantidade) {
        this.valor = this.valor - quantidade;
        if (this.valor < this.quantidadeMinima) {
            console.log("Não foi possivel realizar a baixa.");
        }
    };
    Produto.prototype.repor = function (quantidade) {
        this.valor = this.valor + quantidade;
    };
    Produto.prototype.reajustar = function (taxa) {
        this.valor = this.valor * (taxa / 100);
    };
    return Produto;
}());
var p = new Produto(1, "Blusa", 30.50, 20);
p.baixar(10);
p.repor(15);
p.reajustar(5);
console.log("O valor reposto foi de " + $(p.repor(15)) + " reais");
