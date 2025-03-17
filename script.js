function addTask(){
    const inputField = document.getElementById('inputTask')
    const taskText = inputField.value.trim()
    if(taskText == ""){
        alert("Task can not be empty!")
        inputField.value=""
        return
    }
    const newTask = document.createElement('li')
    const taskList = document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent = document.getElementById('inputTask').value
    document.getElementById('inputTask').value=""
    deleteTask(newTask)
}
function deleteTask(newTask)
{
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent="Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}