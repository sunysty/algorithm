/*왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 
일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 
뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.*/

function solution(arr){
    let answer = arr;
    let sum = arr.reduce((a,b)=>a+b, 0)
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum-(arr[i]+arr[j]))===100){
                arr.splice(i,1);
                arr.splice(j,1);
            }
        }
    }

    return answer;
}

let arr =[20,7,23,19,10,15,25,8,13]
console.log(solution(arr));


sum - (arr[i]+arr[j]) === 100

function solution(arr){
    let answer = arr;
    //메모리에 있는 같은 배열을 가르키고있음(주소만 복사)
    let sum = arr.reduce((a,b) => a+b, 0) 
    //0번째 인덱스부터 9개니깐 8번째 인덱스까지 돈다. i는 0번째 인덱스부터 시작.

    for(let i=0; i<8; i++){
        //j는 1의 뒤에꺼라서 +1해준다. j는 1번째 인덱스부터 시작됨
    
        for(let j=i+1; j<9; j++){
            if((sum-(arr[i]+arr[j])) === 100){
                arr.splice(j,1);//앞에꺼부터 지우면 인덱스가 바뀌어버려서 뒤에서 부터 지운다
                arr.splice(i,1);
            }
        }
    }
    return answer;
}

let arr = [20,7,23,19,10,15,25,8,13];

/*
// 구문 정리
array.reduce(function(누적값, 현재값, 인덱스, 배열){ return 누적값 + 현재값 }, 0);
// 화살표 함수 사용
array.reduce((누적값, 현재값, 인덱스, 배열) => return 결과, 초기값);

/ 구문 정리
배열.splice(인덱스, 1) // 인덱스에 있는 1개 요소 제거한다

const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30);
// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20, 30을 삽입한다. 
*/