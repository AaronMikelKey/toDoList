export default function toDoMinimize() {
    //Get toDo box
    const thisBox = this.parentNode;
    const thisId = thisBox.id;
    //get Project div and id
    const thisProject = thisBox.parentNode;
    const projId = thisProject.id;

    if (this.classList.contains('fa-angle-down')) {
        this.classList.remove('fa-angle-down');
        this.classList.add('fa-angle-right');
        let siblings = this.parentNode.childNodes;
        //Need to hide 2,4,5,6,7
        //0 {angle} = inline-block
        //1 {check} = inline-block
        //2 {edit} = inline-block
        //3 {delete} = inline-block 
        //4 {title} = block 
        //5 {description} = block 
        //6 {dueDate} = block 
        //7 {buttons} = flex 
        for (let i=2;i<siblings.length;i++){
            if (i === 4) { siblings[i].style.display = 'inline-block'; continue;}
                siblings[i].style.display = 'none';
        }
        } else {
            let displayArr = [
                'inline-block', 
                'inline-block', 
                'inline-block', 
                'inline-block', 
                'block', 
                'block', 
                'block', 
                'flex'
            ]
            let siblings = this.parentNode.childNodes;
            for (let i=0;i<siblings.length;i++) {
                this.classList.remove('fa-angle-right');
                this.classList.add('fa-angle-down');
                siblings[i].style.display = displayArr[i];
            }
        }
}