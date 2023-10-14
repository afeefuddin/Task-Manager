
const deleteButton = document.getElementById('deleteButton');
const overlay = document.querySelector('.overlay');
deleteButton.addEventListener('click',()=>{
    overlay.style.display =  "flex";
});
const yes = document.getElementById('confirmDelete');
const elem =  document.querySelector('.taskDescription');
const id =  elem.id;
let data = { 
    id : id,
}
console.log(data);
yes.addEventListener('click',(e)=>{
    fetch('/getTask',{
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json' 
          },
          body : JSON.stringify(data)
    }).then(response=>{
        if (response.status === 302) {
            // A 302 status code indicates a temporary redirect
            // You can navigate to the new location specified in the 'Location' header
            console.log("Here now")
            window.location = 'http://localhost:3000/';
          }
    }).catch(err=>{
        console.log(err);
    })
})