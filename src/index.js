//index.js
//MAP
var numbers=[1,2,3,4,5];   
var square=numbers.map(function(elem){   
	return (elem*elem);   
});  

var cube=numbers.map(function(elem){   
	return (elem*elem*elem);   
}); 

console.log (square); 
console.log (cube); 
//output: square=[1,4,9,16,25]  

//Example 2: Mapping with the array of objects for specific key value. 
var players = [   
	{firstname : "Sachin", lastname: "Tendulakar",Age:42},   
	{firstname : "Virat", lastname: "Kohli",Age:27},   
	{firstname : "Yuvraj", lastname: "Singh",Age:34}   
];   

var firstNames=players.map(function(ele){   
	return (ele.firstname);   
});
console.log(firstNames);
//output: firstNames=[Sachin,Virat,Yuvraj]

//FILTER

var numbers=[1,2,3,4,5,6,7,8,9,10];   
var evenNum=numbers.filter(function(ele){   
	return ((ele%2)== 0);   
});   
console.log(evenNum);
//output: evenNum=[2,4,6,8,10]  


//Example 2: Filtering the array of objects on the basis of specific key value. 
var players = [   
	{firstname : "Sachin", lastname: "Tendulkar", type:"batsman"},   
	{firstname : "Ashish", lastname: "Nehra", type:"bowler"},   
	{firstname : "Yuvraj", lastname: "Singh", type:"batsman"},   
	{firstname : "Ravichandran",lastname: "Ashwin", type:"bowler"}   
];   
var batsman = players.filter(function (ele) {   
return (ele.type==='batsman')}).map(function(ele) {   
	return (ele.firstname+" "+ele.lastname);   
})

console.log(batsman);
//output: batsman=[Sachin Tendulkar,Yuvraj Singh]   

//REDUCE
var numbers = [1,2,3,4,5];   
var sum=numbers.reduce(function(preValue,curValue){   
	return (preValue+curValue);   
}); 
console.log(sum); 
//output: sum=15  

var empDetails = [   
{empName : "Dinesh", branch: "Developer", salary:60000},   
{empName : "Ashish", branch: "Tester", salary:45000},   
{empName : "Mitesh", branch: "Mobile", salary:35000},   
{empName : "Avinash",branch: "Designer", salary:40000}   
];   
  
var salaries = empDetails.map(function(ele) {   
	return (ele.salary);   
});   
var totalSalary = salaries.reduce(function(prev, curr) {   
	return (prev + curr);   
});   
console.log(totalSalary);  

// Or you can simplify the above code as shown below:   
  
var totalSalary = empDetails.map(function(ele) {   
	return (ele.salary);   
}).reduce(function(prev, curr) {   
	return (prev + curr);   
}); 
console.log(totalSalary);
//output: totalSalary=180000  
