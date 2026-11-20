// 1. Concatena dos cadenas de texto

let myname = "Luis"
let greeting = "Hola, " + myname + "!"
console.log (greeting);
console.log (typeof greeting); 

// 2. Muestra la longitud de una cadena de texto

console.log (greeting.length)

// 3. Muestra el primer y ultimo caracter de un string 

console.log (greeting[0])
console.log (greeting[10])

// 4. Convierte mayusculas y minusculas un string

console.log (greeting.toUpperCase)
console.log (greeting.toLowerCase)

// 5. Crea una cadena de texto en varias lineas

let message = `mi primer ejercicio
en varias lineas de javascript`

// 6. Interpola el valor de una variable a una string 

let user = "Perzvl"
console.log (`Hola, ${myname} ! tu usuario es ${user}`) 

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log (greeting.replace("", "-")) 

// 8. Comprueba si una cadena de texto contiene una palabra concreta 

console.log(greeting.includes("Luis"))

// 9. Comprueba si dos Strings son iguales

const text1 = "Luis"
const text2 = "Perzvl"

if (text1 === text2) {
console.log ("son iguales")
}

// 10. Comprueba si 2 Strings tienen la misma longitud 

if (text1.length === text2.length) 
console.log ("no tienen la misma longitud")
