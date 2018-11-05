// MAPS - obj that holds => key-value pairs  - can use any type as a key or a value

const map1 = new Map();

// set keys
const key1 = 'some string',
      key2 = {},
      key3 = function () {};;

// set map values by keys using set()

map1.set(key1, 'Some value of key 1');
map1.set(key2, 'Some value of key 2');
map1.set(key3, 'Some value of key 3');

// get values by key

// console.log(map1.get(key1),map1.get(key2),map1.get(key3));//Some value of key 1 map1.get(key2) map1.get(key3)

// count value inside a map 
// console.log(map1.size);// 3

//ITERATING MAPS

// loop using for...of to get keys or values

// for(let[key, value] of map1){
//   console.log(`${key} = ${value}`);
// }

//iterate keys only
for(let key of map1.keys()){
  // console.log(key);
}

//iterate values only
for(let value of map1.values()){
  // console.log(value);
}

// kuse forEach
// map1.forEach(function(key, value){
//   console.log(`${key} = ${value}`);
// })

// CONVERT TO ARRAY
// create an array of key value pairs
const keyValArr = Array.from(map1);
// console.log(keyValArr);

// create an array just from values
const valArr = Array.from(map1.values());
console.log(valArr);

// create an array just from key
const keyArr = Array.from(map1.keys());
console.log(keyArr);

