// const sayHello = function(){
//   console.log('hello');
// }

// transform fuction above into fct arrow
// const sayHello = () => {
//   console.log('hello');
// }

// MORE COMPACT from above - on line fct does not need braces
// const sayHello = () => console.log('hello');

// same thing whit return - on line 

// const sayHello = () => 'hello!'

// !ATENCION - one line when retur obj literal {obj:obj}

// const sayHello = () => { msg : 'hello' }; // undefined because curly braces made it think that is a body of a function

// const sayHello = () => ({ msg : 'hello' });// now return an obj
// console.log(sayHello());
// Params in arrow function

// one param does not need paraenthesis
// const sayHello = name => console.log(name)

// multiple params must be between parenthesis
// const sayHello = (firstName, lastName) => console.log(firstName, lastName)

// sayHello('Bogdan', 'Petre');

// arrow fct as a callback

const users = ['bogdan', 'monica', 'rares','gogu'];

// const nameLength = users.map(function(name){
//   return name.length;
// });

// shorter
// const nameLength = users.map((name) => {
//   return name.length;
// });

// shortest
let nameLength = users.map(name => name.length);

console.log(nameLength);