// 1. Escribe un comentario en una linea 
console.log("helloworld");

// 2. Escribe un comentario en varias lineas

/*
mi primera vez
creando un comentario
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los tipos de datos primitivos en JavaScript (String, Number, Boolean, Undefined, Null, Symbol, BigInt) y muestra sus valores en consola.

var myString = "luis";
var myNumber = 31;
var myBoolean = true;
var myUndefined;
var myNull = null;
var mySymbol = Symbol("mySymbol");
var myBigInt = 12345678901290n;
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 4. Imprime por consola el tipo de todas las variables declaradas en el punto anterior.

// HECHO (dedo arriba)

// 5. Imprime por consola el tipo de datos de las variables declaradas en el punto 3. (utiliza typeof)

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. a continuacion, modifica los valores de las variables por otros del mismo tipo de dato y muestra sus valores en consola.

var myString = "yeli";
var myNumber = 32;
var myBoolean = true;
var myUndefined;
var myNull = null;
var mySymbol = Symbol("mySymbol");
var myBigInt = 12468413438384314138n;
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo de dato y muestra sus valores en consola.

var destringABoolean = true;
var deBooleanAString = "luis";
var deNumberAString = "31";
console.log(destringABoolean);
console.log(deBooleanAString);
console.log(deNumberAString);

// 8. Declara constantes con valores sociados a todos los tipos de datos primitivos (String, Number, Boolean, Undefined, Null, Symbol, BigInt) y muestra sus valores en consola.

const myConstString = "luis";
const myConstNumber = 31;
const myConstBoolean = true;
const myConstUndefined = undefined;
const myConstNull = null;
const myConstSymbol = Symbol("myConstSymbol");
const myConstBigInt = 12345678901290n;

console.log(myConstString);
console.log(myConstNumber);
console.log(myConstBoolean);
console.log(myConstUndefined);
console.log(myConstNull);
console.log(myConstSymbol);
console.log(myConstBigInt);

// 9. Modifica los valores de las constantes

//const myConstString = "yeli";
//const myConstNumber = 32;
//const myConstBoolean = false;
//const myConstUndefined = undefined;
//const myConstNull = null;
//const myConstSymbol = Symbol("myConstSymbol");
//const myConstBigInt = 12468413438384314138n;
//console.log(myConstString);
//console.log(myConstNumber);
//console.log(myConstBoolean);    

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutar el codigo.  

// De la linea 90 a la 96, ya que las constantes no pueden ser reasignadas.