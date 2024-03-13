// A prime number is a whole number greater than 1. It has excetly two factors, that is, 1 and the  number itself. there is only one even prime number, that is, 2



const isPrime = (n) => {
    if(n < 2) {
        return false;
    }

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 1; i <= 100; i++) {
    if(isPrime(i)) {
        console.log(`${i} a prime number`);
    }else{
        console.log(`${i} is not prime number`);
    }
}

// const isPrime = (n) => {
//     if (n < 2) {
//       return false;
//     }
  
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   for (let i = 1; i <= 100; i++) {
//     if (isPrime(i)) {
//       console.log(`${i} is a prime number`);
//     } else {
//       console.log(`${i} is not a prime number`);
//     }
//   }