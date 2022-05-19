//Google question - Find Recurring Number (next repeated number)
const arr1 = [2,5,1,2,3,5,1,2,4];
const arr2 = [2,1,1,2,3,5,1,2,4];
const arr3 = [2,3,4,5];

console.log('-----------------------------------------------');
console.log("Nested Loops: Approach 1 - O(n^2)");
console.log('-----------------------------------------------');
function RecurrentNum(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        console.log("Recurring Number is " + arr[j]);
        return arr[j];
      } 
    }
  }
  console.log("Recurring Number is undefined");
  return undefined;
}
RecurrentNum(arr1);
RecurrentNum(arr2);
RecurrentNum(arr3);

console.log('-----------------------------------------------');
console.log("Hash Table: Approach 2 - O(n) ");
console.log('-----------------------------------------------');

function RecurrentNum2(arr){
  //storing numbers in the array as key and the indexes as values
  let map = {};
  for(let i = 0; i < arr.length; i++){
    //if number/key is already in map then return recurring/repeated number, else add number to map.
    if(map[arr[i]] !== undefined){
      console.log("Recurring Number is " + arr[i]);
      return arr[i];
    } else{
      map[arr[i]] = i;
    }
    console.log(map);
  }
  console.log("Recurring Number is undefined");
 // console.log(map)
  return undefined;
}
RecurrentNum2(arr1);
RecurrentNum2(arr2);
RecurrentNum2(arr3);