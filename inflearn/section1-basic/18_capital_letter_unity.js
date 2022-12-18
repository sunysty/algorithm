function solution(){

    let answer="";
    
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        else answer+=x;

        /*
        let answer=0;
        if(x === x.toLowerCase()) answer+=x.toUpperCase();
        else answer+=x;
        */
    }

    return answer;
    
}

let str = "ItisTimeToStudyyyyy";
console.log(solution(str));