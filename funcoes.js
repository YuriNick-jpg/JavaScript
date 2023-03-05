// Crie uma função para verificar se um valor é Truthy
function verificaBool(teste)  {
  if (!!teste === true)  {
    return 'Verdadeiro'
  } else {
    return 'Falso'
  }
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  var per = lado*4
  return console.log(per)
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = 'nicolas'
var sobreNome = 'yuri'
function nomeCompleto() {
  console.log(nome +' '+ sobreNome)
}

// Crie uma função que verifica se um número é par
function verificaPar(num) {
  var num2 = num / 2
  var teste = Number.isInteger(num2)
  if (teste === true) {
    return console.log(`${num} é par`)
  }else {
    return console.log(`${num} não é par`)
  }

}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeArgumento(tipo){
  return console.log(typeof tipo)
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.fun
addEventListener('click', nomeCompleto)

// Corrija o erro abaixo