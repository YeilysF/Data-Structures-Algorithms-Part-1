//Hash Function - Example
let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: {function(){
    console.log('ahhhhhh!');
  }}
}

user.age; // O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream; //O(1)

const a = new Map();
const b = new Set();

//HashTable
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //hash function
  _hash(key) { //_ standard syntax for private methods
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      //character code for each letter - encoding
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
   
  }
  
  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key,value]);
    return this.data;
  }
  
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key){
          console.log(currentBucket);
          return currentBucket;
        }
      }
    }
    return undefined;
  }
  
  keys(){
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        console.log(this.data[i][0][0])
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
  
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes',10000); // [['grapes',10000]]
myHashTable.set('apples',54);
myHashTable.set('oranges',5);
myHashTable.keys();