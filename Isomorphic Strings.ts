// https://leetcode.com/problems/isomorphic-strings/
function isIsomorphic(s: string, t: string): boolean {
  const sArray = s.split("");
  const tArray = t.split("");
  const sWord = {};
  const tWord = {};
  for(let i=0; i<sArray.length; i++) {
    sWord[sArray[i]] = sWord[sArray[i]] ? sWord[sArray[i]] + 1 : 1;
    tWord[tArray[i]] = tWord[tArray[i]] ? tWord[tArray[i]] + 1 : 1;
  }
  const a = sArray.map(s => sWord[s]);
  const b = tArray.map(t => tWord[t]);
  for(let i=0; i<sArray.length; i++) {
    if(a[i] !== b[i]) return false;
  }
  return true;
};

console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))