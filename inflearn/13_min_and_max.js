    function solution(){
        let answer = Math.min.apply(null, arr);
        return answer;
    }

    let arr =[5,7,1,3,2,9,11]
    console.log(solution(arr));

    /*
    function solution(){
        let answer=Math.min(...arr);
        console.log(Math.max(...arr));
        return answer;
    }
    //배열값을 쓰려면 ...으로 전개연산자를 사용하면 됨! 
    //...arr = {arr[1],arr[2],...}

    let arr=[5,7,1,3,2,9,11];
    console.log(solution(arr));

    */
