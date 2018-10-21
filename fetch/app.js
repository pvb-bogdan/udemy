// fetch return promises, we have to use .then() for async -cb

// get text
document.getElementById('btn1').addEventListener('click', getText);

function getText(){
  fetch('text.txt')
    .then(function(res){
     return res.text()// only res return an obj with a lot of properties ,including json or text
      //res.text return a promise so we need to add .then - because is a promise

    })
    .then(function(param){
      document.querySelector('ul#output').innerHTML = `<li>${param}</li>`;
    })
    .catch(function(err){
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    })
}

// get json
document.getElementById('btn2').addEventListener('click', getJson);

function getJson(){
  fetch('json.json')
    .then(function(res){
     return res.json()
    })
    .then(function(param){
      // console.log(param);
      let output = '';
      param.forEach(function(post){
        output += `<li>${post.title} -  ${post.body}</li>`;
      });
      document.querySelector('ul#output').innerHTML = output;
    })
    .catch(function(err){
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    });
}

// get External API
document.getElementById('btn3').addEventListener('click', getAPI);

function getAPI(){
  fetch('https://api.github.com/users')
    .then(function(res){
     return res.json()
    })
    .then(function(param){
      // console.log(param);
      let output = '';
      param.forEach(function(user){
        output += `<li><b>User:</b> ${user.login} -  <b>ID:</b> ${user.id}</li>`;
      });
      document.querySelector('ul#output').innerHTML = output;
    })
    .catch(function(err){
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    });
}