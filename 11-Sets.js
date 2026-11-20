// Set 

// Declaracion

let mySet = new Set()

console.log (mySet)

// Inicializacion 

mySet = new Set (["Luis", "Flores", "Perzvl", 31, true, "Luisdeflores@gmail.com"])

console.log (mySet)

// Metodos Comunes

// Add y Delete

mySet.add ("https.//moure.dev.") // Add agrega elementos de manera ordenada. 
console.log(mySet)

mySet.delete ("Perzvl") // no elimina el ultimo elemento, elimina el elemento que queremos que elimine
// de manera literal indicarle al delete que elemento queremos borrar

console.log(mySet)

console.log(mySet.delete("Luis")) // la operacion retorna un boolean (retorna un True si el elemento existe y fue eliminado)
console.log(mySet.delete(1)) // aqui retorna un false porque el elemento no existe 

// has  comprueba si un valor o clave existe dentro de la colección y devuelve un booleano (true o false).

console.log(mySet.has("Perzvl"))
console.log(mySet.has("Luis"))

// size 

console.log(mySet.size)

// convertir un Set en Array

let myArray = Array.from(mySet)
console.log (myArray)

// convertir un Array a Set

mySet = new Set (myArray)
console.log (mySet)

// el set no admite duplicado, aunque coloques 10 veces el mismo elemento dentro del set, ejecutara 1 solo en la consola
// a menos que se modifique en lo minimo y ahi si el set lo agrega como un elemento "distinto"