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
var Produto = /** @class */ (function () {
    function Produto(id, d, qtd, v) {
        this._id = id;
        this._descricao = d;
        this._quantidade = qtd;
        this._valor = v;
    }
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (d) {
            this._descricao = d;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (qtd) {
            this._quantidade = qtd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (v) {
            this._valor = v;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.repor = function (qtd) {
        this.quantidade = this.quantidade + qtd;
    };
    Produto.prototype.darBaixa = function (qtd) {
        this.quantidade = this.quantidade - qtd;
    };
    return Produto;
}());
var ProdutoPerecivel = /** @class */ (function (_super) {
    __extends(ProdutoPerecivel, _super);
    function ProdutoPerecivel(id, d, qtd, v, dv, da) {
        var _this = _super.call(this, id, d, qtd, v) || this;
        _this._dataValidade = dv;
        _this._dataAtual = da;
        return _this;
    }
    Object.defineProperty(ProdutoPerecivel.prototype, "dataValidade", {
        get: function () {
            return this._dataValidade;
        },
        set: function (dv) {
            this._dataValidade = dv;
        },
        enumerable: false,
        configurable: true
    });
    ProdutoPerecivel.prototype.ehValido = function (dv) {
        return (this._dataValidade == this._dataAtual || this._dataValidade < this._dataAtual);
    };
    return ProdutoPerecivel;
}(Produto));
var Estoque = /** @class */ (function () {
    function Estoque() {
        this._produto = [];
    }
    Estoque.prototype.inserir = function (produto) {
        var produtoPesquisado = this.consultar(produto.id);
        if (produtoPesquisado == null) {
            this._produto.push(produto);
        }
    };
    Estoque.prototype.consultar = function (id) {
        var produtoPesquisado;
        for (var _i = 0, _a = this._produto; _i < _a.length; _i++) {
            var produto = _a[_i];
            if (produto.id == id) {
                produtoPesquisado = produto;
                break;
            }
        }
        return produtoPesquisado;
    };
    return Estoque;
}());
var estoque = new Estoque();
estoque.inserir(new Produto(1, "1", 10, 50));
estoque.inserir(new ProdutoPerecivel(1, "2", 20, 50, 31 / 12 / 21, 19 / 12 / 21));
estoque.consultar(1);
console.log(estoque.consultar(2).valor);
