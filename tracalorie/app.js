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
      // {id: 0, name: 'Friptura Porc', calories: 1200},
      // {id: 1, name: 'Salata', calories: 200},
      // {id: 2, name: 'oua ochiuri', calories: 400}
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
    getItemById : function(id){
      let found = null;

      //loop through data items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function (name, calories) {
      // calories to number - because it comes from form as a string
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      })
      return found;
    },
    deleteItem: function (id){
      // get ids with map()
      const ids = data.items.map(function(item){
        return item.id
      });

      // get index
      const index = ids.indexOf(id);

      // remove item 
      data.item.splice(1);

    },
    setCurrentItem: function(item){
      data.currentItem = item
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    getTotalCalories: function(){
      // we have to loop the items and get calories
      let total = 0;

      // loop through items and add cals
      data.items.forEach(function(item){
        total += item.calories;
      });

      // set total cal in data structure
      data.totalCalories = total;

      // return total
      return data.totalCalories;
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
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
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

    addListItem: function(item){
      // show list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // create li element
      const li = document.createElement('li');
      // add class
      li.className = 'collection-item';
      // add ID
      li.id = `item-${item.id}`;
      //add HTML
      li.innerHTML = `<b>${item.name}: </b> <em> ${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="fa fa-pencil edit-item"></i>
      </a>`;
      // insert item into html
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem: function (item){
      document.getElementById(`item-${item.id}`).innerHTML = `<b>${item.name}: </b> <em> ${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="fa fa-pencil edit-item"></i>
      </a>`;
      // let listItems = document.querySelectorAll(UISelectors.listItems); // give us a nodeList an we need to loop, but we cannot use forEach - mmust turn into array
      // listItems = Array.from(listItems);
      // // now ew can loop
      // listItems.forEach(function(listItem){
      //   const itemId = listItem.getAttribute('id');
      //   if(itemId === `item-${item.id}`){
      //     document.querySelector(`#${itemId}`).innerHTML = `<b>${item.name}: </b> <em> ${item.calories} Calories</em>
      //     <a href="#" class="secondary-content">
      //       <i class="fa fa-pencil edit-item"></i>
      //     </a>`;
      //   }
      // });
    },
    clearIputs: function (){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: function(){
      // make sure that the input are clear - have a function, just call it here
      UICtrl.clearIputs();
      // hide btns
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function(){
      // hide btns
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
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

    // disable submit on enter on update / desable enter key
    document.addEventListener('keypress', function(e){
      if( e.keyCode === 13 || e.which === 13 ){
        // 13 is key code for enter - second option on if is dore older browsers that don't know keyCode
        e.preventDefault();
        return false;
      }
    });
    // edit icon  click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    //Update event on edit
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    //deletebtn event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    //Back btn event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
  }

  // Add item submit
  const itemAddSubmit = function (e){

    // get form input from UICtrl
    const input = UICtrl.getItemInput();

    // check for name and calories input
    if(input.name !== '' && input.calories !== '') {
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add item to UI list
      UICtrl.addListItem(newItem);
      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total cal to UI
      UICtrl.showTotalCalories(totalCalories);

      // clear inputs
      UICtrl.clearIputs();
    }

    e.preventDefault();
  }
  // click edtit btn to edit
  const itemEditClick = function(e){
    // we have to use event delegation because the edit item is loaded after
    if(e.target.classList.contains('edit-item')){
      // get the list item ID (item-0, item-1 etc)
      const listId = e.target.parentNode.parentNode.id;

      //Above we get the actual list id from makup log  - listId to see
      // Now we nee to get the actual number item-? using split at dash
      // break into array
      const listIdArr = listId.split('-');
      // console.log(listIdArr);// console array id and item

      // get the is nr
      const id = parseInt(listIdArr[1]);
      // console.log(id);

      // get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // console.log(itemToEdit);

      // set the current  item
      ItemCtrl.setCurrentItem(itemToEdit);
      
      // add item to form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  }

  // update  item on submit updated btn
  const itemUpdateSubmit = function (e) {
    // we can use getItemInput to get input
    const input = UICtrl.getItemInput();

    // update item - we get item as an obj
    const updateItem = ItemCtrl.updateItem(input.name, input.calories);

    //  update item in ui
    UICtrl.updateListItem(updateItem);

    // get total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // add total cal to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // delete item submit
  const itemDeleteSubmit = function(){
    
    // // get id from current item
    // const currentItem = ItemCtrl.getCurrentItem();

    // // delete from data structure
    // ItemCtrl.deleteItem(currentItem.id);
    // e.preventDefault();
  }


  // Public methods
  return {
    init: function(){
      // set initial set
      UICtrl.clearEditState();
      // console.log('App initializata');
      // fetch items from ItemCtrl data structure
      const items = ItemCtrl.getItems();

      //check if any items to Know if we display the ul in DOM or not

      if(items.length === 0){
        UICtrl.hideList();
      } else {  
        // populate list with items
        UICtrl.populateItemsList(items);
      }

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total cal to UI
      UICtrl.showTotalCalories(totalCalories);

      // call event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl, UICtrl); // invoc them at start



App.init();