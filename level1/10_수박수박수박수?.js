/*
문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.
*/
//첫번째풀이 - 생각나는대로, 짝수-홀수 조건에서 반복문 돌리기 - ifelse for문사용

function solution(n) {
    var answer = '';
    
    for(let i=0; n>i; i++){
        if(i%2===0){answer+="수"}
        else{answer+="박"}
    }
    
    return answer;
}

//삼항연산자이용하면 - 좀더 깔끔한듯
//1
const solution = n => {
    let answer = ''
    
    for(let i = 0; i < n; i++) {
        answer += i % 2 == 0 ? "수" : "박";
    }
    
    return answer
}

//2
const solution = n => {
    let answer = ''
    
    for(let i = 0; i < n; i++) {
        i%2===0 ? answer += "수" :answer += "박";
    }
    
    return answer
}

//깔끔한 풀이
const solution = n => "수박".repeat(n).slice(0,n);
