function solution(s, n) {
  return Array.from(String(s), x => {
    const code = x.charCodeAt(0);
    if(code >= 97 && code <= 122) {
      let upperCase = (code + n) % 123
      if(upperCase < 97) {
        upperCase += 97
      }
      return String.fromCharCode(upperCase)
    }
    if(code >= 65 && code <= 90) {
      let lowerCase = (code + n) % 91
      if(lowerCase < 65) {
        lowerCase += 65
      }
      return String.fromCharCode(lowerCase)
    }
    return x
  }).join("")
}

const s = 'azAZ';
const n = 4;
console.log(solution(s, n))