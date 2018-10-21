// this is our easy http library
// es5 - working whit prototype not classe like in es6
function easyHttp() {
  this.http = new XMLHttpRequest();
}

// Make an http GET request
easyHttp.prototype.get = function(urele, callback) {
  this.http.open('GET', urele, true);

  // initiate a  var outside the onload function because this.http inside de onload fct it will be undefind because of the scope, so we capture this.htpp outside the onload fct whit a var
  let self = this;
  this.http.onload = function(){
    // check the status
    if(self.http.status === 200){
      // in callback function we pass first parma as null in case of an error
      callback(null, self.http.responseText);
    } else {
      callback('ERROR ' + self.http.status + ' url not found!');
    }
  }

  this.http.send();
}

// Make an http POST request
easyHttp.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  //before onload we need to set the content type in header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // because data is an object we need to make a json string to send it - hence JSON.stringify()
  this.http.send(JSON.stringify(data));
}

// Make an http PUT request
easyHttp.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  //before onload we need to set the content type in header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText);
  }

  // because data is an object we need to make a json string to send it - hence JSON.stringify()
  this.http.send(JSON.stringify(data));
}

// Make an http DELETE request
easyHttp.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  let self = this;
  this.http.onload = function(){
    // check the status
    if(self.http.status === 200){
      // in callback function we pass first parma as null in case of an error
      callback(null, 'POST DELETED!');
    } else {
      callback('ERROR ' + self.http.status + ' url not found!');
    }
  }
  this.http.send();
}