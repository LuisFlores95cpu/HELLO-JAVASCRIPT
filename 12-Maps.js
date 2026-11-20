// Map ò Diccionario 
// Declaracion

let myMap = new Map ()
console.log (myMap)

// Inicializacion 

myMap = new Map ([
    ["name", "luis"],
    ["email", "LuisFlores@gmail.com"],
    ["age", "31"]
])

console.log (myMap)

// Metodos y Propiedades
// Set

myMap.set ("alias", "Perzival")
myMap.set ("name", "Luis Flores") //  si la clave existe, la actualiza sino existe, la crea
console.log (myMap)

// get (sirve para recuperar datos)
 
console.log (myMap.get ("name")) // Aqui si recupera el nombre que modificamos en el ejemplo de arriba
console.log (myMap.get ("surname")) // arroja undefined porque no esta esa variable en myMap

// has

console.log (myMap.has ("surname"))// retorna un boolean ya que "apellido" no existe en el map
console.log (myMap.has ("age")) // retorna true porque la "age"si esta en el map

// delete

myMap.delete ("email")
console.log (myMap)

// Keys, Values, Entries 

console.log(myMap.keys()) // retorna un listado con las claves
console.log(myMap.values()) // retorna los valores del map
console.log(myMap.entries()) // muestra todas las claves con sus valores

// size

console.log (myMap.size)

// Clear

myMap.clear ()
console.log (myMap)
