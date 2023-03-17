// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  return targets.map(target => {
    let count = 0;
    const words = target.split("");
    words.forEach(targetWord => {
      const keyPressArray = keymap.map(key => {
        const keyWords = key.split("");
        if(!keyWords.includes(targetWord)) return Infinity;
        return keyWords.findIndex(keyWord => targetWord === keyWord) + 1;
      })
      const minPress = Math.min(...keyPressArray);
      count += minPress;
    })
    return count === Infinity ? -1 : count;
  })
}

const keymap = ["AGZ", "BSSS"];
const targets = ["ASA","X"];
console.log(solution(keymap, targets))
