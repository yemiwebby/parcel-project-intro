// console.log("This is just a test");

// const details = require('./data');

import { details } from './data';
import './style.scss';


var content = "My name is " + details.name + "." + " I am a " + details.designation + " and I love " + details.hobby;
document.getElementById('content').innerHTML = content;

