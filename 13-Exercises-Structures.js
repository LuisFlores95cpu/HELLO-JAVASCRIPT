// 1- Crea un Array que almacene 5 Animales

let myArray = []

myArray = [1, 2, 3, 4, 5]
myArray = ["Leon", "Zebra", "Tigre", "Cocodrilo", "Mono"]

console.log (myArray)


// 2- Añade dos mas, uno al principio y otro al final

myArray.push("Cobra")
myArray.unshift ("Jirafa")
console.log (myArray)

// 3- Elimina el que se encuentra en 3era posicion

myArray.splice(2,1)
console.log (myArray)

// 4- Crea un Set que almacene 5 libros

mySet = new Set (["El Amor","La Paciencia", "Tesoro Oculto", "Mil Vidas", "Cien Años de Soledad"])
console.log (mySet)

// 5- Añade dos mas, uno de ellos repetido

mySet.add ("Descalzos") // este lo muestra en la consola, pasa de 5 a 6 libros en total adentro del set
mySet.add ("El Amor") // este resultado no se muestra porque el set no admite elementos duplicados 
console.log(mySet)

// 6- Elimina uno concreto a tu eleccion

mySet.delete ("Tesoro Oculto")
console.log (mySet)

// 7- Crea un mapa que asocie el numero del mes a su nombre

let myMap = new Map ()
console.log(myMap)

myMap = new Map ([

    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"],
])
console.log (myMap)

// 8- Comprueba si el mes numero 5 existe en el map e imprime su valor

console.log (myMap.has ("5")) // aqui lo que me indica has (retornando como booleano) que el "mes 5" existe en el map

// 9- Añade al map una clave con un array como que almacene los meses en verano

myMap.set ("Verano", ["Diciembre", "Enero", "Febrero"])
console.log (myMap.get("Verano")) 

// 10- Crea un Array, transformalo en Set y almacenalo en un map

let myNewArray = Array.from(mySet)
console.log (myNewArray)

mySet = new Set (myNewArray)
console.log (mySet) 

    myMap = new Map ()
    myMap.set ("mySet", mySet)
    console.log (myMap)
