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
        if(this.top==null){
            this.top=newNode;
        }else{
            newNode.next=this.top;
            this.top=newNode;
        }
    }
    
    delete(n){
        if(n<=0){
            console.log("invalid position");
        }else{
            let current=this.top;
            let prev=null;
            let count=1
            while(current !== null && count !== n){
                prev=current;
                current=current.next;
                count++
            }
            if(prev == null){
                this.top=this.top.next;
            }else{
                prev.next=current.next
            }
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
stack.push(1)
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.delete(4)
stack.display()
