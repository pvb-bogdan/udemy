// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (function(){
  // Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  //Data structure or state structure
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
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();


// UI CONTROLLER
const UICtrl = (function(){
  // create an ob to update selector if trough project in html will change selectors(clases or id or etc) , we need to update just here
  const UISelectors = {
    itemList: '#item-list'
  }

  // Public methods
  return {
    populateItemsList: function(items) {
      // need items from ItemCtrl data - array of obj so we must loop
      // init a var to append at html list
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <b>${item.name}: </b> <em> ${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="fa fa-pencil edit-item"></i>
        </a>
      </li>`;
      });

      //Insert li to ul in html
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();


// APP CONTROLLER
// we need to insert all of the modules/ controlers above in app ctrl to bind them into app
const App = (function(ItemCtrl, UICtrl){
  // console.log(ItemCtrl.logData());

  // Public methods
  return {
    init: function(){
      // console.log('App initializata');
      // fetch items from ItemCtrl data structure
      const items = ItemCtrl.getItems();

      // poppulate list with items
      UICtrl.populateItemsList(items);
    }
  }
})(ItemCtrl, UICtrl); // invoc them at start



App.init();