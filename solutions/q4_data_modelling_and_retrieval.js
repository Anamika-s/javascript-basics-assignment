// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const array=
[
  {name : 'Mango' , color : 'Yellow' , price : '100'},
  {name : 'Orange' , color : 'Orange' , price : '90'},
  {name : 'Apple' , color : 'Red' , price : '120'},
  {name : 'Grapes' , color : 'purple' , price : '80'},
];

var convert = (array) => 
{
  var object  ={};

  array.forEach(element => {

    object[element.name]=element
    
  });

  return object;

}

var fruits = convert(array);

console.log(fruits.Mango);
console.log(fruits.Orange);
console.log(fruits.Apple);
console.log(fruits.Grapes);
