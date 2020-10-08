import existingProjects from './existingProjects';
//Setup basic user storage or retrieve existing user storage
export default function user() {
    var projects = 
        [{"project":"Project Title", //Example project
            "toDos": [ //array of todos, subject to change
                {"title":"Title 2", //Title of todo
                "description":"Description 2", //description of todo
                "dueDate":"01/02/2021", //due date of todo
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