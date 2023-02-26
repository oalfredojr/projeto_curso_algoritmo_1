/*
// Secao de Declaracoes das variaveis 
    nome: caractere
    numero: real

 Inicio
// Secao de Comandos, procedimento, funcoes, operadores, etc... 
   escreval("Digite o nome:")
   leia (nome)
   escreval("Digite o numero:")
   leia (numero)
   
   escreval(nome, " : ", numero, 15)
*/

var nome, numero

nome = prompt ("Digite o seu nome: ")
numero = prompt ("Digite o seu numero: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero + 15