function solution(num)
{
  return Array.from(String(num)).reduce((a, b) => Number(a) + Number(b), 0)
}

const num = 123;
console.log(solution(num));