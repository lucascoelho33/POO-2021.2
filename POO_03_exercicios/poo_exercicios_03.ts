/* 
1) É porque ela é uma variável local e variáveis locais 
   devem ser inicializadas obrigatoriamente antes do uso.
*/
/* ------------------------------------------------------------*/
2.
    class Hotel {
        quantReservas : number;

        constructor(quantReservas:number) {
            this.quantReservas = quantReservas;
        }

        adicionarReserva() : void {
            this.quantReservas++;
        }
    }

    let hotel : Hotel = new Hotel(2);

    console.log(hotel.quantReservas);
/* -----------------------------------------------------------------*/
/* 3) Não foi fornecido um argumento para 'volume' na hora da instanciação.
      A solução seria colocar o valor na instanciação.
*/
/*--------------------------------------------------------------------*/
4.
    class Conta {
        numero : String;
        saldo : number;

        constructor(numero:String, saldoInicial:number) {
            this.numero = numero;
            this.saldo = saldoInicial;
        }

        sacar(valor : number): void {
            this.saldo = this.saldo - valor;
        }

        depositar(valor : number): void {
            this.saldo = this.saldo + valor;
        }

        consultarSaldo(): number {
            return this.saldo;
        }

        transferir(contaDestino: Conta, valor : number): void {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }

    let c1 : Conta = new Conta("1",100);
    let c2 : Conta = new Conta("2",200);
    c1 = c2;
    c1.sacar(10);
    c1.transferir(c2,50);

    console.log(c1.saldo);
    console.log(c2.saldo);

    /* a)  O resultado é igual para as duas contas.Porque ambas as contas estão sendo apontadas para c2.*/
    /* b)  Ele vai equivaler a c2 portanto o valor vai dar 190 pois está sendo sacado o valor 10 da conta c2.*/

    /*------------------------------------------------------------------------*/
    5.
        class Jogador {
            forca : number;
            nivel : number;
            pontos_atuais : number;

            constructor(forca: number, nivel: number, pa_number: number) {  // pa = pontos atuais
                this.forca = forca;
                this.nivel = nivel;
                this.pontos_atuais = pa_number;
            }

            calcularPontos(): number {
                return this.forca * this.nivel;
            }

            atacarJogador(Jogador: number): number {
                return this.pontos_atuais - this.pontos_atuais;
            }
        }

        let j : Jogador = new Jogador(50, 2, 200);
        let j2: Jogador = new Jogador(70, 3, 500);
        console.log("Os pontos do ataque são " + j.calcularPontos());
        
/*----------------------------------------------------------------------------*/
6.
class Conta2 {
    numero : String;
    saldo : number;

    constructor(numero:String, saldoInicial:number) {
        this.numero = numero;
        this.saldo = saldoInicial;
    }

    sacar(valor : number): boolean {
        this.saldo = this.saldo - valor;
        if(this.saldo < 0) {
            return false;
        }
    }

    depositar(valor : number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta2,valor : number): void {
        this.sacar(valor);
        this.depositar(valor);
    }
}
let x1 : Conta2 = new Conta2("1", 200);
let x2 : Conta2 = new Conta2("2", 50);
x1.sacar(250);
x1.transferir(x2,30);

console.log(x1.saldo + "O saque não pode ser realizado!");
console.log(x2.saldo);
/*-------------------------------------------------------------------*/
7.
    class Produto {
        codigo : number;
        descricao : String;
        valor : number;
        quantidadeMinima : number;

        constructor(codigo: number, descricao: String, valor: number, qtdMinima: number) {
            this.codigo = codigo;
            this.descricao = descricao;
            this.valor = valor;
            this.quantidadeMinima = qtdMinima;
        }

        baixar(quantidade : number): void {
            this.valor = this.valor - quantidade;
            if (this.valor < this.quantidadeMinima) {
                console.log("Não foi possivel realizar a baixa.")
            }
        }

        repor(quantidade : number): void {
            this.valor = this.valor + quantidade;
        }

        reajustar(taxa : number): void {
            this.valor = this.valor * (taxa / 100);
        }
    }

    let p : Produto = new Produto(1, "Blusa", 30.50, 20);
    p.baixar(10);
    p.repor(15);
    p.reajustar(5);

