// Destructuring assignment

let a, b;
// [a, b] = [100,200];

// console.log(a)// 100
// console.log(b)// 200

// rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500]; // the ... is spread operator

// console.log(rest)//300 400 500

({ a, b} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a); // 100
({ a, b, ... rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest); // {c: 300, d: 400, e: 500}

// Array destructuring

const people = ['nume1', 'nume2', 'nume3'];

// const [name1, name2, name3] = people;

// console.log(name1, name2, name3); // nume1, nume2, nume3

// Parse array returned from function

function getPeople(){
  return ['nume1', 'nume2', 'nume3'];
}
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1,person2, person3);

// obj destructuring

const person = {
  name: 'john',
  age:32,
  city:'bucharest',
  gender: 'male',
  sayHello: function(){
    console.log('hello')
  }
}

// to get data from obj old way ES5

// const name = person.name,
//       age = person.age,
//       city = person.city,
//       gender = person.gender
// console.log(person.name, person.age);


// new way destructuring ES6
const { name, age, city, gender, sayHello } = person;     
console.log(name, age, city, gender);
sayHello();