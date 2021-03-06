/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE




var isPalindrome = function(str){
  var strReversed = str.split('').reverse().join('');
  return str === strReversed;
};

console.log(isPalindrome("racecar"));


var palindromeInSentence = function(str){
  strArr = str.replace(/^a-zA-z/+g, '').split(' ')
  for(var i = 0; i < strArr.length; i++){
    if(isPalindrome(strArr[i]){
      return true;
    }
  }
}
