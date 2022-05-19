// Linked Lists - Singly

class Node {
  constructor(value){
    this.value = value,
    this.next = null
  }
}

//Singly Linked List Implementation
class LinkedList {
  
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  
  printList(){
    const arr = [];
    let currentNode = this.head;

    while(currentNode !== null){
      arr.push(currentNode.value);
      currentNode = currentNode.next
    }
    console.log(arr);
  }
  
  insert(index, value){
    if(index >= this.length){
      return this.append(value);
    }
    
    const newNode = new Node(value);
    const prev = this.traverseToIndex(index-1);
    const pointer = prev.next;

    prev.next = newNode;
    newNode.next = pointer;
    
    this.length++;
    return this;
  }
  
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  
  remove(index){
    if(index >= this.length){
      console.log("Index is not valid");
    }
    
    const prev = this.traverseToIndex(index-1);
    const unwantedNode = prev.next;
    prev.next = unwantedNode.next;
    this.length--;
    return this;
  }
  reverse(){
    if(this.length === 1){
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    
    return this;
  }
}

const myLinkedList = new LinkedList(10); //10
myLinkedList.append(5); //10 -> 5
myLinkedList.append(16); //10 -> 5 -> 16
myLinkedList.prepend(1); //1 -> 10 -> 5 -> 16
myLinkedList.printList();
myLinkedList.insert(2,20); //1 -> 10 -> 20 -> 5 -> 16
myLinkedList.printList();
myLinkedList.remove(2); //1 -> 10 -> 5 -> 16
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
//console.log(myLinkedList);




