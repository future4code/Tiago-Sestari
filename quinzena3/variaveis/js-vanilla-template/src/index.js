//Exercício de interpretação 
//Exercício 1
a = 10
b = 10
console.log(b) //Output é 10
b = 5
console.log(a, b) //Output é 10 5

//Exercício 2
a = 10
b = 20
c = a
b = c
a = b
console.log(a, b, c) //Output é 10 10 10 

//Exercício de código
//Exercício 1
let nome;
let idade;

console.log(typeof(nome));
console.log(typeof(idade));
/*Os tipos imprimidos são undefined. Como JavaScript tem tipagem dinâmica,
o programa define o tipo de variável de acordo com o input, mas não antes de a variável 
ser atribuída*/

nome = prompt("Qual seu nome?");
idade = prompt("Qual sua idade?");

console.log("Olá", nome, "você tem", idade, "anos");

//Exercício 2

let filme = prompt("Qual seu filme favorito?");
console.log("Resposta:", filme);
let livro = prompt("Qual seu livro favorito?");
console.log("Resposta:", livro);
let musica = prompt("Qual sua música favorita?");
console.log("Resposta:", musica);
let residentevil = prompt("Você prefere lutar com 10.000 zumbis ou com o Nemesis?");
console.log("Resposta:", residentevil);
let donkeykong = prompt("Você prefere dar um beijo no donkey kong ou ouvir o Mario gritando por 3 horas?");
console.log("Resposta:", donkeykong);


//Exercício 3
let array = ["Feijoada", "Lasagna", "Realmente amo feijoada", "Pizza", "É sério o negócio da feijoada"];

console.log(array);

console.log("Essas são as minhas comidas preferidas:", array[0]);
console.log("Essas são as minhas comidas preferidas:", array[1]);
console.log("Essas são as minhas comidas preferidas:", array[2]);
console.log("Essas são as minhas comidas preferidas:", array[3]);
console.log("Essas são as minhas comidas preferidas:", array[4]);

//desafio
array[1] = prompt("Qual a sua comida preferida?");
console.log(array);

//Exercício 4
let perguntas = ["Você está feliz?", "Você já leu Planeta dos Macacos?", "Você gosta de Feijoada?"];
let resposta = [false, true, true];

console.log(perguntas[0],resposta[0]);
console.log(perguntas[1],resposta[1]);
console.log(perguntas[2],resposta[2]);