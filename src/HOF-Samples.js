/*
//Example 1
function printNumbersBy(checker) {
    return function(num) {
        for (let i = 1; i <= num; i++) {
            if (checker(i)) {
                console.log(i);
            }
        }
    };
}
function isEven(value) {
    if (value % 2 === 0) {
        return true
    }
    return false
}
printNumbersBy(isEven)(10); // 2 4 6 8 10

//Example 2
function unless(test, then) {
    if (!test) then();
}
function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even"); 
    });
});  // 0 is even, 2 is even

//Example 3
var arr = [1,2,3,4,5];
var value = 2;
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + value
}
console.log(arr) //[ 3, 4, 5, 6, 7 ]
var arr = [1,2,3,4,5];
console.log(arr.map(function(n) {return n + 2})); //[ 3, 4, 5, 6, 7 ]

//Example 4
var arr = [1,2,3,4,5];
var final = arr.map(function(n) {return n + 2}) // [ 3, 4, 5, 6, 7 ]
    .filter(function(n) {return n % 2 === 0}) // [4, 6]
    .reduce(function(a, b) {return a * b}) // 24
console.log(final); //24


//Example 5
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); //0, 1, 2


//Example 6
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); //true


//Example 7
function unless(test, then) {
  if (!test) then();
}
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});// → 0 is even, → 2 is even

//Example 8
["A", "B"].forEach(l => console.log(l)); // → A, → B
*/

//Example 9
const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};
console.log (censor(['soup', 'gasp', 'shout', 'sun']));
// [ 'shout', 'sun' ]

const startsWithS = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWith('s')) filtered.push(word);
  }
  return filtered;
};
console.log (startsWithS(['soup', 'gasp', 'shout', 'sun']));
// [ 'shout', 'sun' ]

//Example 10
const myFun = (words, option) => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    switch(option) {
                  case 1: if (word.length !== 4) filtered.push(word); break;
                  case 2: if (word.startsWith('s')) filtered.push(word); break;
                }
  }
  return filtered;
};
const arr = ['soup', 'gasp', 'shout', 'sun'];
console.log (myFun(arr, 1));
console.log (myFun(arr, 2));