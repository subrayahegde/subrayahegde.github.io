//Map, Filter & Reduce Examples
let emp = [
   {'id': 100, 'name': 'James', 'age': 32, 'salary': 3300},
   {'id': 101, 'name': 'Smith', 'age': 12, 'salary': 1700},
   {'id': 102, 'name': 'Bob', 'age': 55, 'salary': 1400},
   {'id': 103, 'name': 'Bill', 'age': 24, 'salary': 2500},
];

console.log("Employees List: ");
console.log(emp);

//total salary paid
let total_sal = emp
        .reduce((x, y) => {return x + y.salary} ,0);
console.log("Total Salary: " + total_sal);

let emp_list_sal_above_2000 = emp
		.filter(emp => emp.salary > 2000);
console.log("Emp list - for salary > 2000: ")
console.log(emp_list_sal_above_2000);

let emp_names_sal_above_2000 = emp
		.filter(emp => emp.salary > 2000)
		.map ( x => x.name)
console.log("emp names with salary > 2000: ");	
console.log(emp_names_sal_above_2000);

let emp_sal_above_2000_totals = emp.map(x => x.salary)
		.filter(x => x > 2000)
		.reduce((x, y) => x + y);
console.log("Total of emp salaries who are having more than 2000 (Method 1): ");
console.log(emp_sal_above_2000_totals);

let emp_sal_above_2000_totals_new = emp
		.filter(x => x.salary > 2000)
		.reduce((x, y) => { return x + y.salary} ,0);
console.log("Total of emp salaries who are having more than 2000 (Method 2): ");
console.log(emp_sal_above_2000_totals_new);

let emp_sal_above_2000_and_age_above_30 = emp
		.filter(x => x.salary > 3000 && x.age > 30)  
console.log("emp list with salary > 2000 & age > 30: ");		
console.log(emp_sal_above_2000_and_age_above_30);

let emp_sal_above_2000_and_age_above_30_totals = emp
		.filter(x => x.salary > 3000 && x.age > 30)
		.reduce((x, y) => { return x + y.salary} ,0);
console.log("Total of salaries where emp sal > 2000 & age > 30 :");                                             
console.log(emp_sal_above_2000_and_age_above_30_totals);


//Map, Filter & Reduce together
let ipl = [1, 2, 3, 4];
let cpl = ipl.map(x => x * 2)
             .filter(x => x > 5)
             .reduce((x, y) => x + y);
console.log(cpl);
console.log(ipl);


//https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
//MAP, Filter, Reduce
var tasks = [
   {
     'name'     : 'Writing',
     'duration' : 120
   },
   {
     'name'     : 'Reading',
     'duration' : 60
   },
   {
     'name'     : 'Sleeping',
     'duration' : 240
   }
];

 //Map - Normal Practice
var task_names = [];
for (var i = 0, max = tasks.length; i < max; i += 1) {
     task_names.push(tasks[i].name);
}
console.log(task_names);

//Map - Using Javascript ForEach
var task_names1 = []; 
tasks.forEach(function (task) {
    task_names1.push(task.name);     
});
console.log(task_names1);

//MAP - Using Map
var task_names2 = tasks.map(function (task, index, array) { 
    return task.name; 
});
console.log(task_names2);

//MAP - Using ES6
var task_names_final = tasks.map((task) => task.name );
console.log(task_names_final);

//Map Implementation
/*
var map = function (array, callback) { 
    var new_array = []; 
    array.forEach(function (element, index, array) {
       new_array.push(callback(element)); 
    }); 
    return new_array;
};

var task_names = map(tasks, function (task) {
    return task.name;
});
*/

//Filter - ForEach
var difficult_tasks = [];

tasks.forEach(function (task) {
    if (task.duration >= 120) {
        difficult_tasks.push(task);
    }
});
console.log(difficult_tasks);

//Filter - Using Filter
var difficult_tasks1 = tasks.filter(function (task) {
    return task.duration >= 120;
});
console.log(difficult_tasks1);

//Filter - Using ES6
var difficult_tasks_final = tasks.filter((task) => task.duration >= 120 );
console.log(difficult_tasks_final);

//Filter Implementation
/*
var filter = function (array, callback) { 
    var filtered_array = []; 
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);    
        }
    }); 
    return filtered_array; 
};
*/

//Reduce
//Using ForEach
var numbers = [1, 2, 3, 4, 5],
total = 0;
    
numbers.forEach(function (number) {
   total += number;
});
console.log(total);

//Using Reduce
var total1 = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);
console.log(total1);


//For above Tasks example 
//Using ForEach
var total_time = 0;  
tasks.forEach(function (task) {
    // The plus sign just coerces 
    // task.duration from a String to a Number
    total_time += (+task.duration);
});
console.log(total_time);


//Using Reduce
var total_time1 = tasks.reduce(function (total, p) {
    return total + p.duration;
}, 0);
console.log(total_time1); 

// Using arrow functions
var total_time2 = tasks.reduce((total, p) => { return total + p.duration; }, 0);
console.log(total_time2);

//Implementation
/*
var reduce = function (array, callback, initial) {
    var accumulator = initial || 0;
     
    array.forEach(function (element) {
       accumulator = callback(accumulator, array[i]);
    });
     
    return accumulator;
};
*/
