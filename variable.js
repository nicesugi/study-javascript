'use strict';
// π Note! π
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


console.log('πππππ π½ let π½ πππππ');
// Variable, rw(read/write)
// added in ES6
// mutable data type
let name = 'sugi';
console.log(name);
name = 'hello';
console.log('μ¬ν λΉμ΄ κ°λ₯', name);

let globalScope = 'global scope';
{
  let variable = 'sugi';
  console.log(variable);
  variable = 'hello';
  console.log(variable)
  console.log('λΈλ­ μμμλ νΈμΆ κ°λ₯', globalScope);
}
// console.log('undefined -> global scope μ¬μ©', variable); 
console.log('λΈλ­ λ°μμλ νΈμΆ κ°λ₯', globalScope);



console.log('πππππ π½ var π½ πππππ');
// κ΅¬λ²μ , λΉμΆ
// hoisting μ΄λμ μ μΈνλμ§ μκ΄μμ΄ ν­μ μ μΌ μλ‘ μ μΈμ λμ΄μ¬λ €μ€
// block scope μ΄ μμ
// λ§κ΅¬μλΉλ‘ μ μΈμ νκ³  ν λΉμ ν΄λ, μ¬μ§μ΄ λ¨Όμ  μ½μμ μ°λλΌλ λμ΄
console.log('undefined', undefined);
{
  age = 4;
  var age;
}
console.log(age);
var undefined;
undefined = 'νμ€νΈ';
console.log(undefined);



console.log('πππππ π½ const π½ πππππ');
// Constant, r(read only)
// μ μΈν¨κ³Ό λμμ ν λΉν λ€λ‘λ μ λ λ€μλ κ°μ λ³κ²½ν  μ μμ
// μ΄νλ¦¬μΌμ΄μ μ€νλλ©΄ νλ‘μΈμ€κ° ν λΉλκ³  λ€μν μ€λ λλ€μ΄ λμμ λ³μμ μ κ·Όν΄ κ°μ λ°κΏμμμ
// μ΄λ μννκΈ°μ κ°λ₯νλ©΄ κ°μ λ³κ²½ν΄μΌν  μ’μ μ΄μ κ° μλ€λ©΄ const μ¬μ©κΆμ₯
const daysInWeek = 7;
const maxNumber = 5;



// π Note! π
// Variable types μΈ κ°μ§ μ€
// primitive, single item μλ
// number, string, boolean, null, undefined, symbol(added in ES6) μ΄ μμ.

console.log('πππππ π½ number π½ πππππ');
// π€ number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// π€ number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log('μ«μκ° μλ κ°μ μ«μλ‘ λλκ² λ  λ', nAn);



console.log('πππππ π½ bigInt π½ πππππ');
// π€ bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);



console.log('πππππ π½ string π½ πππππ');
// π€ string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`λ¬Έμμ΄+λ³μ  >>    value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`template literals μ¬μ© >>    value: ${helloBob}, type: ${typeof helloBob}`);
console.log('template literals λ―Έμ¬μ© >>  '+'value: ' + helloBob + ' type: ' + typeof helloBob);



console.log('πππππ π½ boolean π½ πππππ');
// π€ boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);



console.log('πππππ π½ null & undefined π½ πππππ');
// π€ null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// π€ undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);



console.log('πππππ π½ symbol π½ πππππ');
// π€ symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);



console.log('πππππ π½ Dynamic typing π½ πππππ');
// π€ Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log('μ€κ°μ νμμ λ°κΏλ²λ¦¬λ©΄ λ°νμμλ¬κ° λ°μν¨-> TS', text.charAt(0));
