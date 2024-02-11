function isPalindrome(num = -121) {
  return num.toString().split("").reverse().join("") == num;
}
