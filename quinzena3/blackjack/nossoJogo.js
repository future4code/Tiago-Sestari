/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Essa variável vai controlar o loop principal, enquanto o usuário der ok no confirm, o jogo vai recomeçar
let mainLoop = true;

 console.log("Bem vindo ao Blackjack");

 //Abre o loop principal
 while (mainLoop) {

   if(confirm("Quer jogar uma nova rodada?")) {

      let cartas = []


      //esse laço vai rodar 4 vezes colocando as cartas sorteadas no array para não ter que escrever 4 vezes o call da função
      let i = 0;
      while (i < 5) {
         
         cartas.push(comprarCarta());

         //Como a função comprarCarta sortea um naipe e um número, há o risco de sair mais de uma carta igual no jogo
         //Esse loop compara todos os elementos dantro da array das cartas sorteadas e refaz o sorteio caso isso aconteça
         if (cartas.length > 1) {
            for (j = 0; j < cartas.length; j++) {
               for (k = j + 1; k < cartas.length; k++) {
                  if (cartas[j].texto === cartas[k].texto) {
                  console.log("cartas duplicadas! sorteando novamente");
                  cartas = [];
                  i = 0;
                  }
               }
            }

            i++;
         }

      }

      //Salvei os válores em variáveis para facilitar a comparação depois
      let valorUser = Number(cartas[0].valor) + Number(cartas[1].valor);
      let valorComputer =  Number(cartas[2].valor) + Number(cartas[3].valor);

      console.log("Usuário - cartas: " + cartas[0].texto + " " + cartas[1].texto + " - pontuação " + valorUser);
      console.log("Computador - cartas: " + cartas[2].texto + " " + cartas[3].texto + " - pontuação " + valorComputer);

      //Esse if verifica o vencedor
      if (valorUser > valorComputer) {
         console.log("O usário ganhou!");
      } else if (valorUser === valorComputer) {
         console.log("Empate!");
      } else { console.log("O computador ganhou!"); }
      

      
   } else {
      console.log("O jogo acabou");
      //além do console log fecha o loop principal e encerra o jogo.
      mainLoop = false;
   }

 }