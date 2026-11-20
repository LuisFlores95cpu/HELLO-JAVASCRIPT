//operadores   

//operadores aritméticos

var a = 5;
var b = 3;
console.log(a + b); //suma
console.log(a - b); //resta
console.log(a * b); //multiplicación
console.log(a / b); //división

console.log(a % b); //módulo
console.log(a ** b); //exponenciación

console.log(a++); //incremento
console.log(a--); //decremento 

console.log(++b); //incremento
console.log(--b); //decremento

//operadores de asignación

let myvariable = 2
myvariable += 2
console.log(myvariable) // 4
myvariable -= 1
console.log(myvariable) // 3   
myvariable *= 3
console.log(myvariable) // 9
myvariable /= 3
console.log(myvariable) // 3

//operadores de comparación

console.log(a == b); //igualdad
console.log(a != b); //desigualdad
console.log(a > b); //mayor que
console.log(a < b); //menor que
console.log(a >= b); //mayor o igual que
console.log(a <= b); //menor o igual que
console.log(a == 6); //igualdad por valor 
console.log(a === 5); //igualdad por valor y tipo de dato
console.log(a === a); //igualdad por valor y tipo de dato
console.log(a !== 5); //desigualdad por valor
console.log(a !== 6); //desigualdad por valor
console.log (undefined == null); //igualdad por valor
console.log (undefined === null); //igualdad por valor y tipo de dato

// truthy values (Valores verdaderos)

// Todos los numeros positivos y negativos, excepto el 0

// Todas las cadenasd e texto menos las vacias

// Todos los valores booleanos que sean true

// Falsy values (Valores falsos)

// El numero 0
// La cadena de texto vacia
// El valor booleano false
// El valor null
// El valor undefined
// El valor NaN (Not a Number)


// Operadores lógicos

// AND (&&)
console.log(true && true);
console.log (5 < 3 && 3 < 5);
console.log (5 > 3 && 3 < 5);
console.log (5 > 3 && 3 > 5);

// OR (||)
console.log(true || true);
console.log (5 < 3 || 3 < 5);
console.log (5 > 3 || 3 < 5);
console.log (5 > 3 || 3 > 5);

console.log (5 > 3 && 3 > 5 || 5 > 3 && 3 < 5);

// NOT (!)
console.log(!true);
console.log(!false);
console.log (! (5 > 3 || 3 > 5));
console.log (! (5 > 3 && 3 > 5 || 5 > 3 && 3 < 5));

// Operadores Ternarios

const isRaining = true;

isRaining ? console.log("esta lloviendo") : console.log("no esta lloviendo");
