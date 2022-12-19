function solution(arr1, arr2) {
  let answer;
  for (let i = 0; i < arr1.length; i++) {
    if (
      (arr1[i] === 1 && arr2[i] === 3) ||
      (arr1[i] === 2 && arr2[i] === 1) ||
      (arr1[i] === 3 && arr2[i] === 2)
    )
      answer += 'A';
    else if (arr1[i] === arr2[i]) answer += 'D';
    else answer += 'B';
  }
  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
