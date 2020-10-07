import newListItem from './createToDoBox';
import projectMinimize from './projectMinimize';
import editBox from './editBox';

export default function existingProjects() {
    //Array of existing projects
    let oldList = JSON.parse(window.localStorage.projects);
    console.log('Array of projects:')
    console.log(oldList); //Array of projects
    for (let i=0;i<oldList.length;i++){
        //list of existing projects
        let projectName = oldList[i].project;
        console.log('Project title:');
        console.log(projectName);
        //Project div
        const projectBox = document.createElement('div');
        projectBox.setAttribute('class', 'project');
        projectBox.setAttribute('id', projectName);
        //Minimizing button
        const faAngle = document.createElement('i');
        faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
        faAngle.setAttribute('aria-hidden', 'true');
        faAngle.onclick = projectMinimize;
        //Project title
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'title is-3');
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
        let list = oldList[i].object; //array of ToDos
        console.log('Array of toDos (list)');
        console.log(list);
        for (let j=0;j<list.length;j++) {
            //Main box item
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            //Angle <i> from font awesome
            const faAngle = document.createElement('i');
            faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
            faAngle.setAttribute('aria-hidden', 'true');
            //Unchecked box <i> from font awesome
            const faCheck = document.createElement('i');
            if (list[j].completed === 'incomplete') {
                faCheck.setAttribute('class', 'far fa-square fa-2x');
            } else {
                faCheck.setAttribute('class', 'far fa-check-square fa-2x')
            }
            faAngle.setAttribute('aria-hidden', 'true');

            //Edit button
            const faEdit = document.createElement('i');
            faEdit.setAttribute('class', 'fas fa-edit fa-2x');
            faEdit.setAttribute('aria-hidden', 'true');
            faEdit.onclick = editBox;

            //Title of the list item
            const title = document.createElement('h4');
            title.setAttribute('class', 'title is-4');
            title.innerHTML = list[j].title;

            //description of the item
            const description = document.createElement('p');
            description.innerHTML = list[j].description;

            //Due date item
            const dueDate = document.createElement('p');
            dueDate.setAttribute('class', 'dueDate');
            dueDate.innerHTML = list[j].dueDate;

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
            projectBox.appendChild(box);
        }
        //Append to page
        document.getElementById('main').appendChild(projectBox);
        }
}