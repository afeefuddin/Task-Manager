const deleteButton = document.getElementById('deleteButton');
const overlay = document.querySelector('.overlay');
deleteButton.addEventListener('click',()=>{
    overlay.style.display =  "flex";
});
const yes = document.getElementById('confirmDelete');
yes.addEventListener('click',(e)=>{
    fetch('/getTask',{
         method: 'DELETE'
    })
})