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
    newNode.next=this.top;
    this.top=newNode;
   }
   pop(){
    if(this.top==null){
        console.log("Stack underflow");
        return;
    }else{
        this.top=this.top.next;
    }
   }
   middle() {
    if (this.top == null) {
        console.log("Stack underflow");
        return;
    } else {
        let slow = this.top;
        let fast = this.top;
        let prev = null;

        while (fast !== null && fast.next !== null) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }
        if (prev === null) {
            this.top = this.top.next;
        } else {
            prev.next = slow.next;
        }
    }
}
   display(){
    let temp=this.top;
    while(temp !== null){
        console.log(temp.data);
        temp=temp.next
    }
   }

}

const stack=new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6)

console.log("Original Stack:");
// stack.pop()
stack.middle()
stack.display();