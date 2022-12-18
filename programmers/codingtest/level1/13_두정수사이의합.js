// 12/16 목
// 두 정수 사이의 합

//첫번째 풀이
function solution(a, b) {
    var answer = 0;
    
    if(a<=b){
        for(let i=a; i<=b; i++){
            answer = answer +i
        }
    }
    else if(a>b){
        for(let i=b; i<=b; i++){
            answer = answer+i
        }
    }
    return answer;
}
