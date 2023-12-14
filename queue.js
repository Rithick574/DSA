class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(data) {
      const newNode = new Node(data);
      if(this.rear == null){
        this.front=newNode;
        
      }else{
        this.rear.next=newNode;
      }
     
      this.rear=newNode;
    }

    dequeue(){
        if(this.front== null){
            console.log("epty@@");
            return;
        }
        this.front=this.front.next;

        if(this.front == null){
            this.rear=null;     
           }
    }

    display(){
        let current=this.front;
        if(this.front === null){
            console.log("empty");
        }
        while(current !== null){
            console.log(current.data);
            current=current.next;
        }
    }
  }
  

  const queue= new Queue;
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(5)
  queue.enqueue(6)

  queue.dequeue()
  queue.display()