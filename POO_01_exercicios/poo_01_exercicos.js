/*
1) Objetos = são analogias a elementos do mundo real.
Podem possuir características e comportamentos. EX: Pessoa, Produto, Conta.

Classes = são modelos a partir dos quais os objetos são criados.
Diz-se que uma classe e uma "matriz" de objetos. EX: Planta de uma casa,
Receita de um bolo.
*/
/*
2)  Atributos = são as características de um objeto, essas características
também são conhecidas como variáveis. Podem definir ainda o estado dos objetos.

Métodos = são comportamentos de um objeto ou ações que um objeto pode realizar.
São implementados através de um conjunto de instruções (semelhante à funções).

Objeto: Cachorro
Atributos: nome, peso, altura
Métodos: latir, correr, pular
*/
/*
3)  ATRIBUTOS               Sistema que é importante        Sistema em que não é importante
     Peso                       Pessoa                          Agencia Bancária
     Tipo de CNH                Cadastro de uma pessoa          Carro
     Tipo Sanguíneo             Organismo                       Conta Bancária
     Habilidade Destra          Escrita                         Blog de Internet
     Percentual de Gordura      IMC                             Mesa de estar
     Saldo em Conta             Conta Bancária                  Veículo
     Etnia                      Pessoa                          Caneta

*/
/*
4) a)  Sim, porque o atributo pessoa seria uma das principais características
     do objeto conta em questão.
   
   b)  Não, pois poderia acarretar uma confusão no código.
*/
/*
5)  Aluno, Professor, Empresa, Tec.Administrativo, Validação de Documentos
*/
/*
6)  Atributos = Qtd de Times, Duração do jogo, N° de jogadores, Horário do jogo
    Métodos = Iniciar, Finalizar, Adicionar Times, Adicionar Jogadores
*/
//------------------------------------------------------------------------------------//
7.;
var Retangulo = /** @class */ (function () {
    function Retangulo() {
    }
    Retangulo.prototype.calculaArea = function () {
        return this.l1 * this.l2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return this.l1 + this.l2;
    };
    return Retangulo;
}());
var r;
r = new Retangulo();
r.l1 = 5;
r.l2 = 4;
console.log(r.calcularPerimetro());
//---------------------------------------------------------------------------------------//
8.;
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.pi = 3.14;
    }
    Circulo.prototype.calculaArea = function () {
        return this.pi * (this.raio * this.raio);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * this.pi * this.raio;
    };
    return Circulo;
}());
var c;
c = new Circulo();
c.raio = 5;
c.pi = 3.14;
console.log("A área do circulo é: " + r.calculaArea());
console.log("O perímetro do circulo é: " + r.calcularPerimetro());
//-----------------------------------------------------------------------------------//
9.;
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
    }
    SituacaoFinanceira.prototype.consultarSaldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var s;
s = new SituacaoFinanceira();
s.valorCreditos = 100;
s.valorDebitos = 40;
console.log("O valor do saldo é " + s.consultarSaldo());
