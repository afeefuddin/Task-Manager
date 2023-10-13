// const {createTask} = re
const overlay = document.querySelector('.overlay');
const newTask = document.getElementById('addtaskButton')
newTask.addEventListener('click',(e)=>{
    overlay.style.display =  "flex";
})
let SubmitTask = document.getElementById('SubmitTask');


SubmitTask.addEventListener('click',(e)=>{
    let taskValue = document.getElementById('taskinput').value;
    const taskData = {
        taskName: taskValue,
        completed: false
      };
    console.log(taskValue)
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
    console.log(elementId);
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

// fetch functions
