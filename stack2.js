class Stack{
    constructor(){
        this.stack=[]  
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        
       return this.stack.pop()
    }

    peek(){
        
       return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length;
    }
}


const stack = new Stack()
stack.push(10)
stack.push(12)
stack.push(13)
stack.push(15)
stack.push(17)

stack.pop()
console.log(stack.peek());

console.log(stack);