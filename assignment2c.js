
//Q11 ans:
const findMissingNumber = (number) =>{
    var num =number
    var len = num.length-1
    var missingnum=[]
    for(let i = 0; i<num[len];i++){
        if(i!==num[i]){
            missingnum.push(i)
        }
    }
    return missingnum
}
var number = [0,1,2,3,10]
var missingnumber = findMissingNumber(number)
console.log(`Q11 ans: The missing number from ${number} are ${missingnumber}.`)



//Q12 ans:
const removeDuplicate = (arr) => {
var num = []
    for(let  i =0; i<=arr.length-1; i++){
        if(!num.includes(arr[i])){
            num.push(arr[i])
        }
    }
    return num
}
var array =[1,2,3,4,5,5,1]
var numberWithoutDuplicates = removeDuplicate(array)
console.log(`Q12 ans: The array without any duplicates of array [${array}] is [${numberWithoutDuplicates}]`)



//Q13 ans:
const calculatePower = (x, n) =>{
    var sum = 1
    for(let i = 0; i<n; i++){
        sum*=x;
    }
    return sum
}
var x = 2;
var n = 5;
var calculation = calculatePower(x, n)
console.log(`Q13 ans: The power of ${x}^${n} is ${calculation}`)



//Q14 ans:
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0; 
  let j = 0; 

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log(`Q14 ans: The merged array of two sorted arrays ${array1} and ${array2} is ${mergedArray}`);



//Q15 ans:
const largestNumber = (numbers) => {
    numbers.sort((a, b) => a - b);
    numbers.pop();
    return numbers.pop();
  };
  
  const numbers = [4, 9, 2, 5, 1, 6, 8];
  const secondLargest = largestNumber(numbers);
  console.log(`Q15 ans: The second Largest number is ${secondLargest}`);
  