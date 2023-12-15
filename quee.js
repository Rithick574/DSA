class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class queue{
constructor(){
    this.head=null;
    this.tail=null;
    this.size=0;
}
enqueue(data){
    const newNode=new Node(data);
    if(this.head == null){
        this.head=newNode
    }else{
        this.tail.next=newNode;
    }
    this.tail=newNode;
    this.size++;
}
dequeue(data){
        if(this.head==null){
            console.log("empty");
            return;
        }
        if(this.head.data == data){
            this.head = this.head.next;
            return;
        }
        let temp=this.head;
        while(temp.next !== null && temp.next.data !== data){
            temp=temp.next;
        }
        if(temp.next == null){
            console.log("element not found");
            return;
        }
        temp.next=temp.next.next;
}

display(){
    let temp=this.head;
    while(temp !== null){
        console.log(temp.data);
        temp=temp.next;
    }
}
}


const que=new queue()
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.enqueue(50)
que.enqueue(60)
que.dequeue(30)
que.display()
