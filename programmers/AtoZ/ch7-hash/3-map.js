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
