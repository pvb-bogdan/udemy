// ASYNC AWAIT
// async befor a function return a promise
// if we need to use a promise whitin a promise then we make use of await

// async function myFunc(){
//   // return 'hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Say hello to my little friend'),2000);
//   });
//   // fabricate an error just for the sake of catch()
//   const error = false; // true
//   if(!error){
//     const res = await promise; // wait until the promise is resolve
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong!'));
//   }

// }

// // console.log(myFunc());

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// best ex async/await whit fetch

async function getUsers(){
  // here we wait from fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // usually we need to use .then()twice, but now whit await is not need

  // here we wait an only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise in\s resolved
  return data
}

getUsers().then(users => console.log(users));