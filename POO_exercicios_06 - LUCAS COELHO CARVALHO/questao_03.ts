class Calculadora1 {
    op1: number;
    op2: number;

    constructor(op1: number, op2: number) {
        this.op1 = op1;
        this.op2 = op2;
    }

class CalculadoraCientifica extends Calculadora {
     peso: number;

    constructor(op1: number, op2: number, p: number) {
        super(op1, op2);
        this.peso = p;
    }
}

let ca: CalculadoraCientifica = new CalculadoraCientifica(5, 4, 2);
console.log(ca.op1);
console.log(ca.op2);
console.log(ca.peso);


        