// https://twitter.com/disjukr/status/1640020585031036928?t=QEeSawshxTl-XmBZ1fnqug&s=19
const array = [1, [2, 3, [4, 5]]];
const reverseArray = [];
for(let i=0; i<array.length; i++) {
  reverseArray.unshift(reverse(array[i]));
}
function reverse(array) {
  if(Array.isArray(array)) {
    array.reverse();
    for(let i=0; i<array.length; i++) {
      reverse(array[i]);
    }
  }
  return array;
}

console.log(`reverseArray`, reverseArray);