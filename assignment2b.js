
//Q6 ans:
const sumArray=(array) =>{
    lengthofArray = array.length;
    sum = 0
    i = 0
    do{
     sum+= array[i]
     i++;
    }while(array[i] <= lengthofArray)
return sum;
}
var array = [1,2,3,4]
var sum = sumArray(array)
console.log(`Q6 ans: the sum of array [${array}] is`, sum);



//Q7 ans: 
function titleCase(sentence) {
    const words = sentence.split(' ');
  
    const titleCaseWords = words.map(word => {
      if (word.length > 1) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word.toUpperCase();
      }
    });
  
    const titleCaseSentence = titleCaseWords.join(' ');
  
    return titleCaseSentence;
  }
  
  const inputSentence = "hello, i am krishna chaudhary";
  const titleCased = titleCase(inputSentence);
  console.log(`Q7 ans: The titleCase of the sentence "${inputSentence}" is "${titleCased}"`); 



//Q8 ans:
const countVowels =(string) =>{
count = 0;
  for(let i =0; i<=string.length-1; i++){
    if (['a', 'e', 'i', 'o', 'u'].includes(string[i])){
    count++
    }
  }
  return count
}
var string = "alpha"
var vowelCount = countVowels(string)
console.log(`Q8 ans: There are ${vowelCount} vowels in "${string}"`)



//Q9 ans:
const fibobacci = (number) =>{
    var fibo = [0,1];
    for(let i = 2; i <= number-1; i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo;
}
var number = 7
var fibo = fibobacci(number)
console.log(`Q9 and: The fibonacci series of first ${number} numbers are ${fibo}.`)
  


//Q10 ans:
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  const string1 = "eat";
  const string2 = "ate";
  
  if (areAnagrams(string1, string2)) {
    console.log(`Q10 ans: ${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`Q10 ans: ${string1} and ${string2} are not anagrams.`);
  }
  