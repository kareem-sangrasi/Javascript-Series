// Object literals

//  Object aik aisa box hota hai jis mai kisi person, product ya kisi bhi cheez ki properties aur unki values store hoti hain.

const mySym = Symbol("key1");

const User = {
  name: "kareem",
  full_name: "Abdulkareem Sangrasi",
  [mySym]: "myKey1",
  age: "17",
  lucation: "Karachi",
  email: "kareem@gmail.com",
  isLoggedIn: "false",
};
//console.log(User.name);
// console.log(User["name"]);
// console.log(User["full_name"]);
// console.log(User[mySym]);

User.email = "abdulkareem@chatgpt.com";
// Object.freeze(User);
User.email = "abdulkareem@microsoft.com";
// console.log(User);

User.greeting = function () {
  console.log("Hellow Js User");
};

User.greetingtwo = function () {
  console.log(`Hellow Js User ${this.name}`);
};
// console.log(User.greeting());
// console.log(User.greetingtwo());

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "kem";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regulerUser = {
  email: "kem@gmail.com",
  fullname: {
    userfullname: {
      firstname: "kareem",
      lastname: "sangrasi",
    },
  },
};
console.log(regulerUser.fullname.userfullname.firstname);
