//7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
/*
let a = solution([12,321,321,14,157,63,74]);
//solution함수는 주어진 자연수중, 홀수인 자연수를 골라서, 그 합을 구해줌

function solution(a){
    let a_odd = [];// a에서 홀수들만 배열로 담음
    let a_odd_sum = 0; //a 홀수들의 합 초깃값 설정

    for( let x of a ){
        if( x % 2 === 1 ){ 
            a_odd.push(x)
        }
    }//a에서 홀수인 x를 a_odd에 집어넣음

    for( i=0; i<a_odd.length; i++){
        a_odd_sum += a_odd[i];
        return;
    }// a 홀수들의 합은 홀수들의 인덱스[i]를 반복문으로 더해주면서 계속더해준다 
    console.log(a_odd_sum);
}

console.log(a);
*/

function solution(a){
    //배열탐색
    let answer = [];//answer에 답2개를 push
    let sum = 0, min=Number.MAX_SAFE_INTEGER;//최솟값초기화 : 큰값으로 해놓으면 첫번째값이 참으로 들어갈것임
    for(let x of arr){
        if(x % 2 === 1){
            sum += x; //sum=sum+x
            if(x<min) min=x
        }
    }
    answer.push(sum);
    answer.push(min);    
    return answer;
}


const answer = solution([12, 77, 38, 41, 53, 92, 85]);
console.log(answer);

//최솟값 구하는 Number.MAX_SAFE_INTEGER은 최소, 최대 나오면 그냥 쓰기 이해안가니깐 걍 외우기
//for문 a배열의 x === for(let x of a)
//sum은 sum + x 
//x가 min보다 작으면 x=최솟값