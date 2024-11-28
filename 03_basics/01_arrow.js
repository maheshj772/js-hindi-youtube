const user = { 
    username: "mahesh",
    price: 888,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
 user.welcomeMessage()
 user.username = "madhu"
 user.welcomeMessage()

function chai() {
    console.log(this);
    
}
chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "mahesh"})

console.log(addTwo(3, 4));
