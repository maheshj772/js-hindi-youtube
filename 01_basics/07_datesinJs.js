
let myDate = new Date()
console.log(myDate);                         // 2024-10-26T09:49:20.835Z
console.log(myDate.toString());           // Sat Oct 26 2024 09:49:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());                       //  Sat Oct 26 2024
console.log(myDate.toLocaleString());                     //  10/26/2024, 9:49:20 AM

console.log(typeof myDate);               // object

let myCreatedDate = new Date(2024, 9, 26)           
console.log(myCreatedDate.toDateString());                     //  Sat Oct 26 2024



