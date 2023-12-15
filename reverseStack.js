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
        const newNode=new Node(data);
        if(this.top == null){
            this.top=newNode
        }else{
            newNode.next=this.top;
            this.top=newNode
        }
    }
    pop(){
        if(this.top==null){
          return  console.log("empty");
        }
        const popp=this.top.data;
        this.top=this.top.next;
        return popp;
    }
}

function reverse(inputData){
const stack=new Stack()
for(i=0;i<inputData.length;i++){
    stack.push(inputData[i])
}
let reverseString=""
while(stack.top !== null){
    reverseString+= stack.pop()
}
return reverseString;
}


let string="hello"
let rev=reverse(string)
console.log(rev);