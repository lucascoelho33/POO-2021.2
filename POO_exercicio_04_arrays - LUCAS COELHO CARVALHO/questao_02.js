var Triangulo = /** @class */ (function () {
    function Triangulo(l1, l2, l3) {
        this.lado1 = l1;
        this.lado2 = l2;
        this.lado3 = l3;
    }
    Triangulo.prototype.validarTriangulo = function () {
        if (this.lado1 < (this.lado2 + this.lado3)) {
            if (this.lado2 < (this.lado1 + this.lado3)) {
                if (this.lado3 < (this.lado1 + this.lado2)) {
                    return true;
                }
            }
        }
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3) {
            return true;
        }
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (this.lado1 == this.lado2 && this.lado2 == this.lado3) {
            return true;
        }
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (this.lado1 != this.lado2 && this.lado2 != this.lado3) {
            return true;
        }
    };
    return Triangulo;
}());
var triangulo = new Triangulo(this.linha1 = 5, this.linha2 = 5, this.linha3 = 7);
console.log(triangulo.ehIsosceles());
console.log(triangulo.ehEscaleno());
console.log(triangulo.ehEquilatero());
