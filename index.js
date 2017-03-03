// authors: Colin & William
// date: 3.3.17
// project: Basic jQuery Shopping List

// step 1: CREATE STATE W/ ARRAY OF OBJECTS 
// step 2: CREATE FUNCTION TO MANIPULATE OBJECTS ('CRUD', addItem, removeItem, checkItem)
// step 3: RENDER HTML W/ NEWLY MANIPULATED OBJECTS 
// step 4: ADD jQuery EVENT LISTENERS & RUN STEPS 1-3

// step 1
// create state which contains an array of objects (items, true/false boolean('checked')) 
// add in existing html objects provided
var state = {
  items: [   
    {item: 'apples', status: false},
    {item: 'oranges', status: false},
    {item: 'pie', status: false}
  ]
};

// step 2
// implement 3 functions: 1) addItem; 2) removeItem; 3) checkItem.
// name functions & identify parameters (which will be passed in step 4)
// functions should manipulate var state's data
function addItem(newItem){
  state.items.push({
    "item": newItem,
    "status": false
  });
}

function removeItem(oldItem){
// needs to identify that you have found correct object to remove~ then remove it
// delete items[i]
// check if item is in array of objects? if yes, delete that index. if no, error message
  for (var i = 0; i < state.items.length; i++){
    if (oldItem === state.items[i].item){
      state.items.splice(i, 1)
      console.log(state.items)
    }
  }
}

function checkItem(oldItem){
// checks whether or not item's status is true of false
  for (var i = 0; i < state.items.length; i++){
    if (oldItem === state.items[i].item){
      if (state.items[i].status === false){
        state.items[i].status = true
      }
      else if (state.items[i].status !== false){
        state.items[i].status = false
      }
    }
  }
}

// step 3
// says "put the html here" and then does
// converts state into html
// 
// Render => User Action => State Change => Render => ...
// state.transformToHtml -> jquery.refreshDOM(state)
// state.items.forEach -> transformItemToHTML(item) -> jquery.addItem(item)
function renderList(array){
// with each object that we have in array, take name and put into html
// at a particular point and, if false, do the same with toggleClass
  const divMeat = '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
  array.forEach(htmlGod)
  function htmlGod(theObj){
    if (theObj.status === false){
      $(".shopping-list").append(`<li><span class="shopping-item">${theObj.item}</span> ${divMeat}`)
    }   
    else if (theObj.status === true)  {
      $(".shopping-list").append(`<li><span class="shopping-item shopping-item__checked">${theObj.item}</span> ${divMeat}`)
    }
  }}
renderList(state.items)
// step 4
// event handling for buttons (check, delete, and Add item) being pressed 
// empty current html upon click

$(document).ready(function(){

  // For click handlers: `this` is the element that was clicked on.
  // 
  // $('.your-thing').click(function(event) {
  //   console.log(this) // what node is this?
  //   var nameOfItem = $(this) // do something to figure out name of what item was clicked on (DOM Traversal)
  //   checkItem(nameOfItem) // change state
  //   // re-render
  // })

  $("button.shopping-item-toggle").click(function(event){
    console.log(this) 
  })
})





