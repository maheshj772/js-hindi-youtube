// const username = {}

// username.id = "123abc"
// username.name = "Mahi"
// username.isPassed = true

// console.log(username);

// const user = {
//     email: "abc123@gmail.com",
//     fullname: {
//         userfullname: {
//             fname: "mahi",
//             lname: "jadhav"
//         }
//     }
// }

// console.log(user.fullname.userfullname.lname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


