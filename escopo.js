// Por qual motivo o código abaixo retorna com erros?
{
var cor = 'preto';
const marca = 'Fiat';
let portas = 4;
console.log(cor, marca, portas); 
}
// R: console.log está fora do bloco, logo marca e portas n pode ser lido devido ao
// escopo de const e let; var não é uma variável.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
somarDois(4);
dividirDois(6);
/* Como dois é uma constante em somarDois não pode ser lida em dividirDois*/
// O que fazer para total retornar 500?
var numero = 50;
for(let numero = 0; numero < 10; numero++) {
console.log(numero);
}
const total = 10 * numero;
console.log(total);

// Subistituir var por let