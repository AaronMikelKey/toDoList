export default function projectMinimize() {
    const displayArr = ['inline-block', 'block'];
    if (this.classList.contains('fa-angle-down')) {
    this.classList.remove('fa-angle-down');
    this.classList.add('fa-angle-right');
    let siblings = this.parentNode.childNodes;
    for (let i=2;i<siblings.length;i++){
        siblings[i].style.display = 'none';
    }
    } else {
        let siblings = this.parentNode.childNodes;
        for (let i=3;i<siblings.length;i++) {
        this.classList.remove('fa-angle-right');
        this.classList.add('fa-angle-down');
        siblings[2].style.display = 'inline-block';
        siblings[i].style.display = 'block';
        }
    }
}