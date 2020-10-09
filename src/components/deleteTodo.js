export default function deleteTodo() {
    if (confirm('Are you sure you want to delete this To Do?')) {
        const thisToDo = this.parentNode; //To do box
        const thisProject = thisToDo.parentNode.id;
        const title = thisToDo.id; //Title and id of to do box
        var storage = JSON.parse(localStorage.getItem('projects')); //array of projects

        for (let i=0;i<storage.length;i++) {
            if (storage[i].project === thisProject) {
                let toDoList = storage[i].toDos;
                for (let j=0;j<toDoList.length;j++) {
                    if (toDoList[j].title === title) {
                        storage[i].toDos.splice(j, 1); //remove from array
                    }
                }
            }
        }
        const newList = JSON.stringify(storage); //stringify array
        localStorage.setItem('projects', newList); //set storage to new array
        thisToDo.remove(); //remove box from page
    }
}