//N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

const solution = (s) => {
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of s){
        if(x.length>max){
            max=x.length;
            answer=x;
        }
    }
    return answer;
}

let str=["teacher","time","student","beautiful","good"]; 

console.log(solution(str));
