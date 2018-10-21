//Promises
// promises work the same as a callback -they promise that they'll do something when  we call them

const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'}
]

// instead to add a calbak fct as a second param to createPost fct return a new promise on its body

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      resolve();
    }, 2000);
  });
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

createPost({title: 'Post three', body: 'This is post three'}).then(getPosts).catch();
