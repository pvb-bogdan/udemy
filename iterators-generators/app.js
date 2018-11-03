// iterators and generators - they itterate trough something
// iterators are like loops that loop  but stops after evrery loop
// generators are functions that does the same thing as iterators

// function nameIterator(names){
//   let nextIndex = 0;

//   return {
//     urmator: function() {
//       return nextIndex < names.length ? 
//       { value:names[nextIndex++], done:false} :
//       {done: true}
//     }
//   }
// }

// // create an array of names
// const namesArr = ['jack', 'jill', 'jhon'];
// // init iterator and pass the names array
// const names = nameIterator(namesArr);

// console.log(names.urmator().value);// jack
// console.log(names.urmator().value);//jill
// console.log(names.urmator().value);// jhon
// console.log(names.urmator().value);// undefined - no more names and ends the loop

// function generator - function*

function* sayNames(){
  yield 'jack';
  yield 'jill';
}

const testGenerator = sayNames();

console.log(testGenerator.next().value);
console.log(testGenerator.next().value);
console.log(testGenerator.next().value);

//ID creator

function* createIds(){
  let index = 0;

  while(true){
    yield index++
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
