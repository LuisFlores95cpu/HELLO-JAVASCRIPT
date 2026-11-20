// if, else if, else 
 
// if (si)

let age = 31

if (age == 31){
    console.log ("la edad es 31") 
} 

// else (si no)

if (age != 31) {
    console.log ("la edad es 31")
} else {
console.log ("la edad no es 31")
}

// else if (sino, si)

if (age != 31) {
    console.log ("la edad es 31")
} else if (age < 18) {
    console.log ("es menor de edad") 
} else {
console.log ("la edad no es 31 ni es menor de edad")
}

// Operadores Ternarios

const message = 31 ? "la edad es 31" : "la edad no es 31"
console.log (message)

// switch 

let day = 3
let dayName 

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2: 
        dayName= "miercoles"
        break
    case 3: 
        dayName= "jueves"
        break
    case 4: 
        dayName= "Viernes"
        break
    case 5:
        dayName= "Sabado"
        break
    case 6:
        dayName= "Domingo"
        break
        default:
            dayName = "Numero de dia incorrecto"
}

console.log (dayName)
