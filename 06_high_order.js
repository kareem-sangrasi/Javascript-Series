//for-of-loop
// for...of loop ka use Array, String, ya kisi bhi iterable object ke har element ko ek ek karke access karne ke liye hota hai.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  //   console.log(val);
}

const greeting = "Hellow Wrold";
for (const greet of greeting) {
  //   console.log(`Each char is ${greet}`);
}

// Maps
// Map ek aisi cheez hai jisme hum Key aur Value ki form mein data store karte hain.

const map = new Map();
map.set("PK", "Pakistan");
map.set("USA", "United States of America");
map.set("Fr", "France");
//console.log(map);

const val = new Map();
val.set("SA", "Shamshad Ali");
val.set("AB", "Abdulkareem");
val.set("AQ", "AbdulQayyum");
val.set("S", "Sangrasi");

//console.log(val);

// for-in-loop
// Yaar, for...in loop JavaScript mein object ki properties (keys) ko iterate (ek ek karke access) karne ke liye use hota hai.

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
};
for (const key in myObject) {
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(programming[key]);
}
// let even_array = [];
// let odd_array = [];

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 == 0) {
//     even_array.push(i);
//   } else {
//     odd_array.push(i);
//   }
// }

// console.log("Even Array is ", even_array);
// console.log("Odd Array is ", odd_array);

// let even_arr = [];
// let odd_arr = [];

// for (let i = 2; i <= 30; i++) {
//   if (i % 2 === 0) {
//     even_arr.push(i);
//   } else {
//     odd_arr.push(i);
//   }
// }
// console.log("Even Arr is ", even_arr);
// console.log("Odd Arr is ", odd_arr);
