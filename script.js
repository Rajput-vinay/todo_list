console.log("hello");
let index = 1;

function addTodo() {
    const inputEle = document.querySelector("input");
    const content = inputEle.value.trim();

    if (content === '') {
        alert("Please enter a todo item.");
        return;
    }

    // Parent Element
    const ParentNode = document.querySelector("#todos");

    // Create a div tag
    const div = document.createElement('div');
    div.setAttribute('class',`todo_card_container`)
    div.setAttribute('id', `todo-${index}`);

    // Create an h4 tag
    const h4 = document.createElement('h4');
    h4.innerText = `${index}. ${content}`;

    // Create edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('id',`taskId`)
    editButton.setAttribute('onclick', `update(${index})`);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('id',`removeId`)
    deleteButton.setAttribute('onclick', `deleteTodo(${index})`);

    // Append elements to div
    div.appendChild(h4);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    ParentNode.appendChild(div);

    index++;
    inputEle.value = ""; // Reset input field
}


function deleteTodo(index){
const elementDel = document.querySelector(`#todo-${index}`)
if(elementDel){
    elementDel.parentNode.removeChild(elementDel);
}

}

function update(index){
    const elementUpdate = document.querySelector(`#todo-${index}`)
     const h4 = document.querySelector('h4');
     const newValue = prompt('Edit the todos',h4.textContent);

     if(newValue && newValue.trim()){
        h4.textContent = `${index}. ${newValue.trim()}` ;
     }
     else{
        alert('Please enter a todo item.')
     }

     
     
}