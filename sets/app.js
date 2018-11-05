// SETS - store unique values of any type - 

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('some string');
set1.add({name: 'bogdan'});
set1.add(true);
// set1.add(100); // it can be added again -have to be unique


// add to a set another way.
// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// get count
// console.log(set1.size);

// check for values
// console.log(set1.has(100)); // true
// console.log(set1.has(50 + 50));//true
// but if we try to check obj === obj 
// console.log(set1.has({name: 'bogdan'})); //false because obj is a reference type not a primitive type 

// delet from the set
// set1.delete(100);
// console.log(set1);

// iterate through sets
// for ... of

for(let item of set1){
  // console.log(item);
}

// forEach

set1.forEach((value) => {
  console.log(value);
})

// convert set to array
const setArr = Array.from(set1);
console.log(setArr);
