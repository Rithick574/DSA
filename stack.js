class Stack {
  constructor() {
    this.top = null;
  }

  Node = class {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  };


  push(data){
    const newNode=new this.Node(data)
    if(this.top == null){
      this.top=newNode
    }else{
      newNode.next=this.top;
      this.top=newNode
    }
  }

  pop(){
    if(this.top==null){
      console.log("stack underflow");
      return;
    }
    this.top=this.top.next;
  }

  display() {
    let current = this.top;
    while (current !== null) {
      console.log(current.data + '');
      current = current.next;
    }
  }
}


const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()

stack.display();
