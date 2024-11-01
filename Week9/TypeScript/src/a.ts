// const x: number = 1;
// console.log(x)

interface User {
    firstName: string,
    lastName: string,
    age: number
    email?:string
}


function isLegal(user: User) {
    if (user.age > 18) {
        console.log(true)
        return true;
    } else {
        return false;
    }
}

isLegal({
    firstName: "sangam",
    lastName: "mundhe",
    age: 21
})
