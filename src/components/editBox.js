import storeLocal from "./storeLocal";

export default function editBox() {
    document.body.classList.add('.blur');
    const popUp = document.createElement('div');
    popUp.setAttribute('id', 'popUp');

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('id', 'title');
    title.setAttribute('required', 'required');
    title.setAttribute('placeholder', 'Title');

    const description = document.createElement('textarea');
    description.setAttribute('id', 'description');
    description.setAttribute('placeholder', 'Description');

    const date = document.createElement('input');
    date.setAttribute('type', 'text');
    date.setAttribute('id', 'date');
    date.setAttribute('required', 'required');
    const dateRegExp = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    date.setAttribute('pattern', 'dateRegExp');
    date.setAttribute('placeholder', 'DD/MM/YYYY');

    const submit = document.createElement('button');
    submit.setAttribute('class', 'button is-success is-blur');
    submit.innerHTML = "Submit";
    submit.onclick = storeLocal;

    popUp.appendChild(title);
    popUp.appendChild(description);
    popUp.appendChild(date);
    popUp.appendChild(submit);
    popUp.classList.add('.noBlur');

    document.body.appendChild(popUp);
}