var names = ['mark','joel','günther'];
var namesInCapital = names.map(capitalize);

function capitalize(name){
	return name.toUpperCase();
}

console.log(names);
console.log(namesInCapital);

// OUTPUT
// ["mark","joel","günther"]
// ["MARK","JOEL","GÜNTHER"]


var names = ['mark','joel','günther'];
var namesWithLetterE = names.filter(requireLetterE);

function requireLetterE(name){
	if (name.indexOf('e') != -1){
		return true;
  }
}

console.log(names);
console.log(namesWithLetterE);

// OUTPUT
// ["mark","joel","günther"]
// ["joel","günther"]

var ages = [10,15,10];
var totalAge = ages.reduce(getCombinedAges);

function getCombinedAges(age,combinedAge){
  return age + combinedAge;
}

console.log(ages);
console.log(totalAge);

// OUTPUT
// [10, 15, 10]
// 35
