var readlineSync = require('readline-sync')

var nome = readlineSync.question('Digite seu nome: ')
console.log(`Olá ${nome}`)
