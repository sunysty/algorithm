// console.log(' '.repeat(0) + '*'.repeat(5))
// console.log(' '.repeat(1) + '*'.repeat(4))
// console.log(' '.repeat(2) + '*'.repeat(3))
// console.log(' '.repeat(3) + '*'.repeat(2))
// console.log(' '.repeat(4) + '*'.repeat(1))

/*
1번
const solution = () => {
    for(i=5; i>0; i--){
        console.log("".repeat(i) + "*".repeat(i));
    }
}

solution();
*/

/*
2번
const solution = () => {
    for(i=0; i<=5; i++){
        console.log(" ".repeat(5 - i) + "*".repeat(i));
    }
}

solution();
*/

// const solution = () => {
//     for(i=0)
// }

// console.log(' '.repeat(2) + '*'.repeat(1));
// console.log(' '.repeat(1) + '*'.repeat(3));
// console.log(' '.repeat(0) + '*'.repeat(5));

for(let i = 1; i<=9; i=i+2) {
    console.log(' '.repeat((9-i)/2) + '*'.repeat(i));
}