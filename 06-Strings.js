// Strings

// Concatenacion

let myName = "Luis"
let greeting = "Hola, " + myName + "!"
console.log (greeting)
console.log (typeof greeting)

// Longitud 

console.log (greeting.length)

// Acesso a Caracteres 

console.log (greeting.length[0])
console.log (greeting.length[9])

// Metodos Comunes 
console.log (greeting.toUpperCase)
console.log (greeting.toLowerCase)
console.log (greeting.indexOf("Luis"))
console.log (greeting.indexOf("Perzval"))
console.log (greeting.includes("Luis"))
console.log (greeting.slice(0,10))
console.log (greeting.replace("Luis", "Perzval"))

// Template Literals (Plantillas Literales)

let message = `Hola, este es mi 
primer curso de javascript`

console.log (message)

let email = "Luisflores�gmail.com"
console.log(`Hola, ${myName} ! Tu email es ${email}`)
