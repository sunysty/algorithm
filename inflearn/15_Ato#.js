function solution(s) {

    //solution_1
    // let answer="";

    // for(let x of s){
    //     if(x === 'A') answer += '#';
    //     else answer += x;
    // }


    //solution_2
    let answer = s;
    answer = answer.replace(/A/g, '#');
    return answer;
}

let str ="BANANA";
console.log( solution(str) );


