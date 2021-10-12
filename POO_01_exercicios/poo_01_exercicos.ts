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
7.
   class Retangulo {
         l1: number;
         l2: number;

         calculaArea(): number {
              return this.l1 * this.l2;
         }

         calcularPerimetro(): number {
               return this.l1 + this.l2;
         }
}

let r : Retangulo;
r = new Retangulo();
r.l1 = 5;
r.l2 = 4;
console.log(r.calcularPerimetro());
//---------------------------------------------------------------------------------------//
8.
     class Circulo {
          raio: number;
          pi = 3.14;

          calculaArea(): number {
               return this.pi * (this.raio * this.raio);
          }

          calcularPerimetro(): number {
               return 2 * this.pi * this.raio;
          }
     }

     let c : Circulo;
     c = new Circulo();
     c.raio = 5;
     c.pi = 3.14;
     console.log("A área do circulo é: " + r.calculaArea());
     console.log("O perímetro do circulo é: " + r.calcularPerimetro());
     //-----------------------------------------------------------------------------------//
     9.
        class SituacaoFinanceira {
             valorCreditos: number;
             valorDebitos: number;

             consultarSaldo(): number {
                  return this.valorCreditos - this.valorDebitos;
             }
        }

        let s: SituacaoFinanceira;
        s = new SituacaoFinanceira();
        s.valorCreditos = 100;
        s.valorDebitos = 40;
        console.log("O valor do saldo é " + s.consultarSaldo());