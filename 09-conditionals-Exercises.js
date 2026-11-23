// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Luis"
console.log ("Luis")

// 2. imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let User = ("Luis31")
let password = ("12345")
    if (User != password) {
    console.log ("la contraseña es correcta")
} else {
console.log ("la contraseña no es correcta")
}

// 3. Verifica si un numero es positivo, negativo, o cero e imprime el mensaje

let a = "5"
if (a != 5) {
    console.log ("es positivo")
} else if (a < 18) {
    console.log ("el numero es negativo") 
} else {
console.log ("el numero es cero")
} 

// 4. verifica si una persona puede votar o no (mayor o igual de 18) e indica cuantos años le faltan

let UserAge = "21"
if (UserAge > 18) {
    console.log ("Puede votar")
} else if (UserAge < 18) {
    console.log ("le faltan 2 años para votar") 
} else {
console.log ("no puede votar")
} 

// 5. usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo la edad

let age = 42
const adulto = true 
adulto ? console.log ("adulto") : console.log ("menor") 

// 6. muestra en que estacion del año nos econtramos dependiendo del valor de una variable "mes"

let month = 8
let station = "";
switch (month) { 
    case 12:
    case 1: 
    case 2:
        station =("summer")
        break
    case 3:
    case 4: 
    case 5:
        station= ("autumn")
        break
    case 6:
    case 7:
    case 8:
        station= ("winter")
        break
    case 9:
    case 10: 
    case 11:
        station= ("spring")
        break;
        default:
    station = "ingresa un mes valido (del 1 al 12)";
} 

console.log (station) 

// 7. muestra el numero de dias que tiene un mes dependiendo de la variable del ejecicio anterior Switch

month = 8
let days= "";
switch (month) {
    // grupo de 31 dias
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
    days = "el mes tiene 31 dias"
    break;

    //grupo de 30 dias
    case 4:
    case 6:
    case 9:
    case 11:
        days = "el mes tiene 30 dias"
        break

    // caso especial de febrero
    case 2: 
    days = "el mes tiene 28 o 29 dias"
    break;
    default:
    days = "mes no valido"; 
}
    
console.log (days)

// 8. usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "fr"
let saludo = "";

switch (idioma){
    case "es":
        saludo = "Hola!"
        break
    case "en":
        saludo = "Hello!" 
        break
    case "fr":
        saludo = "Bonjour!" 
        break
    case "pf":
        saludo = "Ola!"
        break
    case "it":
        saludo = "Ciao!" 
        break
    default: 
    saludo = "idioma no reconocido"; 
}

console.log (saludo)

// 9. usa un switch para hacer de nuevo el ejercicio 6 

month = 2
station = ""; 
switch (month) {
    case 12:
    case 1: 
    case 2:
        station =("summer")
        break
    case 3:
    case 4: 
    case 5:
        station= ("autumn")
        break
    case 6:
    case 7:
    case 8:
        station= ("winter")
        break
    case 9:
    case 10: 
    case 11:
        station= ("spring")
        break;
        default:
    station="estacion del mes del 1 al 12" 
} 

console.log (station);

// 10. usa un switch para hacer de nuevo el ejercicio 7

month = 5 
let weeks = ""; //variable para guardar las semanas
switch (month) { 
//grupo de 31 dias (4 semanas y 3 dias) 
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        weeks = "el mes tiene 4 semanas y 3 dias"
        break
   //grupo de 30 dias (4 semanas y 3 dias"
    case 4:
    case 6:
    case 9:
    case 11:
        weeks = "el mes tiene 4 semanas y 2 dias"
        break
    // caso de febrero (28 o 29 dias)
    case 2:
        weeks = "el mes tiene 4 semanas exactas (o 4 semanas y 1 dia si es año bisiesto" 
        break
        default:
        weeks = "mes no valido" 

}
    
console.log (weeks)

// Ya voy entediendo el merequetengue!!! 