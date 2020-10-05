export default function newProject() {
    const projectBox = document.createElement('div');
    projectBox.setAttribute('class', 'project');
    const faAngle = document.createElement('i');
    faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
    faAngle.setAttribute('aria-hidden', 'true');
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'title is-3');
    const projectName = prompt('Enter project name:');
    h3.innerHTML = projectName;
    projectBox.appendChild(faAngle);
    projectBox.appendChild(h3);
    projectBox.setAttribute('id', projectName);
    document.getElementById('main').appendChild(projectBox);
}