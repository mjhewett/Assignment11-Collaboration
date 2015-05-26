//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

var people = [
{name: 'MaxPaxy', city: 'Sydney', country: 'Australia', zipcode: 'HP91BU', age: 24},
{name: 'Keeeesh', city: 'Atlanta', country: 'United States of America', zipcode: '30035', age: 28}
];


	function forEach(list, callback){
	for(var i = 0; i < list.length; i++){
		callback(list[i]); 
	}
};

forEach(people, function(person){
	console.log("Yo dog, my name is " + person.name + " and I iz frum " + person.city);
});




// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.



    function forEach(list, callback){
    for(var i = 0; i < list.length; i++){
        callback(list[i]);
    }
};

forEach(people, function(person){
    console.log("Yo dog, my name is " + person.name + " and I iz frum " + person.city);
});

// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.


var newArray = [];
// var newVar = ();

function map() {
  people.forEach ( function (age){
    for(var i = 0; i < list.length; i++){
        callback(list[i]);
    }
    newArray.push(newArray.age)
  });
};







//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [B] Drives, Person [A] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////



// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) { /* Do stuff*/ }

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

<<<<<<< HEAD
function find(list, predicate) { //* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2






=======
function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
>>>>>>> a040ae2c31519a9269afad5df83203b6ab54efff
