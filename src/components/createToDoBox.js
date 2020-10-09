import editBox from './editBox';

export default function newListItem() {
    const thisBox = this.parentNode; // (add to do item), parent node = project div
    const projId = thisBox.id;
    //get localStorage arr of projects
    const projectList = JSON.parse(window.localStorage.projects); //arr of projects

    /*
        To fix this, we need to: 
        -- get() id of project from project div, 
        -- get() array of [projects],
        --match id with [projects.project],
        --then get() array of [projects.toDos],
        --then push entered info to [project.toDos],
        then set [projects] to the new object (same [projects],
             new [project.toDos] array)

    [
        {"project":"Project Title",
        "toDos":[
            {"title":"Title 2",
            "description":"Description 2",
            "dueDate":"01/02/2021",
            "priority":"none",
            "completed":"incomplete"}
        ],
        {"project":"Second Project",
        "toDos":[
            {"title":"Title 2",
            "description":"Description 2",
            "dueDate":"01/02/2021",
            "priority":"none",
            "completed":"incomplete"}
        ],
    ]
    */

    //Create popup div
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp');
    //Title entry
    const titleEntry = document.createElement('input');
    titleEntry.setAttribute('type', 'text');
    titleEntry.setAttribute('id', 'title');
    titleEntry.setAttribute('placeholder', 'Title');
    titleEntry.setAttribute('required', 'required');
    //Description entry
    const descriptionEntry = document.createElement('textarea');
    descriptionEntry.setAttribute('id', 'description');
    descriptionEntry.setAttribute('placeholder', 'Description');
    descriptionEntry.setAttribute('required', 'required');
    //Date entry
    const dateEntry = document.createElement('input');
    dateEntry.setAttribute('type', 'text');
    dateEntry.setAttribute('id', 'date');
    const dateRegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    dateEntry.setAttribute('pattern', 'dateRegExp');
    dateEntry.setAttribute('placeholder', 'MM/DD/YYYY');
    dateEntry.setAttribute('required', 'required');
    //submit button
    const submit = document.createElement('button');
    submit.setAttribute('class', 'button is-success is-blur');
    submit.innerHTML = "Submit";
    
    //submit function to save data and remove popup
    let valueArr = [];
    submit.onclick = function() {
        var newList = []; //Array of ToDos
        let newObject = "";
        for (let i=0;i<projectList.length;i++) {
            if (projId === projectList[i].project) {
                newList = projectList[i].toDos; //Array of ToDos
                let newTitle = document.getElementById('title').value;
                let newDescription = document.getElementById('description').value;
                let newDate = document.getElementById('date').value;
                if (newTitle != undefined) {
                    valueArr.push(newTitle);
                };
                if (newDescription != undefined) {
                    valueArr.push(newDescription);
                };
                if (newDate != undefined) {
                    valueArr.push(newDate);
                };
            }
        newObject = {
            "title": valueArr[0], //Title of todo
            "description": valueArr[1], //description of todo
            "dueDate": valueArr[2], //due date of todo
            "priority":"none", //priority of todo
            "completed":"incomplete" //completion of todo
        };
        if (newObject != "") {
        newList.push(newObject); //New ToDo pushed to toDos arr
        let newTodos = JSON.stringify(projectList);
        localStorage.setItem('projects', newTodos);
        var popUp = document.getElementById('popUp');
        popUp.remove();
        append();
        
        } else {
           return alert('Error');
        }
    }
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
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<span>Delete</span><span class="icon is-small"><i class="fas fa-times"></i></span>'
        deleteButton.setAttribute('class', 'button is-danger is-outlined deleteToDo');
        deleteButton.onclick = deleteTodo;

        //Priority button container
        const buttonContainer = document.createElement('div');
        buttonContainer.setAttribute('class', 'buttons is-right');
        
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
        box.appendChild(deleteButton);
        box.appendChild(title);
        box.appendChild(description);
        box.appendChild(dueDate);
        box.appendChild(buttonContainer);
        //Append to list
        thisBox.appendChild(box);
    }
}
