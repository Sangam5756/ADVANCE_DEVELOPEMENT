interface User {
    name: string;
    age: number;
}


type UpdateProps = Pick<User, 'name' | 'age'>

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: "A", age: 12 }, { name: "B", age: 23 });
console.log(age);
