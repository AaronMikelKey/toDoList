export default function projectMinimize() {
    if (this.classList.contains('fa-angle-down')) {
    this.classList.remove('fa-angle-down');
    this.classList.add('fa-angle-right');
    let siblings = this.parentNode.childNodes;
    for (let i=2;i<siblings.length;i++){
        console.log(siblings[i])
        siblings[i].style.visibility = 'hidden';
    }
    } else {
        let siblings = this.parentNode.childNodes;
        for (let i=2;i<siblings.length;i++) {
        this.classList.remove('fa-angle-right');
        this.classList.add('fa-angle-down');
        siblings[i].style.visibility = 'visible';
        }
    }
}