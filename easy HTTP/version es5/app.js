// Jason Placeholder  - fake online Rest API
// instanciate the prototype
const http = new easyHttp;

// create a false data post
const data = {
  title: 'My post test',
  body: 'This is my new post'
}

// get post/posts
// to get just one post we ad the /id after the ... com/posts/id in url
// http.get('https://jsonplaceholder.typicode.com/posts', function(errCallback, posts){
//   if(errCallback){
//     console.log(errCallback)
//   } else{
//     console.log(posts);
//   }
// });



// create post POST
// as post params we sent link, the actually data and the callback function
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(errCallback, post){
//   if(errCallback){
//     console.log(errCallback)
//   } else{
//     console.log(post);
//    }
// });

//PUT
// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(errCallback, post){
//   if(errCallback){
//     console.log(errCallback)
//   } else{
//     console.log(post);
//    }
// });

// delete

http.delete('https://jsonplaceholder.typicode.com/posts/3', function(errCallback, response){
  if(errCallback){
    console.log(errCallback)
  } else{
    console.log(response);
  }
});