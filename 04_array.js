// Array

const myArr = [0, 1, 2, 3, 4, 5, 6];
const Heros = ["Shamshad", "Qayyum"];

const myArr2 = new Array(1, 2, 3, 4, 5);
//console.log(myArr);

// Array method

// push sa last mai number add hota han array mai.
// pop sa array mai sa last wala number remove hota han.

myArr.push(7);

myArr.pop();

myArr.unshift(8);
myArr.shift();

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(5));

// console.log(myArr);
// const newArr = myArr.join();
// console.log(newArr);

// slice Or splice

// slice => Array ka kuch hissa copy karta hai aur original array ko change nahi karta.
// splice => Array me se elements delete, add, ya replace karta hai aur original array ko change kar deta hai.

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 4);
// console.log(myn1);

// console.log("B ", myArr);

const myn2 = myArr.splice(1, 4);
// console.log("C ", myArr);
// console.log(myn2);

const myArrHeros = ["shamshad", "kareem", "Qayyum"];
const myHeros = ["siddique", "tufail", "tofique"];

// myArrHeros.push(myHeros);
// console.log(myArrHeros);

const allHero = myArrHeros.concat(myHeros);
// console.log(allHero);

const newHeros = [...myArrHeros, ...myHeros];
// console.log(newHeros);

const othe_Arr = [1, 2, 3, [4, 5], 6, [7, 8, 9]];
const othe_Arr_new = othe_Arr.flat(Infinity);
// console.log(othe_Arr_new);

console.log(Array.isArray("kareem"));
console.log(Array.from("kareem"));
console.log(Array.from({ name: "kareem" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
