
//Q1 ans:
const reverseString = (string) =>{
    let reversedString = "";
    for(let i=string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

var string = "krishna";
var reverseStr = reverseString(string)
console.log( `Q1 ans: The reverse of ${string} is`, reverseStr);



//Q2 ans:
const findFactorial = (number) =>{
    let fact = 1
    do{
        fact *= number;
        number--;
    }while(number!==0)
    return fact;
}

var number = 5;
var factorial = findFactorial(number)
console.log( `Q2 ans: The factorial of ${number} is`, factorial);



//Q3 ans:
const findPalindrone = (str) =>{
    let reversedString = "";
    for(let i=str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
var str = "dad";
var revStr = findPalindrone(str)
if(str === revStr){
    console.log(`Q3 ans: ${revStr} is a palindrone number of`, str)
}else{
    console.log(`Q3 ans: ${revStr} isn't a palindrone number of`, str)
}



//Q4 ans:
const findLongestWord = (sentence) =>{
    words = sentence.split(" ")
    max_words = " "
    max_length = 0;
    for(let i = 0; i<=words.length - 1; i++){
        if(words[i].length > max_length){
            max_words = words[i]
            max_length = words[i].length
        }
    }
    return max_words
}
var sentence = "Hello my name is Krishna Chaudhary"
var longestWord = findLongestWord(sentence);
console.log(`Q4 ans: ${longestWord} is a longest word from sentence : "${sentence}"`)



//Q5 ans:
const fizzBuzz = () =>{
    console.log("Q5 ans:")
    for (let i = 1; i <= 100; i++) {
        switch (true) {
          case i % 3 === 0 && i % 5 === 0:
            console.log(i, "is FizzBuzz");
            break;
          case i % 3 === 0:
            console.log(i, "is Fizz");
            break;
          case i % 5 === 0:
            console.log(i, "is Buzz");
            break;
          default:
            console.log(i,"is none of them");
        }
      }
}
fizzBuzz();

