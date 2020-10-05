export default function newListItem() {
//Main box item
const box = document.createElement('div');
box.setAttribute('class', 'box');

//Angle <i> from font awesome
const faAngle = document.createElement('i');
faAngle.setAttribute('class', 'fas fa-angle-down fa-2x');
faAngle.setAttribute('aria-hidden', 'true');

//Unchecked box <i> from font awesome
const faCheck = document.createElement('i');
faCheck.setAttribute('class', 'far fa-square fa-2x');
faAngle.setAttribute('aria-hidden', 'true');

//Edit button
const faEdit = document.createElement('i');
faEdit.setAttribute('class', 'fas fa-edit fa-2x');
faEdit.setAttribute('aria-hidden', 'true');

//Title of the list item
const title = document.createElement('h4');
title.setAttribute('class', 'title is-4');

//description of the item
const description = document.createElement('p');

//Due date item
const dueDate = document.createElement('p');
dueDate.setAttribute('class', 'dueDate');

//Delete button
const deleteButton = document.createElement('a');
deleteButton.setAttribute('class', 'delete');

//Priority button container
const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class', 'buttons');

//Priority buttons
const high = document.createElement('button');
const medium = document.createElement('button');
const low = document.createElement('button');
high.setAttribute('class', 'button is-danger is-light is-small');
high.innerHTML = 'High';
medium.setAttribute('class', 'button is-warning is-light is-small');
medium.innerHTML = 'Medium';
low.setAttribute('class', 'button is-info is-light is-small');
low.innerHTML = 'Low';
//Appending to button container
buttonContainer.appendChild(high);
buttonContainer.appendChild(medium);
buttonContainer.appendChild(low);

//Put it together
box.appendChild(faAngle);
box.appendChild(faCheck);
box.appendChild(faEdit);
box.appendChild(title);
box.appendChild(description);
box.appendChild(dueDate);
box.appendChild(deleteButton);
box.appendChild(buttonContainer);

//Append to list
this.parentNode.appendChild(box);
}