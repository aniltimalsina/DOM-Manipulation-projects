const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const ClearBtn = document.querySelector('.clear-tasks');


loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit', addEvent);
    taskList.addEventListener('click', removeTask);
    ClearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

function addEvent(e){
    if(taskInput.value == ''){
        alert('Add task First');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);

    taskList.appendChild(li);
    

    //clear Input    
    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    
}
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none';
        }
    } );
}