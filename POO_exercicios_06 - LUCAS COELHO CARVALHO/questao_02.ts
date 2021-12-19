class Calculadora {
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number) {
        this._op1 = op1;
        this._op2 = op2;
    }

    somar(op1: number, op2: number): number {
        return this._op1 + this._op2;
    }
}

let c: Calculadora = new Calculadora(4, 6);
console.log(c.somar(4, 6));

