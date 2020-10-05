//Setup basic user storage
export default function user() {
    var projects = {projects: {
        project1: {
            title: 'Title',
            description: 'Description of what the ToDo item is.',
            dueDate: 'Oct 23, 2020',
            priority: 'none',
            completed: 'incomplete'
            }
        }
    };
    var myJSON = JSON.stringify(projects);
    var userName = localStorage.getItem('name');
    if (userName === null) {
        userName = prompt("Please enter your name");
        localStorage.setItem('name', userName);
        localStorage.setItem('projects', myJSON);
        document.getElementById('userTitle').innerHTML = "Welcome  " + userName;
    } else {
        document.getElementById('userTitle').innerHTML = "Welcome back, " + userName;
        localStorage.setItem('projects', myJSON);
        console.log(JSON.parse(localStorage.projects));
    }
};