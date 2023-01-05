const solution = (arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  // 각 행의 합, 각 열의 합
  let row = 0;
  let col = 0;
  let dia_right = 0;
  let dia_left = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  // 두 대각선의 합
  dia_right = 0;
  dia_left = 0;

  for (i = 0; i < n; i++) {
    dia_right += arr[i][i];
    dia_left += arr[i][n - i - 1];
  }
  answer = Math.max(answer, dia_right, dia_left);
  return answer;
};
