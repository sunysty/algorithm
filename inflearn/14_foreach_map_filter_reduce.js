//forEach, map, filter, reduce는 콜백함수 불러서 씀



//1. forEach : for반복문 대신사용
function forEach(predicate, thisArg){//predicate 함수, thisArg 콜백함수
    for(let i=0; i<a.length; i++){
        predicate(a[i], i);
    }
}
//아마 이런 원리로 forEach가 작동할거라는 선생님의 뇌피셜

a = [10, 11, 12, 13, 14, 15];
a.forEach(function(v,i){
    console.log(v,i,this)
    //출력시 10 0 [1,2] , 11 1 [1,2], 12 2 [1,2], 13 3 [1,2], 14 4 [1,2], 15 5 [1,2] 이렇게 나옴
}, [1,2]);
//이것은 foreach의 실제 작동





//2. map : 원본배열을 이용해서 새로운 배열을 생성한다. 근데 길이가 같음
function map(predicate, thisArg){
    for(let i=0; i<a.length; i++){
        list.push(predicate(a[i], i));
    }
    return list;
}

a = [10, 11, 12, 13, 14, 15];

let answer = a.map(function(v, i){
    if(v%2 === 0) return v;//콜백함수 호출
},[1,2]);
console.log(answer);





//3. filter : 새로운 배열을 생성한다. 근데 원하는 원소만 배열생성가능.
function filter(predicate, thisArg){
    let list=[];
    for(let i=0; i<a.length; i++){
        if(predicate(a[i],i)) list.push(a[i]);
    }
    return list;
}


a = [10, 11, 12, 13, 14, 15];

let answer = a.filter(function(v, i){
    return v%2===0;
},[1,2]);
console.log(answer);


//4. reduce : 원본배열의 합을 구할때 쓰인당..!
function reduce(predicate, val){
    let result=val;
    for(let i=0; i<a.length; i++){
        result = predicate(result, a[i]);
    }
    return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function(acc, v){ //acc 누적되는곳 v 원본배열값
    return acc+v;
}, 0);//배열을 생성하지않고, 어떤 값을 생성함
console.log(answer);