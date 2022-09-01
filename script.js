//Obtener elementos del HTML
const allTasks = document.getElementById("all-tasks");
const completedTasks = document.getElementById("completed");
const pending = document.getElementById("pending");


//Crear arreglos

const allTasksList = [

    { activity: "Wake-up at 5am", state: false},

    { activity: "Make the bed", state: false },

    { activity: "Meditate for 10mins", state: false},

    { activity: "Change into gym clothes", state: false },

    { activity: "Take Kiwi on a walk", state: false },

    { activity: "Work-out", state: false },

    { activity: "Take a shower", state: false },

    { activity: "Make break-fast", state: false },

]

// Crear los elementos de la lista general

function createTasks() {

    allTasks.innerHTML = "";
    completedTasks.innerHTML = "";
    pending.innerHTML = "";

    allTasksList.forEach((element) => {
        const newHtmlItem = document.createElement("li");
        newHtmlItem.textContent = element.activity;
        newHtmlItem.className =  element.state? "checked": "unchecked";
        newHtmlItem.addEventListener("click", () => toggleCompletedTask(element));

        const cloneElement = newHtmlItem.cloneNode(true);
        cloneElement.addEventListener("click", () => toggleCompletedTask(element));
        
        allTasks.append(newHtmlItem);

        if(element.state){
            completedTasks.append(cloneElement);
        }else {
            pending.append(cloneElement);
        }
     }); 
}

createTasks();

function toggleCompletedTask(element){
    element.state = !element.state
    createTasks();
}










