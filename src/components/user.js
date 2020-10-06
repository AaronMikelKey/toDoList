import existingProjects from './existingProjects';
//Setup basic user storage or retrieve existing user storage
export default function user() {
    var projects = [];
    
    projects.push(
        {
        'project': 'Project Title',
        'object': {
            'title': 'Title',
            'description': 'Description of what the ToDo item is.',
            'dueDate': 'Oct 23, 2020',
            'priority': 'none',
            'completed': 'incomplete'
            }
        }
    );
    var myJSON = JSON.stringify(projects);
    var userName = window.localStorage.getItem('name');
    if (userName === null) {
        userName = prompt("Please enter your name");
        window.localStorage.setItem('name', userName);
        window.localStorage.setItem('projects', myJSON);
        existingProjects();
        document.getElementById('userTitle').innerHTML = "Welcome  " + userName;
    } else {
        document.getElementById('userTitle').innerHTML = "Welcome back, " + userName;
        existingProjects();
    }
};