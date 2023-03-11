// 1) variável person ----- Certo

var person 
console.log(person)

 // 2) indefinido ------- Certo
 console.log(typeof person)


// 3)  ---- Certo

var exercicio3 = {
    name: "Guilherme",
    age: 18,
    weight: 62.5,
    isAdmin: true,
    isAMan: true
}

console.log(exercicio3)


// 4 objeto --- Certo

let human = {
    name: "Guilherme",
    age: 18,
    weight: 62.5,
    isAdmin: true,
    isAMan: true
}
console.log(`O humano ${human.name} tem o peso ${human.weight} kg.`)

// 5 --------- Certo

var humans = []

// 6  ----- Certo

var humans = [human]
console.log(humans)

// 7 ------ Certo
console.log(humans[0])

// 8 ------ Certo
let student = {}

var students = []

students[1] = student

console.log(students)
console.log(students[1])

// 9

/*

a) undefined              --------- Certo
b) undefined, 2, undefined -------- Certo
c) undefined,3,undefined -------- Errado (Error)
d) 10, error ---------- Meio certo (Error)

*/








