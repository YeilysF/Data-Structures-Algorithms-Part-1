//Reverse a string
console.log('------------------------------------');
console.log("Reversing a String: Approach 1 - O(n)");
console.log('------------------------------------');

const str1 = 'Testing'; //Reverse: gnitset

function reverse(str){ 
  console.log(str);
  const revString = [];
  
  let j = str.length - 1;
  for(let i = 0; i < str.length; i++){
    revString[i] = str[j];
    j--;
  }
  const rev = revString.join('');
  console.log(rev + "\n");
}

reverse(str1);
reverse("crazy person");
reverse('why are you here?');

console.log('------------------------------------');
console.log("(Udemy ANS): Approach 2 - O(n)");
console.log('------------------------------------');

function reverseString(str){
  console.log(str);
  //check input if undefined (no string)
  //check input if string is of only one character
  //check that the input is of type string
    if(!str || str.length < 2 || typeof str !== 'string'){
    console.log("Not a valid input");
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  
  const backString = backwards.join('');
  console.log(backString + "\n");

}

reverseString(str1);
reverseString("testing");
reverseString('how are you?');

console.log('------------------------------------');
console.log("(Udemy ANS - Clean Version): Approach 3 - O(n)");
console.log('------------------------------------');

function reverseString2(str){
  console.log(str);
  const string = str.split('').reverse().join('');
  console.log(string + '\n');
}

reverseString2(str1);
reverseString2("testing");
reverseString2('how are you?');

console.log('------------------------------------');
console.log("(Udemy ANS - Clean Version): Approach 4 - O(n)");
console.log('------------------------------------');

const reverseString3 = str => [...str].reverse().join('');

reverseString3(str1);
reverseString3("testing");
reverseString3('how are you?');
