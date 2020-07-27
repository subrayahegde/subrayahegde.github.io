/*
const helloWorld = () => {
    console.log("Hello! We are all set!");
	console.log("Arrow functions are working");
};
helloWorld();

let intX = 12;
let strY = "Hello World";
console.log ("intX = " + intX);
console.log ("strY = " + strY);


let myMap = new Map([
	[ 1, 'apple' ],
	[ 2, 'banana' ],
	[ 3, 'orange' ]
]);

for (let [key, value] of myMap) {
    console.log(key + " = " + value);
}

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}
*/

//Map, Reduce and Filter

let data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

//to find sum all of the dogs ages in dog years.
//1.Select only the dogs
//2.Translate their ages into dog years (multiply them by seven)
//3.Sum the results

let ageSum = data
    .filter((animal) => { return animal.type === 'dog'; }).map((animal) => { return animal.age * 7 }).reduce((sum, animal) => {
    return sum + animal;
});

console.log("totalsum=" + ageSum);



let isDog = (animal) => {
    return animal.type === 'dog';
}

let dogYears = (animal) => {
    return animal.age * 7;
}

let sum = (sum, animal) => {
    return sum + animal;
};

let ages = data
  .filter(isDog)
  .map(dogYears)
  .reduce(sum);
  
console.log("total=" + ages);

//1. Foreach
var sample = ["Red", "Green", "Blue"];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => console.log(`${elem} comes at ${index}`));
/*
output
1 comes at 0
2 comes at 1
3 comes at 2
*/

//2. Filter
var sample1 = ["Red", "Green", "Blue"];
// es5
var result = sample1.filter(function(elem){
    return elem !== "Green";
})
console.log(result);
// es6
var result1 = sample1.filter(elem => elem !== "Green")
console.log(result1);
/* output */

//3. Map
var sample2 = [1, 2, 3] // i am never gonna change Boo! Yeah
// es5
var mapped = sample2.map(function(elem) {
    return elem * 10;
})
console.log(mapped);
// es6
let mapped1 = sample2.map(elem => elem * 10)
console.log(mapped1);


//4. Reduce
var sample3 = [3, 4, 5] // here we meet again
// es5
var sumtotal = sample3.reduce(function(sum1, elem){
    return sum1 + elem;
})
console.log(sumtotal);
// es6
var sumtotal1 = sample3.reduce((sum1, elem) => sum1 + elem)
console.log(sumtotal1);


//map
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 
//es6
var celcius1 = fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

console.log(celcius);//  [-18, 0, 7, 10, 24, 27, 37, 49]
console.log(celcius1);


var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
//eS5
var sum5 = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);

// ES6
var sum6 = rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 
console.log(sum5);
console.log(sum6);


//MAP 
var employees = [
   { name: 'hegdes', salary: 1200, bonus: 120 },
   { name: 'bhat', salary: 3300, bonus: 720 },
   { name: 'shastri', salary: 5400, bonus: 80 },
   { name: 'shetty', salary: 1700, bonus: 130 },
];

//Suppose we have to traverse each employee in the array and add the Bonus to their salary. 
//So if we are going to achieve this via traditional way, then the below image will show you the traditional way.
var employee_new = [];
for (var i=0; i<employees.length; i++) {
	employees[i].salary =   employees[i].salary + employees[i].bonus;
	employee_new.push(employees[i]);
}

console.log(employee_new);

//Now, here we can use the map function to make this code more readable format. See, the map function is used as below:
var employee_new1 = employees.map (function (item) {
    item.salary = item.salary + item.bonus;
	return item;
});
console.log(employee_new1);
//So in a nutshell, a map function is used when we want to change each element of the array into another set of values.


//Now, suppose if we want only those employee collections whose salary is more than 3000, 
//then to achieve this, we will use the following traditional way:

var employees1 = [
   { name: 'hegdes', salary: 1200, bonus: 120 },
   { name: 'bhat', salary: 3300, bonus: 720 },
   { name: 'shastri', salary: 5400, bonus: 80 },
   { name: 'shetty', salary: 1700, bonus: 130 },
];

var empsalaryPaid = 0;
for (var i=0; i<employees1.length; i++) {
	if (employees1[i].salary > 3000) {
	   empsalaryPaid += employees1[i].salary;
    }
}
console.log("empsalaryPaid=" + empsalaryPaid);

//Now, here we can use the filter function to make this code more readable. See the filter function as below:

var employee_filter = employees1.filter (function (item) {
	if (item.salary > 3000) {
        return item;
    }		
});
console.log(employee_filter);
//So in a nutshell, filter function is used when we want to filter unwanted objects from an array collection.

//Now, suppose you want to sum all the salary amount of employee then in such a situation, you will write the following code:
//similar to the above case as mentioned in the Filter 

//Now here, we can use reduce function to make this code more readable. The same code above can be written using reduce.
var sumFinal = employees1.reduce (function (prevVal, elem) {
	return parseInt (prevVal) + elem.salary;	
}, 0);
console.log("sumFinal=" + sumFinal);

//So in a nutshell, reduce function is used when we want a cumulative value of array.

