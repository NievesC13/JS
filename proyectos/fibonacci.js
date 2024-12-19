let fib = 0; 
let n1 = 1; 
let n0 = 0; 

for(let i = 1; i <= 50; i++){
    console.log(n0);
    fib = n0 + n1; 
    n1 = n0; 
    n0 = fib; 
}