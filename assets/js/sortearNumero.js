/* link para pesquisa Math.random()

        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

const menorValor = 1
const maiorValor = 1000


const numeroSecreto = gerarNumeroAleatorio();


/* Função para gerar o numero aleatório */
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);

}

console.log('Numero Secreto: ', numeroSecreto);


/* Alterar o maior e menor valor na página "O número secreto está entre" */
const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;