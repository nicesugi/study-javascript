'use strict';
// 📌 Note! 📌
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes


console.log('💛💚💙💚💛 🔽 let 🔽 💛💚💙💚💛');
// Variable, rw(read/write)
// added in ES6
// mutable data type
let name = 'sugi';
console.log(name);
name = 'hello';
console.log('재할당이 가능', name);

let globalScope = 'global scope';
{
  let variable = 'sugi';
  console.log(variable);
  variable = 'hello';
  console.log(variable)
  console.log('블럭 안에서도 호출 가능', globalScope);
}
// console.log('undefined -> global scope 사용', variable); 
console.log('블럭 밖에서도 호출 가능', globalScope);



console.log('💛💚💙💚💛 🔽 var 🔽 💛💚💙💚💛');
// 구버전, 비추
// hoisting 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려줌
// block scope 이 없음
// 마구자비로 선언을 하고 할당을 해도, 심지어 먼저 콘솔을 찍더라도 나옴
console.log('undefined', undefined);
{
  age = 4;
  var age;
}
console.log(age);
var undefined;
undefined = '테스트';
console.log(undefined);



console.log('💛💚💙💚💛 🔽 const 🔽 💛💚💙💚💛');
// Constant, r(read only)
// 선언함과 동시에 할당한 뒤로는 절대 다시는 값을 변경할 수 없음
// 어플리케이션 실행되면 프로세스가 할당되고 다양한 스레드들이 동시에 변수에 접근해 값을 바꿀수있음
// 이는 위험하기에 가능하면 값을 변경해야할 좋은 이유가 없다면 const 사용권장
const daysInWeek = 7;
const maxNumber = 5;



// 📌 Note! 📌
// Variable types 세 가지 중
// primitive, single item 에는
// number, string, boolean, null, undefined, symbol(added in ES6) 이 있음.

console.log('💛💚💙💚💛 🔽 number 🔽 💛💚💙💚💛');
// 🤍 number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 🤍 number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log('숫자가 아닌 값을 숫자로 나누게 될 때', nAn);



console.log('💛💚💙💚💛 🔽 bigInt 🔽 💛💚💙💚💛');
// 🤍 bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);



console.log('💛💚💙💚💛 🔽 string 🔽 💛💚💙💚💛');
// 🤍 string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`문자열+변수  >>    value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`template literals 사용 >>    value: ${helloBob}, type: ${typeof helloBob}`);
console.log('template literals 미사용 >>  '+'value: ' + helloBob + ' type: ' + typeof helloBob);



console.log('💛💚💙💚💛 🔽 boolean 🔽 💛💚💙💚💛');
// 🤍 boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);



console.log('💛💚💙💚💛 🔽 null & undefined 🔽 💛💚💙💚💛');
// 🤍 null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// 🤍 undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);



console.log('💛💚💙💚💛 🔽 symbol 🔽 💛💚💙💚💛');
// 🤍 symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);



console.log('💛💚💙💚💛 🔽 Dynamic typing 🔽 💛💚💙💚💛');
// 🤍 Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log('중간에 타입을 바꿔버리면 런타임에러가 발생함-> TS', text.charAt(0));
