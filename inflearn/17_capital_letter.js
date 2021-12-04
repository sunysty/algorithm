//한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

//KoreaTimeGood
//3

function solution(s){
    let answer = 0;//카운트하니까 0

    for(let x of s){//탐색 식 : let x of s
        /*
        let num = x.charCodeAt();//소문자:97~122
        if(num>=65 && num<=90) answer++;
        */
        if(x===x.toUpperCase()) answer++; //toUpperCase는 대문자로 바꿔줌
    }

//answer=0 일때부터 ++를 돌려준다. 결국 answer

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));