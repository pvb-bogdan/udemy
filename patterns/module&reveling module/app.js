//basic structre of an module
//starts whit an ify function - fuction that is called on start by itself - (some function here)();
// below is a module

// (function(){
//   // in here we declare private vars and funcs

//   return {
//     // here we declare public vars and funcs
//   }
// })();

// MODULE PATTERN

// const UICtrl = (function(){
//   let text = 'Alexandra';

//   const changeText = function(){
//     const el = document.getElementById('user');
//     el.textContent = text;
//   } 

//   return {
//     callChangeUser : function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeUser();

// REVEALING MODULE PATTERN
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log('Item Added...');
  }

  function get(id, name) {
    return data.find(item => {
      return item.id === id;
    });
  }
  // map and reveal method that is private above
  
  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, nume: 'Ion'});
ItemCtrl.add({id: 2, nume: 'Marc'});
// ItemCtrl.add({id:1, nume:'Ion'});
console.log(ItemCtrl.get(2));