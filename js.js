"use strict";

//   true or false

//  #1
if("0"){
      alert("hello")};
      
// yes it will alert 

//  #2
if(prompt("what is official name of js")==="ECMAScript"){
      alert("correct!");
}
else{
      alert("you dont know? ECMAScript!");
}

//  #3
let score = prompt('what is your score');
let grade =score >= 90? "A":
           score >= 80? "B":
           score >= 70? "c":
           score >= 60? "D": "F";
console.log(grade);

//  #4
let num = prompt("enter a number");
if(num>0)
      alert("1");
else
      if(num<0)
            alert("-1");
      else
      alert("0");

//  #5
let result;
let a= prompt('enter a');
let b= prompt('enter b');
result = a+b < 4? "Not enough" : "A lot";
console.log(result)

//  #6
let message;
let login = prompt("what are you Employee/Director");
message = login=='Employee'? 'Hello':
          login=='Director'? 'Hello':
          login==''? 'No login': '' ;
console.log(message);

//  #7
console.log( false || 'sdf'); //'sdf'
console.log(false && ''); //false
console.log(true || '');  //true
console.log(true && ''); // ''
console.log(undefined || null); // null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); //undefined
console.log(1 || 0); // 1
console.log(null || 1); // 1
console.log(null || 0 || 1); // 1
