// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log(`DB CONNECTED`);
    
})();


(function chai1() {
    console.log(`DB CONNECTED 1`);
    
})();


(  (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
    
})('mahesh')