class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    push(data){
        const newNode=new Node(data)
        if(this.top ==null){
            this.top=newNode
        }else{
            newNode.next=this.top;
            this.top=newNode
        }
    }

    pop(){
        if(this.top == null){
            console.log("Stack underflow");
            return;
        }else {
            this.top = this.top.next;
        }
    }
    display(){
        let temp=this.top;
        while(temp !== null){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
const stack=new Stack()
stack.push(25);
stack.push(46);
stack.pop()
stack.display()