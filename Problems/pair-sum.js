let array1 = [1,2,3,9];
let array2 = [6,2,4,4,0,5,9,7,1,3,8];
let array3 = [5,6,7,8];
let array4 = [6,2];
let array5 = [9,3,5,2,1,8,0,6,7,];
let array6 = [2,1,5,3,8,6,9];
let array7 = [3,5,2,1,4,8,6,7,4];
let sum = 6;
let array8 = [3,2,3];

console.log("Sorting Arrays")

function SortArray(arr){

  for(let i = 0; i < arr.length; i++){
    let j = i + 1;
    let temp = arr[i];

    if(temp > arr[j]){
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  console.log("New Sorted Array: " + arr + "\n");
}
console.log("Unsorted Array: " + array6);
//numbers greater than 9
//console.log("Old Sorted Array: " + array6.sort((a, b) => a - b));
SortArray(array6);

console.log("\n--------------------------------------------")
console.log("--------------------------------------------")
console.log("First Approach: O(n^2)")

function findPair(array){
  console.log("\nArray: " + array);
  let found = false;
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if (array[i] + array[j] == sum){
        console.log("("+ array[i] + "," + array[j] + ")")
        found = true;
      } 
    }
  }
  if(found == false){
    console.log("No pairs");
  }
}

findPair(array1);
findPair(array2);
findPair(array3);
findPair(array4);
findPair(array5);

console.log("\n--------------------------------------------")
console.log("--------------------------------------------")
console.log("\nSecond Approach: O(n)")

function findPairs(array){
  let found = false;
  let j = array.length - 1;
  array.sort();
  
  console.log("\nArray: " + array);
  
  for(let i = 0; i < array.length; i++){

    if(array[j] > sum){
      j--;
    }
  
    if(array[i] + array[j] == sum && j > i){
      console.log("("+ array[i] + "," + array[j] + ")")
      j--;
      found = true;
    } 
  }

  if(found == false){
    console.log("No pairs");
  }
}

findPairs(array1);
findPairs(array2);
findPairs(array3);
findPairs(array4);
findPairs(array5);

console.log("\n--------------------------------------------")
console.log("--------------------------------------------")
console.log("\nThird Approach: O(n)")

function HasPairWithSum(array){
  SortArray(array);
  console.log("\nArray After: " + array);

  let found = false;
  let low = 0;
  let high = array.length - 1;

  console.log("low = " + low + " high = " + high);

  while(low < high){
    let s = array[low] + array[high];
    
    if(s == sum){
      console.log("("+ array[low] + "," + array[high] + ")")
      low++;
      found = true;
    } 
    high--;
  }
  
    if(found == false){
    console.log("No pairs\n");
  }
}

HasPairWithSum(array1);
HasPairWithSum(array2);
HasPairWithSum(array3);
HasPairWithSum(array4);
HasPairWithSum(array5);
HasPairWithSum(array8);


