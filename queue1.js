class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}


class queLinkedlist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    enqueue(data){
        const newNode=new Node(data)
        if(this.head === null){
            this.head=newNode;
        }else{
            this.tail.next=newNode; 
        }
        this.tail= newNode;
        this.size++;    
    }

    dequeue(data){
        if(this.head === null){
            return null;
        }else{
            let temp=this.head;
            while(temp.data !== data){
                temp=temp.next;
            }
            // this.head=this.head.next;
            
        }
        
    }

    isEmpty(){
        return this.head === 0
    }

    display(){
      let temp=this.head;
        if(this.head === null){
            console.log("its empty");
        }else{
            while(temp !== null){
                console.log(temp.data);
                temp=temp.next;
            }
        }
    }

}


const queue= new queLinkedlist();
queue.enqueue(10);
queue.enqueue(29)
queue.enqueue(32)
queue.enqueue(15)
queue.enqueue(16)
queue.enqueue(37)
queue.enqueue(75)
queue.dequeue(15)
queue.display()
// console.log(queue);