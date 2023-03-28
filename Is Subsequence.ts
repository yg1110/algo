// https://leetcode.com/problems/is-subsequence/
function isSubsequence(s: string, t: string): boolean {
  if(s === "") return true;
  if(t === "") return false;
  let target: string[] = t.split("");
  for(let i=0; i<s.length; i++) {
    const sequenceIndex = target.findIndex(x => x === s[i]);
    if(sequenceIndex === -1) return false;
    target = target.slice(sequenceIndex + 1);
  }
  return true;
};

const s = 'bb';
const t = 'ahbgdc';
console.log(isSubsequence(s, t))