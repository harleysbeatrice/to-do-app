const commitButton = document.querySelector("#commit");
const textInput = document.querySelector("#task-input");

function delItem (button) {
    let listItem = button.parentNode;
    listItem.remove()
}

const doneList = document.querySelector(".done > ul");
const undoneList = document.querySelector(".undone > ul");

function checkTask(box) {
    let listItem = box.parentNode;
    if (box.checked) {
        doneList.appendChild(listItem);
    } else {
        undoneList.appendChild(listItem);
    }
}

function commitTask () {
    
    let task = textInput.value;

    if (task) {
        let newItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "check");
        checkbox.addEventListener("change",() => checkTask(checkbox));
        newItem.appendChild(checkbox);

        const taskText = document.createElement("p");
        taskText.textContent = task;
        newItem.appendChild(taskText);

        const delButton = document.createElement("button");
        delButton.setAttribute("class", "del");
        delButton.addEventListener("click", () => delItem(delButton))

        const trashIcon = document.createElement("img");
        trashIcon.src = "trash.svg";

        delButton.appendChild(trashIcon);

        newItem.appendChild(delButton);

        const undoneList = document.querySelector(".undone > ul");
        undoneList.appendChild(newItem);

        textInput.value = null;
    } else {
        return
    }
}

commitButton.addEventListener("click", commitTask);
textInput.addEventListener("keydown", function (event) {
    if (event.keyCode  === 13) {
        event.preventDefault();
        commitTask();
    } 
})





