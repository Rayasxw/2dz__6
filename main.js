
const input = document.querySelector("#input");
const createBtn = document.querySelector("#create_button");
const todoList = document.querySelector("#todo_list");

const list = [];

const createTodo = () => {
    const text = input.value;
    
    
    if(text) {
        const reverseText = text.split("").reverse().join("")
        list.push(reverseText)
         
        input.value = '';
        todoList.innerHTML = '';
    }
    console.log(list);
    

    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        todoList.append(li)
    })
}

createBtn.onclick = () => createTodo();