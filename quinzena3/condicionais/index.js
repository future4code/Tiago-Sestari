//console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

/* EXERCÍCIO 1
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
//Se o módulo dois do número for zero, ou seja, se o número for par, ele imprime passou no teste.
  console.log("Passou no teste.")
} else {
//Quando o número é impar ele não passa no teste.
  console.log("Não passou no teste.")
}
*/

/*EXERCÍCIO 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a. Para que serve o código acima?
Para retornar o preço de acordo com a fruta escolhida.

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maça é  R$ 2.25


c. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
A mensagem impressa será para o preço 5. O comando não vai parar e vai executar o default.
*/

/* EXERCÍCIO 3

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


a. O que a primeira linha está fazendo?
Recebendo um número do usuario e fazendo o casting para tipo numero.

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
O número 10 entra no bloco do if e retorna a mensagem "Esse número passou no teste". Se o número fosse -10 o bloco if não seria executado.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
Como a variável mensagem foi definida dentro do escopo do if, o último console log vai acusar que a variável não está definida.
*/

/*EXERCÍCIO 4 */

let idade = Number(prompt("Qual a sua idade?"));

//Usei > 17 para incluir o 18. Como o intervalo é discreto não haverá problemas para números não inteiros.
if (idade > 17) {

    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir.");
}

/*EXERCÍCIO 5*/

let turno = prompt("Qual turno você estuda?")
//Caso o usuário digite algo diferente, essa linha pega apenas a primeira letra e deixa maíscula garantindo o padrão
turno = turno[0].toUpperCase();

if (turno === "M") {
    console.log("Bom dia");
} else if (turno === "V") {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

/*EXERCÍCIO 6*/

switch (turno) {
    case "M":
        console.log("Bom dia");
        break;
    case "V":
        console.log("Boa tarde!");
        break;

    case "N":
        console.log("Boa noite!");
        break;

    default: 
    console.log("Ola");

}


/*EXERCÍCIO 7*/

let tipoFilme = prompt("Qual o tipo de filme?");
let preco = Number(prompt("Qual o preço do ingresso?"));

if (tipoFilme === "fantasia" && preco < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}