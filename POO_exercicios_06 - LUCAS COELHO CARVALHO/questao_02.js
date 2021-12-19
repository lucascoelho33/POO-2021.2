var Calculadora = /** @class */ (function () {
    function Calculadora(op1, op2) {
        this._op1 = op1;
        this._op2 = op2;
    }
    Calculadora.prototype.adicionar = function (op1, op2) {
        return this._op1 + this._op2;
    };
    return Calculadora;
}());
var c = new Calculadora(4, 6);
console.log(c.adicionar(4, 6));
