// 내가 푼 방식
function solution(strings, n) {
    return strings.sort((a,b) => {
        if(a[n] === b[n]) return a.localeCompare(b)
        else if(a[n] > b[n]) return 1
        else return -1
    })
}


//다른사람의 풀이
// 삼항연산자를 이용해서 깔끔하게 한줄로 풀었다. n번째 원소가 같을경우 전체 단어를 비교하고, 아닐경우에는 n번째 원소들을 비교해서 솔팅한다.
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort( 
        (s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

//다른사람의 풀이2

function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return (a > b) - (a < b);
        } else {
            return (chr1 > chr2) - (chr1 < chr2);
        }
    })
}


//개념정리
//1
//localeCompare : 문자열을 비교하고 그 결과를 숫자로 반환한다. 
//'a'.localeCompare('b') ==> a가b보다 먼저 ==> -1(오름차순) 
//'b'.localeCompare('a') ==> b가a보다 먼저 ==> 1(내림차순)
//'b'.localeCompare('b') ===> b와 b가 같음 ===> 0

//2
//sort ::::: arr.sort((요소a, 요소b) => { 비교함수 }) : sort는 두 원소를 비교해서 정렬하고, 콜백함수로 비교함수를 적어준다.(조건문, localeCompare등)
/* 
//value 기준으로 정렬
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// name 기준으로 정렬
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});
*/