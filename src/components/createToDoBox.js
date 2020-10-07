import editBox from './editBox';

export default function newListItem() {
    //Get toDo box
    const thisBox = this.parentNode;
    //get Project div and id
    const thisProject = thisBox.parentNode;
    const projId = thisProject.id;
    //get localStorage arr of projects
    const projectList = localStorage.getItem('projects'); //arr of projects
    //Create popup div
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp');
    //Title entry
    const titleEntry = document.createElement('input');
    titleEntry.setAttribute('type', 'text');
    titleEntry.setAttribute('id', 'title');
    titleEntry.setAttribute('placeholder', 'Title');
    //Description entry
    const descriptionEntry = document.createElement('textarea');
    descriptionEntry.setAttribute('id', 'description');
    descriptionEntry.setAttribute('placeholder', 'Description');
    //Date entry
    const dateEntry = document.createElement('input');
    dateEntry.setAttribute('type', 'text');
    dateEntry.setAttribute('id', 'date');
    const dateRegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    dateEntry.setAttribute('pattern', 'dateRegExp');
    dateEntry.setAttribute('placeholder', 'MM/DD/YYYY');
    //submit button
    const submit = document.createElement('button');
    submit.setAttribute('class', 'button is-success is-blur');
    submit.innerHTML = "Submit";
    //submit function to save data and remove popup
    let valueArr = [];
    const newList = JSON.parse(projectList.object); //Array of ToDos
    let newObject = "";
    submit.onclick = function() {
        for (let i=0;i<projectList.length;i++) {
            if (projId === projectList[i].project) {
                let newTitle = document.getElementById('title').value;
                let newDescription = document.getElementById('description').value;
                let newDate = document.getElementById('date').value;
                if (newTitle != undefined) {
                    thisBox.querySelector('.title').innerHTML = newTitle;
                    valueArr.push(newTitle);
                };
                if (newDescription != undefined) {
                    thisBox.querySelector('p').innerHTML = newDescription;
                    valueArr.push(newDescription);
                };
                if (newDate != undefined) {
                    thisBox.querySelector('.dueDate').innerHTML = newDate;
                    valueArr.push(newDate);
                };
                newObject = {
                    "title": newTitle, //Title of todo
                    "description": newDescription, //description of todo
                    "dueDate": newDate, //due date of todo
                    "priority":"none", //priority of todo
                    "completed":"incomplete" //completion of todo
                };
            } 
        }
        newList.push(newObject); //New ToDo
        projectList.push(newList);
        localStorage.setItem('projects', newList);
        console.log(localStorage.projects)
        var popUp = document.getElementById('popUp');
        popUp.remove();
        append();
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
    popUp.appendChild(titleEntry);
    popUp.appendChild(descriptionEntry);
    popUp.appendChild(dateEntry);
    popUp.appendChild(submit);
    popUp.appendChild(cancel);
    //append to page
    document.body.appendChild(popUp);


    const append = function() {
        //Main box item
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.setAttribute('id', valueArr[0]); //Set box id to title

        //Title of the list item
        const title = document.createElement('h4');
        title.setAttribute('class', 'title is-4');
        title.innerHTML = valueArr[0];
    
        //description of the item
        const description = document.createElement('p');
        description.innerHTML = valueArr[1];
    
        //Due date item
        const dueDate = document.createElement('p');
        dueDate.setAttribute('class', 'dueDate');
        dueDate.innerHTML = valueArr[2];
    
        //Angle <i> from font awesome
        const faAngle = document.createElement('i');
        faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
        faAngle.setAttribute('aria-hidden', 'true');

        //Unchecked box <i> from font awesome
        const faCheck = document.createElement('i');
        faCheck.setAttribute('class', 'far fa-square fa-2x');
        faAngle.setAttribute('aria-hidden', 'true');

        //Edit button
        const faEdit = document.createElement('i');
        faEdit.setAttribute('class', 'fas fa-edit fa-2x');
        faEdit.setAttribute('aria-hidden', 'true');
        faEdit.onclick = editBox;

        //Delete button
        const deleteButton = document.createElement('a');
        deleteButton.setAttribute('class', 'delete');

        //Priority button container
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'buttons');

        //Priority buttons
        const high = document.createElement('button');
        const medium = document.createElement('button');
        const low = document.createElement('button');
        high.setAttribute('class', 'button is-danger is-light is-small');
        high.innerHTML = 'High';
        medium.setAttribute('class', 'button is-warning is-light is-small');
        medium.innerHTML = 'Medium';
        low.setAttribute('class', 'button is-info is-light is-small');
        low.innerHTML = 'Low';
        //Appending to button container
        buttonContainer.appendChild(high);
        buttonContainer.appendChild(medium);
        buttonContainer.appendChild(low);
        //Append to localStorage



        //Put it together
        box.appendChild(faAngle);
        box.appendChild(faCheck);
        box.appendChild(faEdit);
        box.appendChild(title);
        box.appendChild(description);
        box.appendChild(dueDate);
        box.appendChild(deleteButton);
        box.appendChild(buttonContainer);
        //Append to list
        this.parentNode.appendChild(box);
    }
}