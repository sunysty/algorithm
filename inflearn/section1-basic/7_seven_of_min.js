//7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요
function solution(a){
    let answer, min=Number.MAX_SAFE_INTEGER;//안정적으로 큰 정수가 출력
    for(let i=0; i<array.length; i++){
        if(arr[i]<min) min=arr[i];
    }
    answer=min;
    return answer;
    
    
    /*
    let min = Number.MAX_SAFE_INTEGER;
    for(let x of a){
        if(x < min){
            min = x;
        }
        return min;
    }
    */
}


let arr = [5,7,1,3,2,9,11];
console.log(solution(arr));