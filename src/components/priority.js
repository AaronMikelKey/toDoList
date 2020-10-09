export default function priority() {
    const theseButtons = this.parentNode; //button div
    const thisToDo = theseButtons.parentNode; //To do box
    const thisProject = thisToDo.parentNode.id;
    const title = thisToDo.id; //Title and id of to do box
    var storage = JSON.parse(localStorage.getItem('projects')); //array of projects

    for (let i=0;i<storage.length;i++) {
        if (storage[i].project === thisProject) {
            let toDoList = storage[i].toDos;
            for (let j=0;j<toDoList.length;j++) {
                if (toDoList[j].title === title) {
                    storage[i].toDos[j].priority = this.innerHTML; //set priority to button pressed
                }
            }
        }
    }
    const newList = JSON.stringify(storage); //stringify array
    localStorage.setItem('projects', newList); //set storage to new array
    const btnNode = this.parentNode; //returns parent node
    const nodeList = btnNode.children; 
    for (let i=0;i<nodeList.length;i++) {
        if (!nodeList[i].classList.contains('is-light') && !nodeList[i].classList.contains('is-small')) {
            nodeList[i].classList.add('is-light');
            nodeList[i].classList.add('is-small');
        };
    }
    this.classList.remove('is-light');
    this.classList.remove('is-small');
}