/**  
  * Easy Http es6 Library
  * Library for making HTTP Requests
  * 
  * @version 2.0.0
  * @author Bogdan Petre
  * @license MIT
  * 
**/

class EasyHTTP {
  // we don not need a constructor like in es5
  // we need to use new Promise because we dont have  a callback function like in es5
  // Make an http get request
  get(url){
    // make use of a promise
    return new Promise((resolve, reject) => {
      // fetch the url
      fetch(url)
        .then(res => res.json())
        .then(recivedData => resolve(recivedData))
        .catch(error => reject(error));
    });
  }

  // Make an http post request
  post(url, data){
    // make use of a promise
    return new Promise((resolve, reject) => {
      // fetch the url
      fetch(url, {
        method: 'POST',
        headers:{'Content-type' : 'application/json'},  
        body:JSON.stringify(data)
      })
        .then(res => res.json())
        .then(recivedData => resolve(recivedData))
        .catch(error => reject(error));
    });
  }

  // Make an http put/update request
  put(url, data){
    // make use of a promise
    return new Promise((resolve, reject) => {
      // fetch the url
      fetch(url, {
        method: 'PUT',
        headers:{'Content-type' : 'application/json'},  
        body:JSON.stringify(data)
      })
        .then(res => res.json())
        .then(recivedData => resolve(recivedData))
        .catch(error => reject(error));
    });
  }

  // make a delete request
  delete(url){
    // make use of a promise
    return new Promise((resolve, reject) => {
      // fetch the url
      fetch(url, {
        method: 'DELETE',
        headers:{'Content-type' : 'application/json'},  
      })
        .then(res => res.json())
        .then(() => resolve('Ai reusit sa stergi un user!'))
        .catch(error => reject(error));
    });
  }
}