import newListItem from './createToDoBox';
import projectMinimize from './projectMinimize';
import editBox from './editBox';
import deleteTodo from './deleteTodo';
import priority from './priority';
import checked from './checked';
import toDoMinimize from './toDoMinimize';
const dayjs = require('dayjs');
const customParseFormat = require('./customParseFormat');
dayjs.extend(customParseFormat);
const dateF = 'MMM DD, YYYY';

export default function existingProjects() {
    //Array of existing projects
    let projectList = JSON.parse(window.localStorage.projects);
    for (let i=0;i<projectList.length;i++){
        //list of existing projects
        let projectName = projectList[i].project;
        //Project div
        const projectBox = document.createElement('div');
        projectBox.setAttribute('class', 'project');
        projectBox.setAttribute('id', projectName);
        //Minimizing button
        const faAngle = document.createElement('i');
        faAngle.setAttribute('class', 'fas fa-angle-down fa-2x mr-3');
        faAngle.setAttribute('aria-hidden', 'true');
        faAngle.onclick = projectMinimize;
        //Project title
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'title is-3 mr-3');
        h3.innerHTML = projectName;
        //Button to add todo item
        const btn = document.createElement('button');
        btn.innerHTML = "Add to do item";
        btn.setAttribute('class', 'fas fa-plus');
        btn.onclick = newListItem;
        //Put it together
        projectBox.appendChild(faAngle);
        projectBox.appendChild(h3);
        projectBox.setAttribute('id', projectName);
        projectBox.appendChild(btn);
        //Append toDos
        let list = projectList[i].toDos; //array of ToDos
        for (const item of list) {
            //Main box item
            const thisToDo = item.title;
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('id',thisToDo);
            //Angle <i> from font awesome
            const faAngle = document.createElement('i');
            faAngle.setAttribute('class', 'fas fa-angle-down fa-2x mr-3');
            faAngle.setAttribute('aria-hidden', 'true');
            faAngle.onclick = toDoMinimize;

            //Unchecked box <i> from font awesome
            const faCheck = document.createElement('i');
            if (item.completed === 'incomplete') {
                faCheck.setAttribute('class', 'far fa-square fa-2x mr-3');
            } else {
                faCheck.setAttribute('class', 'far fa-check-square fa-2x mr-3')
            }
            faCheck.setAttribute('aria-hidden', 'true');
            faCheck.onclick = checked;

            //Edit button
            const faEdit = document.createElement('i');
            faEdit.setAttribute('class', 'fas fa-edit fa-2x mr-3');
            faEdit.setAttribute('aria-hidden', 'true');
            faEdit.onclick = editBox;


            //Title of the list item
            const title = document.createElement('h4');
            title.setAttribute('class', 'title is-4');
            title.innerHTML = item.title;

            //description of the item
            const description = document.createElement('p');
            description.innerHTML = item.description;

            //Due date item dayjs('2020-03-19').format(dateF)
            const dueDate = document.createElement('p');
            dueDate.setAttribute('class', 'dueDate');
            dueDate.innerHTML = dayjs(item.dueDate).format(dateF);

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
            // item.priority = "High"
            if (item.priority == "High") {
            high.setAttribute('class', 'button is-danger');
            } else {
                high.setAttribute('class', 'button is-danger is-light is-small');
            }
            high.innerHTML = 'High';
            high.onclick = priority;
            if (item.priority == "Medium") {
            medium.setAttribute('class', 'button is-warning');
            } else {
                medium.setAttribute('class', 'button is-warning is-light is-small')
            }
            medium.innerHTML = 'Medium';
            medium.onclick = priority;
            if (item.priority == "Low") {
                low.setAttribute('class', 'button is-info');
            } else {
            low.setAttribute('class', 'button is-info is-light is-small');
            }
            low.innerHTML = 'Low';
            low.onclick = priority;
            //Appending to button container
            buttonContainer.appendChild(high);
            buttonContainer.appendChild(medium);
            buttonContainer.appendChild(low);

            //Put it together
            box.appendChild(faAngle);
            box.appendChild(faCheck);
            box.appendChild(faEdit);
            box.appendChild(deleteButton);
            box.appendChild(title);
            box.appendChild(description);
            box.appendChild(dueDate);
            box.appendChild(buttonContainer);

            //Append to list of to dos
            projectBox.appendChild(box);
        }
        //Append to page
        document.getElementById('main').appendChild(projectBox);
        }
}