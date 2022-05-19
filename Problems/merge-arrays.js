//Arrays
console.log('----------------------------------');
console.log("Merge Two Sorted Arrays: Approach 1 - O(n)");
console.log('----------------------------------');

//merge two sorted arrays into one sorted array
//ANS: [0,3,4,4,6,30,31]
let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

let array3 = [4, 6, 30];
let array4 = [3, 5, 20];

let array5 = [1, 6, 30,40];
let array6 = [1, 2, 3, 5, 7, 10, 20, 60,];
let array7 = [];

function mergeArrays(arr1, arr2) {
  console.log("Array 1: " + arr1 + " Array 2: " + arr2);

  const sortedArr = [];
  let lengthArr1 = arr1.length;
  let lengthArr2 = arr2.length;

  let lengthArr = lengthArr1 + lengthArr2;
  
  let j = 0;
  let m = 0;
  let arrayItems = 0;

  while(arrayItems < lengthArr) {
    //console.log(arr1[j],arr2[m]);
    if (arr2[m] === undefined || arr1[j] < arr2[m]) {
      sortedArr.push(arr1[j]);
      j++;
    } else {
      sortedArr.push(arr2[m]);
      m++;
    }
    arrayItems++;
  }
    console.log(sortedArr);
    console.log();
}

mergeArrays(array1, array2);
mergeArrays(array3, array4);
mergeArrays(array5, array6);


console.log('----------------------------------');
console.log("Merge Two Sorted Arrays: Approach 2 - O(n^2)");
console.log('----------------------------------');

function mergeSortedArrays(arr1, arr2){
  console.log("Array 1: " + arr1 + " Array 2: " + arr2);
  
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  //Check Input
  if(arr1.length === 0){
    console.log(arr2);
  }
  if(arr2.length === 0){
    console.log(arr1);
  }

  //check there is at least one item in array 1 OR array 2
  while(arr1Item || arr2Item){
    //console.log(arr1Item,arr2Item);
    //replace !arr2Item with arr2Item == undefined
    if(arr2Item === undefined || arr1Item < arr2Item){
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
    //console.log(mergedArray);
  }

  console.log(mergedArray);
  console.log();
}

mergeSortedArrays(array1,array2);
mergeSortedArrays(array3,array4);
mergeSortedArrays(array5,array6);