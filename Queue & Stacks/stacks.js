//Stacks with Linked List
console.log('----------------------------------');
console.log("Stack with Linked List");
console.log('----------------------------------');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(this.length > 0){
      console.log(this.top);
      return this.top;
    }
    console.log("Stack is empty");
    return null;
  }
  push(value){
    const newNode = new Node(value);
    
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length === 0){
      console.log("Stack is empty");
      return null;
    } 
    if(this.top === this.bottom){
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty(){
    
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);

//Stacks with Arrays
console.log('\n\n----------------------------------');
console.log("Stack with Array");
console.log('----------------------------------');

class StackArr {
  constructor(){
    this.array = [];
  }
  peek() {
    const lastItem = this.array[this.array.length - 1];
    console.log(lastItem);
    return lastItem;
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
    this.array.pop();
    return this;
  }
}

const myStackArr = new StackArr();
myStackArr.push('google');
myStackArr.push('udemy');
myStackArr.push('discord');
myStackArr.peek();
myStackArr.pop();
myStackArr.pop();
myStackArr.pop();

console.log(myStackArr);