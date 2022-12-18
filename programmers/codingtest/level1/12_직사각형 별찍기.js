// 12/15 수
// 직사각형 별찍기

//첫번째 풀이
// 문제이해를 못해서 검색해보고 풀었다. 왜 반복문은 아무리해도 익숙해지지가 않는가...
process.stdin.setEncoding('utf8');//문자열 바꿔줌
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const a = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const n = Number(a[0]), m = Number(a[1]); //n는 한줄에대한 별의 갯수, m는 몇줄 출력
    
    const row = '*'.repeat(n)
    for(let i=0; i<m; i++){
        console.log(row)   
    }

    //console.log((('*').repeat(a)+`\n`).repeat(b))
});


//두번째 풀이
process.stdin.setEncoding('utf8');//문자열 바꿔줌
process.stdin.on('data', data => { //입력받은 숫자를 'data에 받는다'
    const a = data.split(" "); // data(입력받은 숫자)를 배열로 변경
    const n = Number(a[0]), m = Number(a[1]); //n는 한줄에대한 별의 갯수, m는 몇줄 출력
    
    console.log((('*').repeat(n)+`\n`).repeat(m))
});


//오늘 배운것
process.stdin.on(()=>{})//node.js 입력받은 데이터를 콜백함수 안에 받는것
str.repeat(n)//n번만큼 str(문자열)을 반복함
`\n`//<br/>과 같은 역할