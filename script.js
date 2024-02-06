// A prime number is a whole number greater than 1. It has excetly two factors, that is, 1 and the  number itself. there is only one even prime number, that is, 2

function isPrime (n) {
    if(n < 2) {
        return `${n} is not a prime number`
    }

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return `${n} is not a pirme number`
        }
    }
    return `${n} is a prime number`
}

console.log(isPrime(11));


// how to find duplicate value in a array...?

let arr = [1, 3, 4, 6, 4, 6, 7, 9, 11, 3];
let result = arr.filter((ele, index) => arr.indexOf(ele) !== index);

console.log(result);