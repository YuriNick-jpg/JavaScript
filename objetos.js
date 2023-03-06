// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
eu = {
  nome: 'nicolas',
  sobrenome : 'oliveira',
  idade: 24,
  peso: 95,

}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.completo = 
  function nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var dog = {
  raça: 'labrador',
  cor: 'preto',
  idade: 10,
  late(ver) {
    if (ver === 'homem')  {
      return 'latido';
    } else {
      return 'quieto';
    }
  }
}