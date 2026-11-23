// Loops ò Bucles (es una estructura de control que permite
//  repetir un bloque de codigo varias veces)

// For 

for (let i = 0; i <= 5; i++) { // definir la variable que uno quiera 
    console.log (`Hola-JavaScript ${i}`)   
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8] // con el length se genera de manera mas dinamica la tabla

for (let i = 0; i < numbers.length; i++) {
    console.log (`Elemento: ${numbers[i]}`)
}

// While (se evalua a si mismo, si es verdadero continua, y si es falso el bucle se termina)

let i = 0 //se tiene que crear una variable que tome un valor.
while (i < 5) {
    console.log (`Hola-JavaScript ${i}`) 
    i++
} 

// Bucle infinito while (true){
//}

// Do While 

i = 0
do {
       console.log (`Hola-JavaScript ${i}`) 
       i++ 
} while (i < 5)

// For of

myArray = [1, 2, 3, 4]

mySet = new Set (["Luis", "Flores", "Perzvl", 31, true, "Luisdeflores@gmail.com"])

myMap = new Map ([
    ["name", "luis"],
    ["email", "LuisFlores@gmail.com"],
    ["age", "31"]
])

myString = "Hola-Javascript!"

for (let valor of myString) {
    console.log (valor)
} 


