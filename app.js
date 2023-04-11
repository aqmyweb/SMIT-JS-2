

// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
function add (abc) {
       return function (def) { 
        console.log(abc + def);
    }
}
let abc = add(5);
let def = add(5);
abc(5);
def(10);

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


function searchInArray(myArray, searchVal, searchIndex = 0) {
  if (myArray.length === searchIndex) {
      return false;
  }
  else if (myArray[searchIndex] === searchVal) {
      console.log(searchIndex);
      return true;
  }
  else {
      return searchInArray(myArray, searchVal, searchIndex + 1);
  }
}

let checkArray = [6, 5, 1, 3, 7];
console.log(searchInArray(checkArray, 8));

//03.Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.

function addElement(text) {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  document.body.appendChild(paragraph);
  paragraph.style.position = "absolute";
  paragraph.style.bottom = "5px";

}
addElement("Hi Friend");


//04.Write a function that adds a new list item to an unordered list in an HTML
//document. The function should take a string argument that will be used as
//the text content of the new list item.



function addElementInList(text) {
  const unOrderList = document.createElement('ul');
  unOrderList.appendChild(document.createElement('li')).innerHTML = text;
  document.body.appendChild(unOrderList);

}
addElementInList("Ali");
addElementInList("Abdul");
addElementInList("Aslam");


//05.Write a function that changes the background color of an HTML element.
//The function should take two arguments: the first argument is a reference
//to the HTML element, and the second argument is a string representing
//the new background color.

function background(p,BgColor){
document.getElementById("p").style.background = BgColor;
}

p.style.background = "red";
p.style.color = "black";
p.style.width = "100%";

//06.Write a function that saves an object to localStorage. The function should
//take two arguments: the first argument is a string representing the key to
//use for storing the object, and the second argument is the object to store.


function saveLocalstorage(storageKey, storageObject) {
  let stringfy = JSON.stringify(storageObject);
  localStorage.setItem(storageKey, stringfy);
}

let newObject = {
  "name": "Abdul Qadir",
  "fname": "Abdul Wahid",
  "rNo": "786"
}
let newObject1 = {
  "class": "XII",
  "section": "A",
  "seat": "3",
}
saveLocalstorage("Intro", newObject)
saveLocalstorage("FIntro", newObject1)

  //07 Write a function that retrieves an object from localStorage. The function
//should take one argument, which is a string representing the key used to
//store the object. The function should return the object.

// function getLocalstorage(storageKey) {
//   let prevStorage = localStorage.getItem(storageKey);
//   let getItems = prevStorage ? JSON.parse(localStorage.getItem(storageKey)) : [];
//   return getItems;
// }

// let checkItem = getLocalstorage("Intro");
// let checkFItem = getLocalstorage("FIntro");
// let wrong = getLocalstorage("wrong");
// console.log(checkItem);
// console.log(checkFItem);
// console.log(wrong);
//8.Write a function that takes an object and saves each property to
//localStorage using the property name as the key and the property value as
//the value. The function should also retrieve the object from localStorage
//and return it as a new object.


function objectStorage(obj) {
  Object.keys(obj).forEach(function (key, index) {
      localStorage.setItem(key, JSON.stringify(obj[key]));
  });

  let saveObject = {};
  Object.keys(obj).forEach(function (key, index) {
      let value =  localStorage.getItem(key);
      saveObject[key] = JSON.parse(value);
  })
  return saveObject;
}

let makeObject = {
  "name": "Abdul Qadir",
  "fname": "Abdul Wahid",
  "Age": "30"
}
let getobject = objectStorage(makeObject);
console.log(getobject);














