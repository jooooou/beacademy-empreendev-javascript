/* //////////////////////////////////////////////
                Variáveis
   //////////////////////////////////////////////
                Armazenamento de valores,
                usa a memória ram.

                Os valores podem ser constantes ou não.

                Tipos:
                    -> var: Valor que pode mudar (Global)
                    -> let: Valor que pode mudar, usado em blocos de código (Local)
                    -> const: Valor fixo. (Precisa de um valor)

-------------------------------------------------
/////////// Declaração 

var name 
let name2
const name3 = "nome fixo"

name = "nome variável"
name2 = "nome variável segundo"

--------------- Pode mudar o valor e o tipo (Fracamente Tipada)

let name4 = "Luan"
console.log(name4)

name4 = 32
console.log(name4)

name4 = "Monteiro"
console.log(name4)

*/

/* //////////////////////////////////////////////
                Global ou Local
   //////////////////////////////////////////////
-------------------------------------------------------

----------------------------------- Globais (Todo documento)

------- Hoisting -> var (Trazer uma variável para o topo)

console.log('Variável name existe aqui?', name)

{
    // Escopo, Bloco, Local
    var name = 'Luan'
}

console.log('Variável name existe aqui?', name)

------------------------------------ Local (Escopo, bloco)

let name = 'Luan'
console.log('Meu nome chegou aqui?',name)

{
    // Escopo
    let name = 'Jenifer'
    console.log('Meu nome chegou aqui?',name)
}

console.log('Meu nome chegou aqui?',name)

*/

/* //////////////////////////////////////////////
                Objetos
   //////////////////////////////////////////////
-------------------------------------------------------

const human = {
    name: "Luan Monteiro",
    age: 30,
    weight: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('Eu ando bastante!')
    }
}
 console.log({human})
 console.log(human.age)
 console.log(human.walk())

*/

/* //////////////////////////////////////////////
                Unir variáveis 
   //////////////////////////////////////////////
-------------------------------------------------------

-------------------- Concatenar  +
console.log("O humano " + human.name + " tem a idade " + human.age) 

-------------------- Interpolação usa ` ` e quando tem variável usa ${var}
console.log(`O humano ${human.name} tem a idade ${human.age}`)

*/

/* //////////////////////////////////////////////
                Array com Objeto 
   //////////////////////////////////////////////
-------------------------------------------------------

const animals = ["Elefante","Gato","Leão", "Cachorro", { name: "Moacir", age:2, weight:4}]

console.log(animals[4].age)

*/