function newTodo() {
var input = document.getElementById("text");
    var para = document.createElement("p");
    para.id = "akapit";
    var button1 = document.createElement("button");
    button1.innerText = "usuń";
    button1.id = "button1";
    var button2 = document.createElement("button");
    button2.innerText = "edytuj";
    button2.id = "button2";
    para.innerHTML = input.value + button1.outerHTML + button2.outerHTML;
    document.querySelector(".appbody").appendChild(para);
    input.value = "";


    var button = document.getElementById("button1");
    button.addEventListener("click", function() {
        para.parentNode.removeChild(para);
    })

    var button = document.getElementById("button2");
    button.addEventListener("click", function() {
        input.value = para.textContent;
    })
}