// Observer useing prototypes

function EventObserver () {
  this.observers = []
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    // console.log(fn.name);
    console.log(`esti abonat la milisecunde ${fn.name}`);
  },

  unsubscribe: function (fn) {
    // filter out from the list whatever maatches the callback fn. If ther is no match, the callback gets top stay on the list.
    // the filter returns a new list and reassign the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    console.log(`esti dezabonat la milisecunde ${fn.name}`)
  },
  
  fire: function () {
    this.observers.forEach(function(item){
      item.call();
    });
  }
}


const click = new EventObserver();

// cerate event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMili);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMili);
});

document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurSec);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurSec);
});
// click handler for mili
const getCurMili = function (){
  const testMili = new Date().getMilliseconds();
  // console.log(`milisecunde: ${new Date().getMilliseconds()}`);
  if( testMili < 500) {
    console.log(`esti sub 500 - esti la ${testMili}`);
  } else {
    console.log(`esti peste 500 - esti la ${testMili}`);
  }
}

// click handler for sec
const getCurSec = function (){
  const testSec = new Date().getSeconds();
  // console.log(`milisecunde: ${new Date().getMilliseconds()}`);
  if( testSec < 30) {
    console.log(`esti sub 30 - esti la ${testSec}`);
  } else {
    console.log(`esti peste 30 - esti la ${testSec}`);
  }
}