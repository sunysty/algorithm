//짝수일때 even도출 홀수일때 odd도출

function solution(arr){


    if(n%2 === 0){
        answer="even";
    }else{
        answer="odd";
    }
    
    return answer;
}

console.log(solution(6));