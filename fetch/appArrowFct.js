// fetch return promises, we have to use .then() for async -cb

// get text
document.getElementById('btn1').addEventListener('click', getText);

function getText(){
  fetch('text.txt')
    .then(res => res.text())
    .then(param =>{
      document.querySelector('ul#output').innerHTML = `<li>${param}</li>`;
    })
    .catch( err => {
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    })
}

// get json
document.getElementById('btn2').addEventListener('click', getJson);

function getJson(){
  fetch('json.json')
    .then(res => res.json())
    .then(param => {
      let output = '';
      param.forEach(post => {
        output += `<li>${post.title} -  ${post.body}</li>`;
      });
      document.querySelector('ul#output').innerHTML = output;
    })
    .catch(err => {
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    });
}

// get External API
document.getElementById('btn3').addEventListener('click', getAPI);

function getAPI(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(param => {
      // console.log(param);
      let output = '';
      param.forEach(user => {
        output += `<li><b>User:</b> ${user.login} -  <b>ID:</b> ${user.id}</li>`;
      });
      document.querySelector('ul#output').innerHTML = output;
    })
    .catch( err => {
      document.querySelector('ul#output').innerHTML = `<li>${err}</li>`;
    });
}