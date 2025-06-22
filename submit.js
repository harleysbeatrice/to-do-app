const textInput = document.querySelector("#task-input");

let task = textInput.textContent;

if (task === "") {
    return
} else {
    let newItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.setAttribute("class","check");
    newItem.appendChild(checkbox);
    newItem.textContent = task;

    const delButton = document.createElement("button");
    delButton.setAttribute("class","del");

    const trashIcon = document.createElement("img");
    trashIcon.src = "trash.svg";

    delButton.appendChild(trashIcon);

    newItem.appendChild(delButton);

    const undoneList = document.querySelector(".done > ul");
    undoneList.appendChild(newItem);
}

