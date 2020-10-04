import './styles/style.css';
require('./styles/mystyles.scss');
const dayjs = require('dayjs');
const customParseFormat = require('./components/customParseFormat.js');
dayjs.extend(customParseFormat);

//sets now to current date
const now = dayjs();
//sets format to e.g. Oct 03, 2020
const dateF = 'MMM DD, YYYY';
//Oct 03, 2020
document.getElementById('dueDate').innerHTML = dayjs('2020-03-19').format(dateF);