import './styles/style.css';
require('./styles/mystyles.scss');
const dayjs = require('dayjs');

//sets now to current date
const now = dayjs();
//sets format to e.g. Oct 03, 2020
const dateF = 'MMM DD, YYYY';
//Oct 03, 2020
document.getElementById('date').innerHTML = "Due on :" + now.format(dateF);