function solution(arr, divisor) {
    let answer = [];
    answer = arr.filter((x) => Number.isInteger(x / divisor) === true);
    answer.sort((a, b) => a - b);
    if (answer.length === 0) {
        return answer.push(-1);
    }
    return answer;
}

solution([3, 2, 6], 10);
