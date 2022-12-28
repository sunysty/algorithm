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
