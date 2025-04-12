"use strict";

//   true or false

//  #1
if ("0") {
  alert("hello");
}

// yes it will alert

//  #2
if (prompt("what is official name of js") === "ECMAScript") {
  alert("correct!");
} else {
  alert("you dont know? ECMAScript!");
}

//  #3
let score = prompt("what is your score");
let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "c"
    : score >= 60
    ? "D"
    : "F";
console.log(grade);

//  #4
let num = prompt("enter a number");
if (num > 0) alert("1");
else if (num < 0) alert("-1");
else alert("0");

//  #5
let result;
let a = prompt("enter a");
let b = prompt("enter b");
result = Number(a) + Number(b) < 4 ? "Not enough" : "A lot";
console.log(result);

//  #6
let message;
let login = prompt("what are you Employee/Director");
message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Hello"
    : login == ""
    ? "No login"
    : "";
console.log(message);

//  #7
console.log(false || "sdf"); //'sdf'
console.log(false && ""); //false
console.log(true || ""); //true
console.log(true && ""); // ''
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); //undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1

// loops
//  #1
let x = 1;
let sum = 0;
while (x <= 100) sum += x++;
console.log(sum);

//  #2
let z;
do {
  z = prompt("enter a number");
} while (isNaN(z) || z <= 0);
console.log(z);

//  #3
for (let i = 1; i <= 10; i++) {
  console.log("7 x " + i + " = " + 7 * i);
}

//  #4
let random = Math.round(Math.random() * (10 - 1) + 1);
while (true) {
  let guess = Number(prompt("guess the random number from 1 to 10"));
  if (random === guess) break;
  else alert("wrong try again");
}
alert("correct!");

//  #5
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}

//  #6
let i = 3;
while (i) {
  alert(i--);
} //exit when i=0 becouse only when we have 0 it returns false

//  #7
let j = 0;
while (++j < 5) console.log(j);
//we increase then use so we get : 1,2,3,4

let w = 0;
while (w++ < 5) console.log(w);
//we use then increase so we get : 1,2,3,4,5

//  #8
for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);
// yes we will get the same value

//  #9
for (let i = 2; i <= 10; i++) if (i % 2 === 0) console.log(i);

//  #10
let c = 0;
while (c < 3) alert(`number ${c++}!`);
