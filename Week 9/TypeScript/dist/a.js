"use strict";
// const x: number = 1;
// console.log(x)
function isLegal(user) {
    if (user.age > 18) {
        console.log(true);
        return true;
    }
    else {
        return false;
    }
}
isLegal({
    firstName: "sangam",
    lastName: "mundhe",
    age: 21
});
