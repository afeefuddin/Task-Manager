
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
            let url = 'https://finishit.onrender.com/';
            console.log(url);
            window.location = url;
          }
    }).catch(err=>{
        console.log(err);
    })
})