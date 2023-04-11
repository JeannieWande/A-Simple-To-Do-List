const form = document.getElementById('form');
const activities =document.getElementById('todos');
const input = document.getElementById('input')

form.addEventListener('submit', addActivity);
function addActivity(event){
    event.preventDefault();

    const list = document.createElement('li');
    list.innerHTML = input.value;
    activities.appendChild(list);

    const box = document.createElement('input');
    box.type='checkbox';
    list.insertBefore(box, list.firstChild);

    const deletebtn= document.createElement('button');
    deletebtn.innerHTML="Delete";
    deletebtn.addEventListener('click', deleteBtnFunc);
    list.appendChild(deletebtn);

    input.value="";
    //STORING DATA IN LOCAL STORAGE
    localStorage.setItem('tasks', JSON.stringify(activities.innerHTML));
}
function deleteBtnFunc(event){
    const del_btn= event.target.parentNode;
    activities.removeChild(del_btn);

    localStorage.setItem('tasks', JSON.stringify(activities.innerHTML));
    
}
window.addEventListener('load', ()=>{
    //RETRIEVING DATA FROM THE LOCAL STORAGE
    const task = JSON.parse(localStorage.getItem('tasks')) || [];
    activities.innerHTML=task;

    //ADD EVENT LISTENER TO THE BUTTON
    const button = activities.querySelectorAll('button');
    button.forEach(btn=>{
        btn.addEventListener('click', deleteBtnFunc)
    });

} )