let nome = 'Carlos Augusto Lima Aves';
console.log('Meu nome é ' + nome + ' e estou participando do desafio de JavaScript para desenvolver Calculadora de partidas Rankeadas');


// Lista de jogadores (para usar laço de repetição)
let jogadores = [
    { jogador: 'Jogador 1', vitorias: 9, derrotas: 2 }, // Se vitórias for menor do que 10 = Ferro
    { jogador: 'Jogador 2', vitorias: 11, derrotas: 5 }, // Se vitórias for entre 11 e 20 = Bronze
    { jogador: 'Jogador 3', vitorias: 21, derrotas: 10 }, // Se vitórias for entre 21 e 50 = Prata
    { jogador: 'Jogador 4', vitorias: 51, derrotas: 20 }, // Se vitórias for entre 51 e 80 = Ouro
    { jogador: 'Jogador 5', vitorias: 81, derrotas: 20 }, // Se vitórias for entre 81 e 90 = Diamante
    { jogador: 'Jogador 6', vitorias: 91, derrotas: 30 }, // Se vitórias for entre 91 e 100= Lendário
    { jogador: 'Jogador 7', vitorias: 101, derrotas: 20 } // Se vitórias for maior ou igual a 101 = Imortal
];

// Função que calcula saldo e nível
//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador
function calcularRank(vitorias, derrotas) {

    // Variáveis
    let saldo = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorno da função
    return { saldo, nivel };
}


// Laço de repetição
for (let jogador = 0; jogador < jogadores.length; jogador++) {

    let resultado = calcularRank(
        jogadores[jogador].vitorias,
        jogadores[jogador].derrotas
    );

    console.log(
        `${jogadores[jogador].jogador}`
    );

    console.log(
        `O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`
    );

        console.log(`---------------------------------------------`);
}