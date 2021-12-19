class Produto {
    private _id: number;
    private _descricao: String;
    private _quantidade: number;
    private _valor: number;

    constructor(id: number, d: String, qtd: number, v: number) {
        this._id = id;
        this._descricao = d;
        this._quantidade = qtd;
        this._valor = v;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get descricao(): String {
        return this._descricao;
    }

    set descricao(d: String) {
        this._descricao = d;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    set quantidade(qtd: number) {
        this._quantidade = qtd;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(v: number) {
        this._valor = v;
    }

    repor(qtd: number) {
        this.quantidade = this.quantidade + qtd; 
    }

    darBaixa(qtd: number) {
        this.quantidade = this.quantidade - qtd;
    }
}

class ProdutoPerecivel extends Produto {
    private _dataValidade: number;
    private _dataAtual: number;

    constructor(id: number, d: String, qtd: number, v: number, dv: number, da: number) {
        super(id, d, qtd, v);
        this._dataValidade = dv;
        this._dataAtual = da;
    }

    get dataValidade(): number {
        return this._dataValidade;
    }

    set dataValidade(dv: number) {
        this._dataValidade = dv;
    }

    ehValido(dv: number): boolean {
        return (this._dataValidade == this._dataAtual || this._dataValidade < this._dataAtual);
    }
}

class Estoque {
    private _produto: Produto[] = [];

    inserir(produto: Produto): void {
        let produtoPesquisado = this.consultar(produto.id);

        if (produtoPesquisado == null) {
            this._produto.push(produto);
        }
    }

    consultar(id: number): Produto {
        let produtoPesquisado: Produto;
        for (let produto of this._produto) {
            if (produto.id == id) {
                produtoPesquisado = produto;
                break;
            }
        }
        return produtoPesquisado;
    }
}

let estoque: Estoque = new Estoque();

estoque.inserir(new Produto(1, "1", 10, 50));
estoque.inserir(new ProdutoPerecivel(1, "2", 20, 50, 31/12/21, 19/12/21));
estoque.consultar(1);
console.log(estoque.consultar(2).valor);
