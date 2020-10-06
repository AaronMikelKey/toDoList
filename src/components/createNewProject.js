import newListItem from './createToDoBox';
import projectMinimize from './projectMinimize'

export default function newProject() {
    //Project div
    const projectBox = document.createElement('div');
    projectBox.setAttribute('class', 'project');
    //Minimizing button
    const faAngle = document.createElement('i');
    faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
    faAngle.setAttribute('aria-hidden', 'true');
    faAngle.onclick = projectMinimize;
    //Project title
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'title is-3');
    const projectName = prompt('Enter project name:');
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
    //Append to page
    document.getElementById('main').appendChild(projectBox);
    //Append to localStorage 
    const newProject = {project: {
        title: projectName,
         description: 'Description of what the ToDo item is.',
        dueDate: 'Oct 23, 2020',
        priority: 'none',
        completed: 'incomplete'}
    };
    let oldList = JSON.parse(window.localStorage.projects);
    oldList.push(newProject);
    oldList = JSON.stringify(oldList);
    window.localStorage.setItem('projects', oldList);
    console.log(JSON.parse(window.localStorage.projects));
}