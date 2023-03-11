// For 
// for (inicio; condição; iteração)

for (let i = 1; i <= 10; i++){
    console.log(i)
}

console.log('')

for (let i = 10; i >= 1; i--){
    console.log(i)
}

console.log('')

for (let i = 1; i<=10; i++){
    if(i ==  5) {
        //break
        continue // Ignora
    }
    console.log(i)
}

console.log('')

// While (for porém a declaração, condição e iteração são separados)

let interator = 1 // declaração
while (interator <= 20) { // condição
    console.log(interator)

    // incremento
    interator++
}

console.log('')

// For of (for (item of var){comandos}) 
// A iteração é armazenada no item, todo os valores.

let number = ['Maria','Pedro','João', 'Jenifer','Luan',2,4,3,5,6]
for (num of number) { // o num recebe os itens do number
    if (num > 3) {
        console.log(num)
    }
}

console.log('')

// For in

let animals = {
    name: 'Leão',
    weight: 200,
    age: 4
}

for (item in animals){
    // Tipo 1 Específico
    console.log(animals['name'])
    // Tipo 2 Todo o objeto
    console.log(animals)
    // Tipo 3 Todo os itens
    console.log(animals[item])
    // Tipo 4 Específico
    console.log(animals.name)
    
}

console.log('')

let arrayName = ['Maria','Pedro','João', 'Jenifer','Luan']

for  (item in arrayName){
    console.log(arrayName) // Mostra todo array o número de items
    console.log(arrayName[item]) // Mostra todos valores
    console.log(item) // Mostra as posições
    console.log(arrayName[2]) // Vai direto na posição
}