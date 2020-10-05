export default function storeLocal() {
    var projList = localStorage.getItem('projects');
    var length = projList.length;
    document.body.classList.remove('blur');
    document.getElementById('popUp').style.display = none;

    //store local stuff
}