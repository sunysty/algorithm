# 해시테이블

- key, value를 받아, 해싱된 값을 index에 저장하는 자료구조
- 삽입, 삭제, 탐색 O(N)이 걸린다.(상수시간)
- 해시함수는 입력받은 값으로 변환해줌

## 해시충돌 해결방법

### 1. 선형탐사법

    : 충돌이 발생하면 옆으로 한 칸 이동한다. 충돌이 발생하지 않을때까지 이동한다. - 선형시간이 걸릴수도 있다는 문제점이 있음

### 2. 제곱탐사법

    : 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
    - 데이터가 몰리는것이 선형탐사법보다 덜함

### 3. 이중해싱

    : 충돌이 발생하면 다른 해시함수를 이용하여 새로운 `index`를 만든다. 충돌이 발생하지 않을때까지 만들어낸다.

### 4. 분리연결법

    : 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.(다른 index로 이동하지 않음)
    - 최악의 경우 하나의 버킷이 무한정으로 늘어 날 수 있음

## Javascript 해시테이블 사용법

### 1. 배열

```
const table = [];
table['key'] = 100;
table['key2'] = 'Hello';
console.log(table['key']);
table['key'] = 444;
console.log(table['key']);
delete table['key'];
console.log(table['key']);
```

### 2. 객체

```
const table = {};
table['key'] = 100;
table['key2'] = 'hello';
console.log(table['key']);
table['key'] = 444;
console.log(table['key']);
delete table['key'];
console.log(table['key']);
```

### 3. Map

```
const table = new Map();
table.set('key', 100);
table.set('key1', 'hello');
console.log(table['key']);
console.log(table.get('key'));

// map은 object도 key로 쓸수 있음
// 객체의 경우 정수가 아니면 문자로 바꿈->다양한 타입제공 , 메소드제공 및 순회가 편함
const object = { a: 1 };
table.set(object, 'a1');
console.log(table.get(object));
table.delete(object);
console.log(table.get(object));
console.log(table.keys());
console.log(table.values());
table.clear();
console.log(table.values());
```

### 4.Set

```
//set 자료형은 key와 value가 동일하게 들어감
const table = new Set();
table.add('key');
table.add('key2');
console.log(table.has('key')); //true
console.log(table.has('key3')); //false
table.delete('key2');
console.log(table.has('key2')); //false
table.add('key3');
console.log(table.size); //2
table.clear();
console.log(table.size); //0

```
