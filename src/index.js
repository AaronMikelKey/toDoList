import './styles/style.css';
require('./styles/mystyles.scss');
import newListItem from './components/createToDoBox';

//DayJS requirements
const dayjs = require('dayjs');
const customParseFormat = require('./components/customParseFormat.js');
dayjs.extend(customParseFormat);

//sets now to current date
const now = dayjs();
//sets format to e.g. Oct 03, 2020
const dateF = 'MMM DD, YYYY';

document.getElementsByClassName('dueDate')[0].innerHTML = dayjs('2020-03-19').format(dateF);

//Test button
const btn = document.createElement('button');
btn.innerHTML = "Add to do item";
btn.setAttribute('class', 'fas fa-plus');
btn.onclick = newListItem;
document.getElementsByClassName('project')[0].appendChild(btn);