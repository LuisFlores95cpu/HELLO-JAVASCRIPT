// array 
// Declaracion 

let myArray = [] //mejor usar este
let myArray2 = new Array () //aunque este tambien es correcto

console.log (myArray)
console.log (myArray2)

// Inicializacion 

myArray = [1, 2, 3, 4]
myArray2 = [1, 2, 3, 4] 

console.log (myArray)
console.log (myArray2) 

myArray = ["Luis", "Flores", "Perzvl", 37, true]
myArray2 = ["Luis", "Flores", "Perzvl", 37 , true] 

console.log (myArray)
console.log (myArray2)

myArray2 = new Array (3)
myArray2 [1] = "Luis"
myArray2 [0] = "Flores"
myArray2 [4]= "Perzvl"

console.log (myArray2)

myArray = []
myArray [1] = "Luis"
//myArray [0] = "Flores"
myArray [2] = "Perzvl"

console.log (myArray)

// Metodos comunes

myArray = []

// Push y pop

myArray.push ("Luis")
myArray.push ("Flores")
myArray.push ("Perzvl")

console.log (myArray)

myArray.pop () //elimina el ultimo y lo devuelve

console.log (myArray)

// shift y unshift 

console.log (myArray.shift())
console.log (myArray) // al igual que el pop, elimina el ultimo elemento y lo devuelve

myArray.unshift ("Luis", "flores") 
console.log (myArray)

// Lenght

console.log (myArray.length)

// Clear

// Asi se borra el array myArray = [] (tal cual como al principio se explico)

myArray.length = 0 // es una alternativa
console.log (myArray)

// slice

//devuelve una copia superficial de una porcion (es generar un nuevo array, con lo que yo quiero 
// Ejemplo

myArray.push ("Luis", "Flores", "Perzvl", 3, true)

let myNewArray = myArray.slice (1, 2)

console.log (myArray)
console.log (myNewArray)
