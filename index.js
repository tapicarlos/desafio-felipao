let nome = 'Carlos Augusto Lima Aves';
console.log('Meu nome é ' + nome);

// Variáveis
let heroi = "Homem-Aranha";
let xp = 1000;
let nivel = "";

// Estrutura de decisão

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000 && xp > 1000) {
    nivel = "Bronze";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp <= 5000 && xp > 2000) {
    nivel = "Prata";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp <= 7000 && xp > 5000) {
    nivel = "Ouro";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp <= 8000 && xp > 7000) {
    nivel = "Platina";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp <= 9000 && xp > 8000) {
    nivel = "Ascendente";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp <= 10000 && xp > 9000) {
    nivel = "Imortal";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else if (xp > 10000) {
    nivel = "Radiante";
    console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
} else {
    console.log("XP inválida");
}

