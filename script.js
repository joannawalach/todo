let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {

let newActivity = document.getElementById("input").value;

let newDiv = document.createElement("p");
let text = document.createTextNode(newActivity);

newDiv.appendChild(text);

let button1 = document.createElement("button");
newDiv.appendChild(button1);
button1.innerText = "edit";
button1.addEventListener("click", function() {
    let targetDiv = document.getElementsByTagName("div")[3];
    targetDiv.removeChild(newDiv);
})

let button2 = document.createElement("button");
newDiv.appendChild(button2);
button2.innerText = "remove";

let targetDiv = document.getElementsByTagName("div")[3];
targetDiv.appendChild(newDiv);

})
