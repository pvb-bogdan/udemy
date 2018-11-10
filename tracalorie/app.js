// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (function(){
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data structure -or state
  const data = {
    items: [
      {id: 0, name: 'Friptura Porc', calories: 1200},
      {id: 1, name: 'Salata', calories: 200},
      {id: 2, name: 'oua ochiuri', calories: 400}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public methods
  return {
    logData: function() {
      return data;
    }
  }
})();


// UI CONTROLLER
const UICtrl = (function(){
  

  // Public methods
  return {

  }
})();


// APP CONTROLLER
// we need to insert all of the modules/ controlers above in app ctrl to bind them into app
const App = (function(ItemCtrl, UICtrl){
  // console.log(ItemCtrl.logData());

  // Public methods
  return {
    init: function(){
      console.log('App initializata');
    }
  }
})(ItemCtrl, UICtrl); // invoc them at start



App.init();