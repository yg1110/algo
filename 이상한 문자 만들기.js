function solution(s) {
  const words = s.split(" ");
  const splitWords = words.map(word => {
    return [...word].map((s, i) =>
      i % 2 === 1 ? s.toLowerCase() : s.toUpperCase()).join("")
  })
  return splitWords.join(" ")
}

const s = "try hello world";
console.log(solution(s))