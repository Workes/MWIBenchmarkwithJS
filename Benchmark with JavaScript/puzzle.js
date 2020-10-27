let ObjOne = [
     "Matt Johnson", 
     "Bart Paden",
     "Ryan Doss",
     "Miguel Solano"   
];

let ObjTwo = [
     "Matt Johnson",
     "Bart Paden",
     "Jordan Heigle",
     "Tyler Viles",
];

// Converted the array to a set, this eliminated the duplicates

let set = new Set([...ObjOne, ...ObjTwo]);

// I then converted this back into an array, using the spread operator
// After it was converted the duplicates were eliminated

let finalObj = [...set];

// I then used the code below to allow the array to be displayed on the webpage

var list = document.createElement('ul');

finalObj.forEach(function (finalObj){
    var li = document.createElement('li');
    li.textContent = finalObj;
    list.appendChild(li);
});

var app = document.querySelector('#puzzle');
app.appendChild(list);

  // This is supposed to make it where the content is hidden to start
  

  function listDisplay() {
    document.getElementById("content").style.visibility = "hidden";
}

// This allows for the link to toggle between showing and hiding it

function toggleContent() {
    var contentId = document.getElementById("content");
    // This is the toggle 
    contentId.style.display == "none" ? contentId.style.display = "block" : 
    contentId.style.display = "none"; 
  }

  // This is the alert that show up once the button has been pressed more than once

var count = 0; 
function showMessage() {
  if (count++ == 1) {
    alert("The operation has been completed."); 
  }
};


