/* //////////////////////////////////////////////
                Type Conversion
   //////////////////////////////////////////////
-------------------------------------------------------

// String to Number

console.log(Number('9') + 24); // Number('string')

// Number to String
console.log(String(9) + " Converteu?") // String(number)

*/ 

/* //////////////////////////////////////////////
                Contar caracteres
   //////////////////////////////////////////////
-------------------------------------------------------
let oneWord = 'Moacir'
console.log(oneWord.length) // 6 letras
*/

/* //////////////////////////////////////////////
                Uppercase e Lowercase
   //////////////////////////////////////////////
-------------------------------------------------------
let phrase = 'Olha o bonde da PayLivre!'
console.log(phrase.toUpperCase()) // Função maiúscula
console.log(phrase.toLowerCase()) // função minúscula 
*/

/* //////////////////////////////////////////////
                Uppercase e Lowercase
   //////////////////////////////////////////////
-------------------------------------------------------
*/

/*
// Float to Int
let decimalNumber = 24 + 5.5
console.log(parseInt(decimalNumber)) // elimina o decimal

// Int to Float
let integerNumber = 24 + 5.5
console.log(parseFloat(integerNumber)) // adiciona o decimal
*/ 

// // Determinar casas decimais
// let niceNumber = 24.988834515154548
// console.log(niceNumber.toFixed(2)) // determina e arredonda 

// // Modificar exibição

// console.log(niceNumber.toFixed(2).replace('.',',')) // Muda um dígito para outro

// // Precisão numérica

// let otherNumber = 129/32
// console.log(Number(otherNumber.toPrecision()))

/* //////////////////////////////////////////////
                Manipulação de Array
   //////////////////////////////////////////////
-------------------------------------------------------
// String Para Array
let newPhrase = "Fala meus queridos e queridas 😁"
console.log(newPhrase)
let phraseToArray = newPhrase.split(' ') // número de espaço
console.log(phraseToArray)

// Array para String
let phraseToString = phraseToArray.join(' ').toLowerCase()
console.log(phraseToString)

// Verificar palavras ou letras em array/ string

let stringInclude = 'Veem ne mim PayLivre, pay pay 😩'
console.log(stringInclude.includes("PayLivre"))

// Objetos

let arrayInclude = [
    'PayLivre',
    'Veem',
    'ne mim',
    'Meu amor',
    {
        firstName: 'Pay',
        lastName: 'Livre'
    }
]
console.log(arrayInclude.includes('Pay')) // Não encontra em objetos

// string startsWith
console.log(stringInclude.startsWith('V'))

// string endsWith
console.log(stringInclude.endsWith("😩"))

// Array em caracteres

let wordToArray = 'Quem ta gostando diz Hey!!'
console.log(Array.from(wordToArray))

// Adicionar item ao fim do array

const animals = ['🦁','🐯','🦒','🦊','🐷','🐮','🐼','🐸']
console.log(animals)

console.log(animals.push("🐵"))
console.log(animals)

// Adicionar item ao começo do array

console.log(animals.unshift("🐘"))
console.log(animals)

// Remover um item do fim array

console.log(animals.pop())
console.log(animals)

// Remover um item do começo do array

console.log(animals.shift())
console.log(animals)

// Pegar somente alguns elementos do array (não modifica)

console.log(animals.slice(0,3))
console.log(animals)

// Remover itens do array

console.log(animals.splice(0,3))
console.log(animals)

// Encontrar posição 

let index = animals.indexOf('🐸')
console.log(index)
animals.splice(index,4)
console.log(animals)

*/



