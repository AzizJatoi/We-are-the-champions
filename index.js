const publishBtn = document.getElementById("btn")
const endorsementContainer = document.getElementById("endorsement-container")
const inputField = document.getElementById("input-field")
let endorsementArray = JSON.parse(localStorage.getItem("endorsementArray")) || [];


render(endorsementArray);

function render(item) {
    endorsementContainer.innerHTML = ''
    for(let i = 0; i < item.length; i++) {
        const listItem = document.createElement("li")
        listItem.textContent = item[i]
        const likeIcon = document.createElement("i")
        // likeIcon.classList.add("far", "fa-heart", "like-icon", "icons")
        const trashIcon = document.createElement("i");
        trashIcon.classList.add("fa-solid", "fa-trash", "trash-icon", "icons");
        listItem.appendChild(likeIcon);
        listItem.appendChild(trashIcon);
        trashIcon.addEventListener("dblclick", function() {
            deleteTodoItem(i)
        })
        endorsementContainer.appendChild(listItem)
    }
}

publishBtn.addEventListener("click", function() {
    const inputValue = inputField.value
    if(inputValue) {
        endorsementArray.push(inputValue)
        inputField.value = ''
        localStorage.setItem("endorsementArray", JSON.stringify(endorsementArray));
        render(endorsementArray)
    }
})

function deleteTodoItem(index) {
    endorsementArray.splice(index, 1);
    localStorage.setItem("endorsementArray", JSON.stringify(endorsementArray));
    render(endorsementArray);
}