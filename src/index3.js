var bdays = ['08-14', '10-04', '04-21']; 

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array 
var bdays2 = bdays.map(function(elem) { 
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21']

var arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
var rounded = arr.map(Math.ceil);

console.log(rounded); // => [2, 3, 6, 13]

var nums = [1, 2, 3, 4];

var sum = nums.reduce(function(prevVal, curVal, curIndex, origArr) {
  return prevVal + curVal;
});

console.log(sum); // => 10


var nums = [-4, 3, 2, -21, 1];

var pos = nums.filter(function(el) {
  return el > 0;
});

console.log(pos); // => [3, 2, 1]



var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

// dataMod will now contain only the first two objects in the data array
var dataMod = data.filter(function(el) {
  if (el.name != undefined && el.age != undefined) {  
    return true;
  }
  else { 
    return false; 
  }
});
console.log(dataMod);

var peopleArray =  
[
    {
        "age": 33,
        "hobby": "games"
    },
    {
        "age": 28,
        "hobby": "chess"
    },
    {
        "age": 21,
        "hobby": "ninjitsu"
    },
    {
        "age": 21,
        "hobby": "games"
    },
    {
        "age": 21,
        "hobby": "kick the can"
    }
];

const accumulatedTotals = {}

for ( let i = 0; i < peopleArray.length; i++ ) {
	const p = peopleArray[i]
	accumulatedTotals[ p.hobby ] = (accumulatedTotals[ p.hobby ] || 0) + 1
}

console.log(accumulatedTotals);



