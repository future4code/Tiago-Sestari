//console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//EXERCÍCIOS DE INTERPRETAÇÃO
//Exercício 1
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//resultado será False

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//resultador será false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//resultado será True

console.log("e. ", typeof resultado)
//o tipo é boolean


//Exercício 2
let array
console.log('a. ', array)
//retorna: a. undefined 

array = null
console.log('b. ', array)
//retorna: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//retorna: c. 11

let i = 0
console.log('d. ', array[i])
//retorna: d. 3

array[i+1] = 19
console.log('e. ', array)
//retorna: e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//retorna: f. 9
*/

//EXERCÍCIOS DE CÓDIGO

//Exercício 1
let idadeUsuario = prompt("Qual a sua idade?");
let idadeAmigo = prompt("Qual a idade do seu (ua) amigo (a)?");

idadeUsuario = Number(idadeUsuario);
idadeAmigo = Number(idadeAmigo);

console.log("Sua idade é maior que a do seu amigo?", idadeUsuario > idadeAmigo);
console.log(idadeUsuario - idadeAmigo);

//Exercício 2
let numero = prompt("Insira um número par");
numero = Number(numero)
console.log(numero%2);
//Todo número par é divisivel por 2, o módulo é sempre 0.
//Quando inserimos um número impár o módulo é 1.

//Exercício 3
let listaDeTarefas = [];

let tarefa = prompt("Insira uma tarefa do dia a dia: ");
listaDeTarefas.push(tarefa);
tarefa = prompt("Insira uma tarefa do dia a dia: ");
listaDeTarefas.push(tarefa);
tarefa = prompt("Insira uma tarefa do dia a dia: ");
listaDeTarefas.push(tarefa);

console.log(listaDeTarefas);

let indice = prompt("Digite o indice de uma das tarefas (0 a 2): ");
indice = Number(indice);
listaDeTarefas.splice(indice, 1);
console.log(listaDeTarefas);

//Exercício 4
let emailDoUsuario = prompt("Insira seu email: ");
let nomeDoUsuario = prompt ("Insira seu nome: ");

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "!");



