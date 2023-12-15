class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    push(data){
        const newNode=new Node(data)
        if(this.top == null){
            this.top=newNode
        }
        else{
            newNode.next=this.top;
            this.top=newNode
        }
    }
    min(){
        let temp=this.top;
        let M=temp.data;
        while(temp !== null){
            if(M>temp.data){
                M=temp.data
            }
            temp=temp.next;
        }
        console.log(M);
    }
}

const stack= new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.min()