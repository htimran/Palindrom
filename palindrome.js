function isPalindrome(str){
  let result = true;
  let count = str.length - 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] != str[count]){
     result = false;
    }    
    count--;
  }
  return result;
}
console.log(isPalindrome("wow") ? "The Given String is a Palindrome" : "This Given String is not a Palindrome");
