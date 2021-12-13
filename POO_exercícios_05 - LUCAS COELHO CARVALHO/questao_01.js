var Calculadora = /** @class */ (function () {
    function Calculadora(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    Calculadora.prototype.somar = function () {
        return this.operando1 + this.operando2;
    };
    Calculadora.prototype.subtrair = function () {
        return this.operando1 - this.operando2;
    };
    return Calculadora;
}());
var c = new Calculadora(8, 4);
console.log(c.somar());
console.log(c.subtrair());
