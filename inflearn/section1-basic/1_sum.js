//1부터 n까지의 합구하기

function solution(n){
    let answer;
    
    let answer = 0;
    for(i=1; i<=n; i++){
        answer = answer + i;
    }
    
    return answer;
}

console.log(solution(10));