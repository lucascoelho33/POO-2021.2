class Conta {
    private _numero: String;
    private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
        this._numero = numero;
        this._saldo - saldoInicial;
    }

    get numero(): String {
        return this._numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    sacar(valor: number): void {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Poupanca extends Conta {
    private _taxaJuros: number;

    constructor(numero: String, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    public renderJuros(): void {
        this.depositar(this.saldo + this._taxaJuros/100);
    }

    get taxaJuros(): number {
        return this._taxaJuros;
    }

    
}

let conta: Conta = new Conta("1", 100);
let poupanca: Poupanca = new Poupanca("2", 100, 0.5);
poupanca.renderJuros();
console.log(poupanca.saldo);

let poupanca2: Conta  = new Poupanca("3", 100, 1);
poupanca2.depositar(100);
(<Poupanca> poupanca2).renderJuros();
console.log(poupanca2.saldo);


class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaPesquisada = this.consultar(conta.numero);

        if (contaPesquisada == null) {
		    this.contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta {
		let contaPesquisada: Conta;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaPesquisada = conta;
				break;
			}
		}
		return contaPesquisada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaPesquisada = this.consultar(numero);

		if (contaPesquisada != null) {
			contaPesquisada.depositar(valor);
		}
	}

    sacar(numero: String, valor: number): void {
        let contaPesquisada = this.consultar(numero);

        if (contaPesquisada != null) {
            contaPesquisada.sacar(valor);
        }
    }

    transferir(numeroCredito: string, numeroDebito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        if (contaCredito != null && contaDebito != null) {
            contaDebito.transferir(contaCredito, valor);
        }
    }

    calcularQuantidadeContas(): number {
        return this.contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (conta of this.contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

    renderJuros(numero: String) {
        let contaPesquisada = this.consultar(numero);

        if (conta.numero == numero) {
            contaPesquisada = conta;
        }

        if (contaPesquisada instanceof Poupanca) {
            let poupanca: Poupanca = <Poupanca> contaPesquisada;
            poupanca.renderJuros();
        }
    }
    
}


let banco: Banco = new Banco();

banco.inserir(new Conta("1", 100));
banco.inserir(new Poupanca("2", 100, 0.5));
banco.depositar("1", 200);
banco.renderJuros("2");
banco.renderJuros("1");
console.log(banco.consultar("1").saldo);




