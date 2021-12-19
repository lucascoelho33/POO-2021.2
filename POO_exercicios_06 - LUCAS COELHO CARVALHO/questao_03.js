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
var Calculadora1 = /** @class */ (function () {
    function Calculadora1(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
    return Calculadora1;
}());
var CalculadoraCientifica = /** @class */ (function (_super) {
    __extends(CalculadoraCientifica, _super);
    function CalculadoraCientifica(op1, op2, p) {
        var _this = _super.call(this, op1, op2) || this;
        _this.peso = p;
        return _this;
    }
    return CalculadoraCientifica;
}(Calculadora));
var ca = new CalculadoraCientifica(5, 4, 2);
console.log(ca.op1);
console.log(ca.op2);
console.log(ca.peso);
