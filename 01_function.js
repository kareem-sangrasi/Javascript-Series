function name() {
  console.log(50 * 2);
}
// name(50, 2);

function one() {
  const username = "kareem";
  function two() {
    const website = "facebook";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "Abdulkareem";
  if (username === "Abdulkareem") {
    const website = " Taj-Group";
    // console.log(username + website);
  }
}
// console.log(addone(6));
function addone(num) {
  return num + 1;
}

const addtwo = function (num) {
  return num + 2;
};
// console.log(addtwo(8));

const user = {
  username: "Kareem",
  price: 999,

  wellcomeMassage: function () {
    console.log(`${this.username}, wellcome to website`);
    // console.log(this);
  },
};
// user.wellcomeMassage();
// user.username = "Shamshad";
// user.wellcomeMassage();
// console.log(this);

function sayMyname() {
  console.log("k");
  console.log("a");
  console.log("r");
  console.log("e");
  console.log("e");
  console.log("m");
}
// sayMyname();

// function addTwoNumder(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumder(number1, number2) {
  let result = number1 + number2;
  return result;
}
const result = addTwoNumder(3, 5);

// console.log("Result: ", result);

function loginUseRMassagr(username) {
  if (username === undefined) {
    console.log("please enter a username");
  }
  return `${username} just logged in`;
}
// console.log(loginUseRMassagr("kareem"));
// console.log(loginUseRMassagr("abdul_kareem"));

function rev(num) {
  let str = String(num);
  let rev_str = " ";
  for (let i = str.length; i >= 0; i--) {
    rev_str += str[i];
  }
  // console.log(rev_str);
}
// rev(7149089);

// family functions

function one(username) {
  console.log(username);
}
one("Shamahad");

let Name = "kareem";
let fname = "shamshad";
let cast = "sangrasi";
let from = "sanghar";

console.log(Name);
console.log(fname);
console.log(cast);
console.log(from);

console.log("Kareem");
console.log("Shamshad");
console.log("sangrasi");
console.log("sanghar");

function para() {
  const paraghap =
    "My name is kareem ,my father name is shamshad, I live in karachii";
  console.log(paraghap);
}
para();
