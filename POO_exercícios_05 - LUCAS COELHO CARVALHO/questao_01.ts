class Calculadora {
    private operando1: number;
    private operando2: number;

    constructor(operando1: number, operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }

    somar(): number {
        return this.operando1 + this.operando2;
    }

    subtrair(): number {
        return this.operando1 - this.operando2;
    }
}

let c: Calculadora = new Calculadora(8, 4);
console.log(c.somar());
console.log(c.subtrair());





