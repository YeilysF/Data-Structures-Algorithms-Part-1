// Queues with Linked List
console.log('----------------------------------');
console.log("Queue with Linked List");
console.log('----------------------------------');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() { //first item added
    if (this.length > 0) {
      console.log(this.first);
      return this.first;
    }
    console.log("Queue is empty");
    return this;
  }
  enqueue(value) { //add item at the end of the list
    const newNode = new Node(value);
    
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() { //remove first inserted item
    if(this.length === 0){
      console.log("Queue is empty");
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue);