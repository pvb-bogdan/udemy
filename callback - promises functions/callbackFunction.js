// Callback functions - CB/cb
// a cb is a function that is pass in as a params into another function and then is call //into the function body itself

const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'}
]

// // create functions to create post and get post syncronus
// // will use setTimeout to mimic the delay response from server

// function createPost(post){ 
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '' ;
//     posts.forEach(function(post){
//       output += `<li>${post.title}: ${post.body}</li>`
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post 3', body: 'This is post 3'});
// getPosts();

// create functions to create post and get post asyncronus
// in createPost we add a second param that will be our callbac function - we name it whatever, and tehn we call it on creatPost function body

function createPost(post, smallTalk, test){
  setTimeout(function(){
    posts.push(post);
    smallTalk();
    test();
  }, 2000);
}

function getPosts(){
  setTimeout(function(){
    let output = '' ;
    posts.forEach(function(post){
      output += `<li>${post.title}: ${post.body}</li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

function Test(){
  console.log('test');
}

createPost({title: 'Post three', body: 'This is post three'},getPosts,Test);
getPosts();