/* //////////////////////////////////////////////
                Incremento e Decremento
   //////////////////////////////////////////////
                ++     ou       --
-------------------------------------------------------
let incrementNumber = 4
console.log(incrementNumber)
incrementNumber++
console.log(incrementNumber)
++incrementNumber
console.log(incrementNumber)

let decrementNumber = 50
console.log(decrementNumber)
decrementNumber--
console.log(decrementNumber)
--decrementNumber
console.log(decrementNumber)
*/

/* //////////////////////////////////////////////
                Aritméticos 
   //////////////////////////////////////////////
                 + - / * %
-------------------------------------------------------
let note1 = 10
let note2 = 7.5
let note3 = 9
let note4 = 4.5
let avg = (note1+note2+note3+note4) / 4
console.log(avg)
console.log(Math.round(avg))
console.log(Math.floor(avg))
*/

/* //////////////////////////////////////////////
                Relacionais
   //////////////////////////////////////////////
                < > == === != !== >= <=
-------------------------------------------------------   
let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // Diferente no valor
console.log(relation)
relation = numberRelation1 !== numberRelation2 // Diferente no valor OU no tipo (se 1 for true, aponta true)
console.log(relation)
relation = numberRelation1 == numberRelation2 // Igual no valor
console.log(relation)
relation = numberRelation1 === numberRelation2 // Igual no valor e no tipo (se 1 for false, aponta false)
console.log(relation)
*/

/* //////////////////////////////////////////////
                Atribuição
   //////////////////////////////////////////////
                   += *= -= /= %=
------------------------------------------------------- 
let newNumber = 20
newNumber += 40 
console.log(newNumber)

newNumber *= 2 
console.log(newNumber)

newNumber -= 20
console.log(newNumber)

newNumber /= 2
console.log(newNumber)

newNumber %= 2
console.log(newNumber)
*/

/* //////////////////////////////////////////////
                Ternário
   //////////////////////////////////////////////
                (Condição) ? true : false   
------------------------------------------------------- 
let value = 24
let value2 = 32

const newCondition = value >= value2 ? 'Isso é verdade' : 'Isso é uma mentira!'
console.log(newCondition)

const newCondition2 = value >= value2 ? 'Isso é verdade' : value <= value2 ? 'Isso é verdade, segunda condição true' : 'Resposta falsa para tudo!!'
console.log(newCondition2)
*/

