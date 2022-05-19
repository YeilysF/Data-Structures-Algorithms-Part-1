//Doubly Linked List

class Node {
  constructor(value){
    this.value = value,
    this.prev = null,  //add new pointer 
    this.next = null
  }
}

//Doubly Linked List Implementation
class DoublyLinkedList {
  constructor(value){
   this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
 append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
 prepend(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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
    const unwantedNode = this.traverseToIndex(index);
    const prevNode = unwantedNode.prev;
    const nextNode = unwantedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10); //10
myLinkedList.append(5); //10 -> 5
myLinkedList.append(16); //10 -> 5 -> 16
myLinkedList.prepend(1); //1 -> 10 -> 5 -> 16
myLinkedList.printList();
myLinkedList.insert(2,20); //1 -> 10 -> 20 -> 5 -> 16
myLinkedList.printList();
myLinkedList.remove(2); //1 -> 10 -> 5 -> 16
myLinkedList.printList();

console.log(myLinkedList);
  
