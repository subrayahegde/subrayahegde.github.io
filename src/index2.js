
const iceCreams = [
  { flavor: 'pineapple', color: 'white' },
  { flavor: 'strawberry', color: 'yellow' },
  { flavor: 'watermelon', color: 'green' },
  { flavor: 'kiwi', color: 'green' },
  { flavor: 'mango', color: 'red' },
  { flavor: 'pear', color: 'green' }
];


const favoriteFlavors = iceCreams
    .filter(iceCream => iceCream.color === 'red');
console.log(favoriteFlavors);

//old style
let flavors = [];
for (let i = 0; i < iceCreams.length; i++) {
    flavors.push(iceCreams[i].flavor)
}
console.log(flavors);

//es6
const flavors1 = iceCreams.map(icecream => icecream.flavor)
console.log(flavors1);

const arr = [10,20,30]
let total = 0;
for(let i = 0; i < arr.length; i++) {
    total += arr[i]
}
console.log(total);

const reducerFunction = (acc, currentItem) => acc + currentItem;
const sum = arr.reduce(reducerFunction, 0);
console.log(sum);

//map with reduce()

const data = [10, 20, 30];
const tripledWithMap = data.map(item => {
  return item * 3;
});

const tripledWithReduce = data.reduce((acc, value) => {
  acc.push(value * 3);
  return acc;
}, []);
console.log(tripledWithMap, tripledWithReduce);


//filter with reduce()
const data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenWithFilter = data2.filter(item => {
  return item % 2 === 0;
})
const evenWithReduce = data2.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value);
  }
return acc;
}, []);
console.log(evenWithFilter, evenWithReduce);


//A more practical reduce() example
const flavours = [
  "strawberry",
  "strawberry",
  "kiwi",
  "kiwi",
  "kiwi",
  "strawberry",
  "mango",
  "kiwi",
  "banana"
];
const votes = {};
const reducer = (votes, vote) => {
  votes[vote] = !votes[vote] ? (votes[vote] = 1) : votes[vote] + 1;
return votes;
};
const outcome = flavours.reduce(reducer, votes);
// Output
console.log("Strawberry: ", outcome.strawberry);
console.log("Kiwi: ", outcome.kiwi);
console.log("Mango: ", outcome.mango);
console.log("Banana: ", outcome.banana);


const letterArr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
const flattened = letterArr.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log(flattened);
