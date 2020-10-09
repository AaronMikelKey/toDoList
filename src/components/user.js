import existingProjects from './existingProjects';
//Setup basic user storage or retrieve existing user storage
export default function user() {
    var projects = 
        [{"project":"My First Project", //Example project
            "toDos": [ //array of todos, subject to change
                {"title":"Example ToDo Name", //Title of todo
                "description":"Description of what I want to do. \
                Or maybe something that needs to be done first. \
                Could also just be a reminder of why you want to do this.", //description of todo
                "dueDate":"12/31/2021", //due date of todo
                "priority":"none", //priority of todo
                "completed":"incomplete"}, //completion of todo
            ],
        }];
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