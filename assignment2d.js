
//Q16 ans:
const reverseWordOfSentence = (sentence) =>{
    var words = sentence.split(" ")
    var reversedWords =[]
    for(let i = 0 ; i<= words.length-1; i++){
        reversedWords.unshift(words[i])
    }
    return reversedWords.join(' ')
}
var sentence = "Hello my name is Krishna Chaudhary"
var reverseSentence = reverseWordOfSentence(sentence);
console.log(`Q16 ans: The reverse of ${sentence} is ${reverseSentence}`)



//Q17 ans:
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    return emailRegex.test(email);
  }
  
  var email = "test@example.com";
  var check = isValidEmail(email);
  console.log("Q17 ans: Is the given mail is valid ?",check) 



//Q18 ans:
const findIntersectionOfTwoArray = (arr1, arr2) =>{
  var similar = []
  for(let i = 0; i<= arr1.length-1; i++){
    for(let j = 0; j<=arr2.length-1; j++){
        if(arr1[i]== arr2[j])
        similar.push(arr2[j])
    }
  }
  return similar

}
var arr1 = [1,2,3,4,5]
var arr2 = [2,3,8,9]
var intersectionOfTwoArray = findIntersectionOfTwoArray(arr1,arr2)
console.log(`Q18 ans: The intersection of ${arr1} and ${arr2} is ${intersectionOfTwoArray}`)



//Q19 ans:
function checkBalanced(str) {
    const stack = [];
    const bracketPairs = {
      "(": ")",
      "[": "]",
      "{": "}",
    };
  
    for (let char of str) {
      if (bracketPairs[char]) {
        stack.push(char);
      } else {
        const lastOpenBracket = stack.pop();
  
        if (bracketPairs[lastOpenBracket] !== char) {
          return false; 
        }
      }
    }
  
    return stack.length === 0;
  }
  
 var isBalanced =checkBalanced("{[()]}"); 
 console.log('Q19 ans: Is the given brackets are balance ?', isBalanced)

  
