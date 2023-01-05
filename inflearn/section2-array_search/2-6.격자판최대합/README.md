### 23.01.05

##### 🍀 self : ❎

##### 😮 아하모먼트 :

    1. 2차원 배열은 arr[i][j] 이런식으로 표시한다.
    2. 행의 합, 열의 합은 번갈아가면서 구할수 있으므로, 이중 for문을 이용하면 코드를 작성할 수 있다.
    3.대각선의 합은 규칙을 찾아야한다. 그리고 그 규칙을 for문을 이용해 더한다.

<br>

#### 문제

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
[자바스크립트 알고리즘 문제풀이]
10 12 11 19 19
13 39 25 27 13
10 30 50 29 30
12 23 53 37 13
15 11 15 27 19
N * N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50)
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.

▣ 출력설명
최대합을 출력합니다.

▣ 입력예제 1
5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

▣ 출력예제 1
155

<br>

#### 문제풀이

```
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
```
