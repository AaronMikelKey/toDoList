export default function editBox() {
    //Get toDo box
    const thisBox = this.parentNode;
    const thisId = thisBox.id;
    //get Project div and id
    const thisProject = thisBox.parentNode;
    const projId = thisProject.id;
    //get localStorage arr of projects
    const projectList = JSON.parse(localStorage.getItem('projects')); 
    //Create popup div
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp');
    //Title entry
    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('placeholder', 'Title');
    //Description entry
    const description = document.createElement('textarea');
    description.setAttribute('id', 'description');
    description.setAttribute('placeholder', 'Description');
    //Date entry
    const date = document.createElement('input');
    date.setAttribute('type', 'text');
    date.setAttribute('id', 'date');
    const dateRegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    date.setAttribute('pattern', 'dateRegExp');
    date.setAttribute('placeholder', 'MM/DD/YYYY');
    //submit button
    const submit = document.createElement('button');
    submit.setAttribute('class', 'button is-success is-blur');
    submit.innerHTML = "Submit";
    //submit function to save data and remove popup
    submit.onclick = function() {
        for (let i=0;i<projectList.length;i++) {
            if (projId === projectList[i].project) {
                let thisToDo = projectList[i].toDos;
                for (let j=0;j<thisToDo.length;j++) {
                    if (thisToDo[j].title === thisId) {
                        let newTitle = document.getElementById('title').value;
                        let newDescription = document.getElementById('description').value;
                        let newDate = document.getElementById('date').value;
                        if (newTitle != undefined) {
                            projectList[i].toDos[j].title = newTitle;
                            console.log(thisToDo.title);
                            thisBox.querySelector('.title').innerHTML = newTitle;
                            thisBox.setAttribute('id', newTitle);
                        };
                        if (newDescription != undefined) {
                            projectList[i].toDos[j].description = newDescription;
                            thisBox.querySelector('p').innerHTML = newDescription;
                        };
                        if (newDate != undefined) {
                            projectList[i].toDos[j].dueDate = newDate;
                            thisBox.querySelector('.dueDate').innerHTML = newDate;
                        };
                        break;
                    }
                }
            }
        }
        let newList = JSON.stringify(projectList);
        console.log(newList);
        localStorage.setItem('projects', newList);
        var popUp = document.getElementById('popUp');
        popUp.remove();
    };
    //cancel button and function to remove popup
    const cancel = document.createElement('button');
    cancel.setAttribute('class', 'button is-warning is-blur');
    cancel.innerHTML = "Cancel";
    cancel.onclick = function() {
        var popUp = document.getElementById('popUp');
        popUp.remove();
    }
    //put it together
    popUp.appendChild(title);
    popUp.appendChild(description);
    popUp.appendChild(date);
    popUp.appendChild(submit);
    popUp.appendChild(cancel);
    //append to page
    document.body.appendChild(popUp);
}