/*Fazer um programa para ler um número inteiro, e depois dizer se este número é negativo ou não.
Nome: Pablo Sponchiado
*/

const teclado = require(`prompt-sync`)();
let n : number = parseInt(teclado(`Digite um número: `));

if (n < 0) {
    console.log(`NEGATIVO`);
}
else {
    console.log(`NÃO NEGATIVO`);
}