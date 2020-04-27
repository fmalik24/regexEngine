
let fib = 2;

let fibi = n => {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return fibi(n - 1 ) + fibi(n-2)
}



console.log(fibi(6))