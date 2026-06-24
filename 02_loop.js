for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// Even Number
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

//Odd Number
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}
for (let i = 1; i <= 5; i++) {
  // console.log(i);
  for (let j = 1; j <= 10; j++) {
    // console.log(i + "*" + j + "*" + i * j);
  }
}

// Break and Continue

for (let index = 1; index <= 30; index++) {
  if (index == 10) {
    console.log(`Detected 10`);
    break;
  }
  console.log(`value of i is ${index}`);
}
for (let index = 1; index <= 30; index++) {
  if (index == 10) {
    console.log(`Detected 10`);
    continue;
  }
  console.log(`value of i is ${index}`);
}
