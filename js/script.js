var buttonAdd = document.querySelector("#buttonAdd");

function itemTextChange(element) {
    buttonAdd.disabled = (element.value.length <= 0);
}

var contador = 0;

function itemAdd() {
    contador++;
    document.querySelector("#cantidad").innerHTML = contador;

    var inputElem = document.querySelector("#value");
    var value = inputElem.value;

    var target = document.querySelector("#itemList");
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.innerHTML = value;
    p.classList.add("itemName");
    var btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.setAttribute("onclick", "itemDelete(this.parentElement)");
    btn.classList.add("removeBtn");
    li.appendChild(p)
    li.appendChild(btn);
    target.appendChild(li);

    inputElem.value = "";
    document.querySelector("#buttonAdd").disabled = true;
}

function itemDelete(element) {
    contador--;
    document.querySelector("#cantidad").innerHTML = contador;

    element.remove();
}