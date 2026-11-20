// 1. Crea una variable para cada operacion aritmetica (suma, resta, multiplicacion, division) y asignale el resultado de la operacion entre dos numeros. Luego imprime cada variable en la consola.

let a = 5;
let b = 3;
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

// 2. Crea una variable para cada tipo de asignacion (asignacion simple, asignacion compuesta, asignacion de incremento y asignacion de decremento) y asignale un valor inicial
// de las variables  utilizadas para las operaciones aritmeticas. 

let myvariable = 5;
myvariable += 2; // asignacion compuesta
console.log(myvariable);
myvariable -= 1; // asignacion compuesta
console.log(myvariable);
myvariable *= 3; // asignacion compuesta
console.log(myvariable);
myvariable /= 3;
myvariable++; // asignacion de incremento
console.log(myvariable);
myvariable--; // asignacion de decremento
console.log(myvariable);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion (==, ===, !=, !==, >, <, >=, <=) y 5 comparaciones falsas con los mismos operadores.

console.log (a == b); // false
console.log (a === b); // false
console.log (a != b); // true
console.log (a !== b); // true
console.log (a > b); // true
console.log (a < b); // false
console.log (a >= b); // true
console.log (a <= b); // false


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion (==, ===, !=, !==, >, <, >=, <=) y 5 comparaciones verdaderas con los mismos operadores.

console.log (a == 6); // false
console.log (a === 6); // false
console.log (a != 5); // false
console.log (a !== 5); // false
console.log (a > 6); // false
console.log (a >= 6); // false


// 5. Utiliza el operador logico AND (&&)

console.log(a > 0 && b > 0); // true


// 6. Utiliza el operador logico OR (||)

console.log(a > 0 || b > 0); // true

// 7. Combina ambos operadores logicos

console.log((a > 0 && b > 0) || (a < 0 || b < 0)); // true

// 8. Añade alguna negacion

console.log(!(a < 0) && !(b < 0)); // true
console.log(!(a > 0) || !(b > 0)); // false

// 9. Utiliza el operador ternario para asignar un valor a una variable dependiendo de una condicion.

const isRaining = true
isRaining ? console.log ("Esta lloviendo") : console.log ("No esta lloviendo")

// 10. Combina operadores aritmeticos, de comparacion y logicos.   

console.log (suma = a + b);
console.log (a == 6); // false 
console.log((10 > 3 && 3 > 10) || (10 < 3 || 3 < 10));
