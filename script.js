let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function() {

let input = document.getElementById("input");
let newActivity = document.getElementById("input").value;
let newDiv = document.createElement("p");
let text = document.createTextNode(newActivity);
if (input==null) {
    alert("Nie wprowadzono nowego zadania");
    return;
} else {
newDiv.appendChild(text);
}

let button1 = document.createElement("button");
newDiv.appendChild(button1);
button1.innerText = "remove";
button1.addEventListener("click", function() {
    let targetDiv = document.getElementsByTagName("div")[3];
    targetDiv.removeChild(newDiv);
})

let button2 = document.createElement("button");
newDiv.appendChild(button2);
button2.innerText = "edit";
button2.addEventListener("click", function() {
   input.value = text.textContent;
})

let targetDiv = document.getElementsByTagName("div")[3];
targetDiv.appendChild(newDiv);
input.value="";
})
