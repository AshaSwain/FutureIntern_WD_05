let input = document.getElementById('input');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');
let container = document.querySelector('container');

btn.addEventListener('click',() => {

    if(input.value !==''){
    let tasklist = document.createElement('li');
    ul.appendChild(tasklist);
    tasklist.textContent = input.value;
    input.value = '';
    deleteTask(tasklist);
}
else{
    alert('Enter Your Task');
}
});

function deleteTask(tasklist){
    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.id = 'delet';
    tasklist.appendChild(deletebtn);
    deletebtn.addEventListener('click', () => {
        tasklist.remove();
    });

}