function solution(a,b,c){
    
    let answer;

    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c;

    return answer;
}

console.log(solution(622,5443,13331));