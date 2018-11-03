// const data = getJson(name);

// function getJson(){
//   fetch('api.json')
//     .then(function(res){
//      return res.json()
//     })
//     .then(function(param){
//       console.log(param);
//     })
//     // .catch(function(err){
//     //   console.log('the fuck?');
//     // });
// }

async function getUsers(){
  // here we wait from fetch call
  const response = await fetch('api.json');
  // usually we need to use .then()twice, but now whit await is not need

  // here we wait an only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise in\s resolved
  return data
}

// getUsers().then(data => console.log(data[1].image));
getUsers().then( function(data) {
  return data
}).then(function(res){
  console.log(res[1].name);
})
;
// console.log(getUsers())
const profiles = profileiterator(getUsers());

console.log(profiles.next());

function profileiterator(profiles){
  let nextindex = 0;

  return {
    next: function() {
      return nextindex < profiles.length ?
      { value: profiles[nextindex++], done:false } :
      { done:true }
    }
  }
}

