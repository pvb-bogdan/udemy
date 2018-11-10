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
    addItem: function(name, calories){
      // we need to generate an id to 
      let ID;

      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      
      // calories to number -because calorie input will be a string
      calories = parseInt(calories);
      // create a new item with new Item construcotr
      newItem = new Item(ID, name, calories);
      // push items array
      data.items.push(newItem);
      return newItem;
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
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
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
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    getSelectors:function () {
      return UISelectors;
    }
  }
})();


// APP CONTROLLER
// we need to insert all of the modules/ controlers above in app ctrl to bind them into app
const App = (function(ItemCtrl, UICtrl){
  // create a load event listeners
  const loadEventListeners = function (){
    // get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function (e){
    // get form input from UICtrl
    const input = UICtrl.getItemInput();
    // check for name and calories input
    if(input.name !== '' && input.calories !== '') {
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }



    e.preventDefault();
  }

  // Public methods
  return {
    init: function(){
      // console.log('App initializata');
      // fetch items from ItemCtrl data structure
      const items = ItemCtrl.getItems();

      // poppulate list with items
      UICtrl.populateItemsList(items);

      // call event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl); // invoc them at start



App.init();