const solution = (arr) => {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
};

const n = 10;
const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(n, arr));
