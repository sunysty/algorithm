const solution = (arr) => {
  let answer = [];
  let sortedArr = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < sortedArr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i] + 1));
  }
  return answer;
};

console.log(solution([5, 87, 89, 92, 100, 76]));

// sort 한후 indexof를 쓰면 어떻게든 되겠지 했는데, [-1,-1,-1,-1,-1] 이 나왔다.

const solutionT = (arr) => {
  //인풋값 초기화
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  //등수구하기 구현
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
};
