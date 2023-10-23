// const {createTask} = re
const overlay = document.querySelector('.overlay');
const newTask = document.getElementById('addtaskButton')
newTask.addEventListener('click',(e)=>{
    overlay.style.display =  "flex";
})
let SubmitTask = document.getElementById('SubmitTask');
let cross = document.querySelector('.cross');
cross.addEventListener('click',(e)=>{
  overlay.style.display =  "none";
})

SubmitTask.addEventListener('click',(e)=>{
    let taskValue = document.getElementById('taskinput').value;
    const taskData = {
        taskName: taskValue,
        completed: false
      };
    fetch('/',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
          },
        body:  JSON.stringify(taskData)
    }).then(resposne=>{
      overlay.style.display =  "none";
      window.location.reload();
    }).catch(error=>{
      console.log("Error");
    })
   
})
let taskElements = document.getElementsByClassName('clickthis');
let id = null;
for (let i = 0; i < taskElements.length; i++) {
  taskElements[i].addEventListener('click', (e) => {
    const elementId = e.currentTarget.id;
        fetch(`/getTask?id=${elementId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      const url = response.url;
      window.location.href = url;
      console.log("huh");
    })
    .catch(error => {
      // Handle errors here
    });
  });
}

// checkbox
let checkbox = document.getElementsByClassName('completed');
let idcheck = null;
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', (e) => {
    const elementId = e.currentTarget.id;
    let data = { 
      id : elementId,
  }
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
         window.location.reload();
       }
 }).catch(err=>{
     console.log(err);
 })
  });
}
