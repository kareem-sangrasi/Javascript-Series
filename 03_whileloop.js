// while loop => mai pala condication chake ho ghi.
// Or Do while => mai pala kaam ho gha fir condication chake ho ghi.

let index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 4;
}

let array = ["Shamshad", "Kareem", "Qayyum"];

let arr = 0;
while (arr < array.length) {
  console.log(`value is ${array[arr]}`);
  arr = arr + 1;
}

let scor = 1;
do {
  console.log(`score is ${scor}`);
  scor++;
} while (scor <= 10);
