//Arrays
console.log('----------------------------------');
console.log("Arrays");
console.log('----------------------------------');

const strings = ['a', 'b', 'c', 'd']; //4*4 = 16 bytes of storage

// ['a','b','c','d']
console.log(strings);

//push - inserts e at the end of the array
strings.push('e'); //O(1)
//['a','b','c','d','e']
console.log(strings);

//pop - always removes last item in the array
strings.pop(); //O(1)
//['a','b','c','d']
console.log(strings);

//unshift - add x at the beginning of the array
strings.unshift('x'); //O(n)
//['x','a','b','c','d']
console.log(strings);

//splice - go to index 2 and add 'mid'
strings.splice(2, 0, 'mid'); //O(n)
//['x','a','mid','b','c','d']
console.log(strings);

console.log('\n----------------------------------');
console.log("Array Implementation")
console.log('----------------------------------');
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
  }
  pop(){
    //lastItem = this.data[this.length-1]
    delete this.data[this.length-1];
    this.length--;
  }

  delete(index){
    //const item = this.data[index];
    this.shiftItems(index);
  }
  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push(1);
newArr.push(2);
newArr.push(3);
console.log(newArr);
newArr.pop()
console.log(newArr);
newArr.delete(0);
console.log(newArr);

console.log('\n----------------------------------');
console.log("Reference Type")
console.log('----------------------------------');

//Advanced Topics: Reference Type
var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 };
var num1 = 1;
var num2 = 1;

function compareObjects() {
  let ex1 = obj1 === obj2;
  let ex2 = obj1 === obj3;
  let ex3 = num1 === num2;

  //true because obj2 makes reference of obj1
  console.log(ex1);
  //false because they have same values but are different objects (data type)
  console.log(ex2);
  //same value and data type
  console.log(ex3);
}

compareObjects();

console.log('\n----------------------------------');
console.log("Instantiation")
console.log('----------------------------------');

class Player{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  //methods
  introduce(){
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player{
  constructor(name,type){
    //use super when implementing extends
    super(name,type);
  }
  play(){
    console.log(`weee I am a ${this.type}`);
  }
}
const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Dark Magic');

