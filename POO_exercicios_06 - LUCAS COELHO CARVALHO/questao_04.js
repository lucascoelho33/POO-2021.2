var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Conta = /** @class */ (function () {
    function Conta(numero, saldoInicial) {
        this._numero = numero;
        this._saldo - saldoInicial;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.sacar = function (valor) {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this._saldo = this._saldo + valor;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    };
    return Conta;
}());
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(numero, saldo, taxaJuros) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._taxaJuros = taxaJuros;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        this.depositar(this.saldo + this._taxaJuros / 100);
    };
    Object.defineProperty(Poupanca.prototype, "taxaJuros", {
        get: function () {
            return this.taxaJuros;
        },
        enumerable: false,
        configurable: true
    });
    return Poupanca;
}(Conta));
var conta = new Conta("1", 100);
var poupanca = new Poupanca("2", 100, 0.5);
poupanca.renderJuros();
console.log(poupanca.saldo);
var poupanca2 = new Poupanca("3", 100, 1);
poupanca2.depositar(100);
poupanca2.renderJuros();
console.log(poupanca2.saldo);
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        var contaPesquisada = this.consultar(conta.numero);
        if (contaPesquisada == null) {
            this.contas.push(conta);
        }
    };
    Banco.prototype.consultar = function (numero) {
        var contaPesquisada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta_1 = _a[_i];
            if (conta_1.numero == numero) {
                contaPesquisada = conta_1;
                break;
            }
        }
        return contaPesquisada;
    };
    Banco.prototype.consultarPorIndice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var contaPesquisada = this.consultar(numero);
        if (contaPesquisada != null) {
            contaPesquisada.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var contaPesquisada = this.consultar(numero);
        if (contaPesquisada != null) {
            contaPesquisada.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.consultar(numeroCredito);
        var contaDebito = this.consultar(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    };
    Banco.prototype.calcularQuantidadeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.calcularTotalSaldos = function () {
        var totalSaldo = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            conta = _a[_i];
            totalSaldo += conta.saldo;
        }
        return totalSaldo;
    };
    Banco.prototype.calcularMediaSaldos = function () {
        return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
    };
    Banco.prototype.renderJuros = function (numero) {
        var contaPesquisada = this.consultar(numero);
        if (conta.numero == numero) {
            contaPesquisada = conta;
        }
        if (contaPesquisada instanceof Poupanca) {
            var poupanca_1 = contaPesquisada;
            poupanca_1.renderJuros();
        }
    };
    return Banco;
}());
var banco = new Banco();
banco.inserir(new Conta("1", 100));
banco.inserir(new Poupanca("2", 100, 0.5));
banco.depositar("1", 200);
banco.renderJuros("2");
//console.log(banco.consultar("2").saldo);
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);
/*
banco.transferir("1", "2", 50);
console.log(banco.consultar("1").saldo); //250
console.log(banco.consultar("2").saldo); //150

let p: Poupanca = new Poupanca("2", 100, 0.5);
p.depositar(100);

p.renderJuros();
console.log(p.saldo);
*/
