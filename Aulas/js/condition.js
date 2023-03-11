// if and else

// let num = 10
// let num2 = 20
// let isAdmin = true

// // qualquer operador
// // && (and) || (or) ! (not)
// if (num >= 10 && num2 >= 10 ) {
//     console.log('VERDADE')
// }
// else {
//     console.log('FALSO')
// }
// // ! (not)
// if (!isAdmin) {
//     console.log('Ele não é Admin')
// }
// else {
//     console.log('Ele é Admin')
// }

// // && (Ambos tem que estar corretos) || (apenas 1 tem que estar certo)

// // else if (testes,testa o primeiro, testa o segundo, testa o terceiro, o que for verdade ele exibe)

// if (num < 10){                        
//     console.log('Sou Maior')
// } else if (num > 10 && num2 == 20) {
//     console.log('Segunda resposta verdade')
// } else {
//     console.log('Resposta falsa')
// }

// SWITCH CASE, DEFAULT

// let myExpression = 'x'

// switch (myExpression) {
//     case 'a':
//         console.log('Apertou o A')
//         break
//     case 'b':
//         console.log('Apertou o B')
//         break
//     case 'c':
//         console.log('Apertou o C')
//         break
//     default:
//         console.log(`Você apertou a tecla: '${myExpression}'`)
//         break
// }

// // calc

// function calc(num1,op,num2) {
//     let result

//     switch(op){
//         case '+':
//             result = num1 + num2
//             break
//         case '-':
//             result = num1 - num2
//             break
//         case '*':
//             result = num1 * num2
//             break
//         case '/':
//             result = num1 / num2
//             break
//         default:
//             console.log('Operação inválida')
//             break
//     }
//     return result
// }
// console.log(calc(8,'/',2))


// Throw (define o erro) e Try Catch (Analisa função, se funciona, avança, caso contrário, mostra um erro)

function myAge(myage){
    if(!myage) {
        throw 'Você precisa colocar a idade!' // Definindo o erro, caso verdade, para a função.
    }
    console.log('Eu executei depois do erro!')
}

try { // Testando função
    myAge()
    console.log('Já tratei e deu certo!')
} catch(error) { // Chamando o erro que foi definido na função
    console.log(error)
}

console.log('Programa continua')