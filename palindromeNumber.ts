function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
};

const x = -121;
console.log(isPalindrome(x));
