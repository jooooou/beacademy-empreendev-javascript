// // Exemplo1
//     //Method
// function myFirstFunction(){
//     console.log("Olha a função!!!")
// }

// // Executar

// myFirstFunction()

// // Parâmetros e Argumentos
// function sum(number1,number2){
//     console.log(number1 + number2)
// }

// sum(32,24) 

// // Return

// function myFirstFunctionWithReturn(num1,num2){
//     let total = num1 + num2
//     return total
// }

// console.log(myFirstFunctionWithReturn(20,20))

// // Exemplo Prato De Comida.

// function meuPratoDeComida(comida1,comida2,comida3,comida4) {
//     return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}.`
// }

// const prato = meuPratoDeComida('arroz','feijão','bife','batata frita')
// console.log(prato)

// // Arrow Function

// const myFirstArrowFunction = (numero1,numero2) => {
//     let resultado = numero1 + numero2
//     return resultado
// }
// const result = myFirstArrowFunction(20,20)
// console.log(result)




// // Função anônima 

// (function(){
//     console.log('Paylivre S2')
// })() // Autoexecução

// setTimeout(function(){console.log('Vou levar 3 segundos para ser executado!')},3000)

// // Escopo

// Parte 1

// let assunto // Global

// function criarAssunto (assunto){ // local
//     return assunto
// }
// console.log(criarAssunto()) // global

// Parte 2

// let assunto = 'Estudar'

// function criarAssunto (assunto){ 
//     return assunto
// }
// console.log(assunto)
// console.log(criarAssunto(assunto)) 

// Parte 3

// let assunto = 'Estudar' // global

// function criarAssunto (assunto){  // local
//     assunto = "Escutar música" // Mudança de valor
//     return assunto
// }
// console.log(assunto) // global
// console.log(criarAssunto(assunto)) //local

// Parte 4

// let assunto = 'Estudar' 

// function criarAssunto (){  
//     assunto = "Escutar música" 
//     return assunto
// }
// console.log(assunto) 
// console.log(criarAssunto(assunto)) 

// //  Hoisting

// digaMinhaIdade()

// function digaMinhaIdade(){
//     return console.log(30)
// }

// // Callback
//                     // Função
// function minhaFuncao(callback) {
//     console.log('Início da minha função =)')
//     callback(15,15) // Execução da função
//     console.log('Final da minha função')
// }
// minhaFuncao( // Parâmetros da função
//     (num1,num2) => {
//         return console.log(num1 + num2)
//     }
// )

// // Function Construct

// function Sum (){
//     this.num1,
//     this.num2,
//     this.calc = function(num1,num2){
//         return total = num1 + num2
//     }
// }

// Function Construct 2

// function Sum (num1,num2){ // Com parâmetros 
//     this.num1 = num1, // precisam ser atribuídos as variáveis 
//     this.num2 = num2,
//     this.calc = function(num1,num2){
//         return total = num1 + num2
//     }
// }

// Instanciar 1

// const math = new Sum()
// console.log(math)
// console.log(math.calc(32,32))

// const math2 = new Sum()
// console.log(math2.calc(50,64))

// Instanciar 2

// const math = new Sum()
// const num1 = math.num1 = 24
// const num2 = math.num2 = 50

// console.log(num1)
// console.log(num2)
// console.log(math.calc(num1,num2))

// const math2 = new Sum()
// const number1 = math2.num1 = 30
// const number2 = math2.num2 = 10
// console.log(math2.calc(number1,number2))

// Instanciar 3

// const math = new Sum().calc(45,45)
// console.log(math)

// // Date (Função nativa de data)

// let data = new Date()
// console.log(data)