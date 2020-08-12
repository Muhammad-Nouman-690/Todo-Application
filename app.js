var list = document.getElementById('list')

function addTodo(){
    var todoItem = document.getElementById('todo-item')
    
    // List
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    
   

    // edit
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('EDIT')
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn btn-outline-secondary")
    editBtn.setAttribute("onclick","editItem(this)")
    li.appendChild(editBtn)

     // Delete
     var delBtn = document.createElement('button')
     var delText = document.createTextNode('DELETE')
     delBtn.appendChild(delText)
     delBtn.setAttribute("class","btn btn-outline-secondary")
     delBtn.setAttribute("onclick","delItem(this)")
     li.appendChild(delBtn)

    list.appendChild(li)
    todoItem.value = ""

}

function delItem(e){
    e.parentNode.remove(e)
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    e.parentNode.firstChild.nodeValue = prompt("Enter Value",val)   
}

function deleAll(){
    list.innerHTML = ""
}