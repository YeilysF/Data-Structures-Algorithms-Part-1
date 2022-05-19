const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','x'];
const arr3 = ['z','y','i'];

console.log("--------------------------------------------");
console.log("--------------------------------------------\n");
console.log("First Approach: O(n^2)");

function FindCommonItems(arrA,arrB){

  let isCommon = false;
  let items = [];
  let it = 0;

  console.log("\nArray1: " + arrA);
  console.log("Array2: " + arrB);

  console.log("Are there common items?")
  
  for(let i = 0; i < arrA.length; i++){
    for(let j = 0; j < arrB.length; j++){
      if(arrA[i] === arrB[j]){
        isCommon = true;
        items[it++] = arrA[i];
      }
    }
  }

  if(isCommon){
    console.log("True [" + items + "]")
  } else{
    console.log("False");
  }

}

FindCommonItems(arr1,arr2);
FindCommonItems(arr1,arr3);

console.log("\n--------------------------------------------");
console.log("--------------------------------------------\n");
console.log("Second Approach: O(n)");

function FindSimilarItems(arrA,arrB){
  //loop through first array and create object where properties === items in the array.
  let isCommon = false;
  let items = [];
  let it = 0;
  
  let map = {};

  for(let i = 0; i < arrA.length; i++){
    if(!map[arrA[i]]){
      const item = arrA[i];
      map[item] = true;
    }
  }

  for(let j = 0; j < arrB.length; j++){
    if(map[arrB[j]]){
      isCommon = true;
      items[it++] = arrB[j];
    }
  }

    if(isCommon){
    console.log("True [" + items + "]")
  } else{
    console.log("False");
  }
  
//loop through second array and check if item in second array exists on created object.

}
FindSimilarItems(arr1,arr2);
FindSimilarItems(arr1,arr3);

console.log("\n--------------------------------------------");
console.log("--------------------------------------------\n");