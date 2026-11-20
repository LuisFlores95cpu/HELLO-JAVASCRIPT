//tipos de datos primitivos en javascript

// String (cadena de texto)
let nombre = "luis flores";
let alias = "perzival";
let email = "luis@gmail.com";

// Number (numero)
let age = 31; // Integer (entero)
let height = 1.75; // Float (decimal)

// Boolean (booleano)
let isAlive = true; // true or false
let isDead = false; 

// Undefined (indefinido)
let address; // variable declarada pero no inicializada
console.log(address);

// Null (nulo)
let nullvalue = null; // variable con valor nulo 

// Symbol (simbolo)
let symbol1 = Symbol("symbol1");

// BigInt (entero grande)
let bigIntValue = 1234567890123456789012345678901234567890n; // n al final indica que es un BigInt

//Mostramos los tipos de datos en consola
console.log(typeof nombre);
console.log(typeof age);
console.log(typeof isAlive);
console.log(typeof address);
console.log(typeof nullvalue);
console.log(typeof symbol1);
console.log(typeof bigIntValue);