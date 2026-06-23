function name() {
  console.log(50 * 2);
}
name(50, 2);

function one() {
  const username = "kareem";
  function two() {
    const website = "facebook";
    console.log(username);
  }
  console.log(website);
  two();
}
one();

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
user.wellcomeMassage();
user.username = "Shamshad";
user.wellcomeMassage();
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

function addTwoNumder(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumder(10, 5);
