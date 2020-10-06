import './styles/style.css';
require('./styles/mystyles.scss');
import existingProjects from './components/existingProjects';
import user from './components/user';
import newListItem from './components/createToDoBox';
import newProject from './components/createNewProject';

//DayJS requirements
const dayjs = require('dayjs');
const customParseFormat = require('./components/customParseFormat.js');
dayjs.extend(customParseFormat);

//sets now to current date
const now = dayjs();
//sets format to e.g. Oct 03, 2020
const dateF = 'MMM DD, YYYY';


user();



//Tests before writing module
document.getElementsByClassName('dueDate')[0].innerHTML = dayjs('2020-03-19').format(dateF);


const btn = document.createElement('button');
btn.innerHTML = "Add to do item";
btn.setAttribute('class', 'fas fa-plus');
btn.onclick = newListItem;
const firstProject = document.getElementById('project');
firstProject.appendChild(btn);


const newBtn = document.createElement('button');
newBtn.innerHTML = 'Add New Project';
newBtn.setAttribute('class', 'button is-success is-light');
newBtn.onclick = newProject;
document.getElementById('newButtons').appendChild(newBtn);
