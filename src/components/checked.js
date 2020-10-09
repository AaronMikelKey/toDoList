import toDoMinimize from './toDoMinimize';

export default function checked() {
    //Get toDo box
    const thisBox = this.parentNode;
    const thisId = thisBox.id;
    //get Project div and id
    const thisProject = thisBox.parentNode;
    const projId = thisProject.id;
    //get localStorage arr of projects
    const projectList = JSON.parse(localStorage.getItem('projects')); 
    let thisClassList = this.classList;
    for (let i=0;i<projectList.length;i++) {
        if (projectList[i].project === projId) {
            let toDoList = projectList[i].toDos;
            for (let j=0;j<toDoList.length;j++) {
                if (toDoList[j].title === thisId) {   
                    if (thisClassList.contains('fa-square')) {
                        this.classList.remove('fa-square');
                        this.classList.add('fa-check-square');
                        thisBox.classList.add('completed');
                        projectList[i].toDos[j].completed = 'completed';
                    } else {
                        this.classList.remove('fa-check-square');
                        thisBox.classList.remove('completed');
                        this.classList.add('fa-square');
                        projectList[i].toDos[j].completed = 'incomplete';

                    }
                }
            }
        }
    }
    const newList = JSON.stringify(projectList); //stringify array
    localStorage.setItem('projects', newList); //set storage to new array
}