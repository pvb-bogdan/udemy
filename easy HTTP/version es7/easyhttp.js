/**  
  * Easy Http es7 Library
  * Library for making HTTP Requests
  * 
  * @version 3.0.0
  * @author Bogdan Petre
  * @license MIT
  * 
**/

class EasyHTTP {
  async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make an http post request
  async post(url, data){
    const response = await fetch(url, {
      method: 'POST',
      headers:{'Content-type' : 'application/json'},  
      body:JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  // Make an http put/update request await and async
  async put(url, data){
    const response = await fetch(url, {
      method: 'PUT',
      headers:{'Content-type' : 'application/json'},  
      body:JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  // make a delete request with await and async
  async delete(url){
    const response = await fetch(url, {
      method: 'DELETE',
      headers:{'Content-type' : 'application/json'},  
    });
    const resData = await 'Ai reusit sa stergi un user';
    return resData;
  }
}