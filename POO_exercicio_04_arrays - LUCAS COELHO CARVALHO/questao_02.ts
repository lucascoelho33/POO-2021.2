class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor (l1: number, l2: number, l3: number) {
        this.lado1 = l1;
        this.lado2 = l2;
        this.lado3 = l3;
    }

    validarTriangulo() {
        if (this.lado1 < (this.lado2 + this.lado3)){
            if (this.lado2 < (this.lado1 + this.lado3)){
                if (this.lado3 < (this.lado1 + this.lado2)){
                    return true;
                }
            }
        }
    }

    ehIsosceles() {
        if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3) {
            return true;
        }
    }

    ehEquilatero() {
        if (this.lado1 == this.lado2 && this.lado2 == this.lado3) {
            return true;
        }
    }

    ehEscaleno() {
        if (this.lado1 != this.lado2 && this.lado2 != this.lado3) {
            return true;
        }
    }


}

let triangulo : Triangulo = new Triangulo(this.linha1 = 5, this.linha2 = 5, this.linha3 = 7);
console.log(triangulo.ehIsosceles());
console.log(triangulo.ehEscaleno());
console.log(triangulo.ehEquilatero());


