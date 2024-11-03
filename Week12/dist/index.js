"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "A", age: 12 }, { name: "B", age: 23 });
console.log(age);
