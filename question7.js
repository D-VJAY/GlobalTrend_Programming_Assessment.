//fibonacci Series of n numbers

function fibonacci(n) {
    if(n<0){
        return "Enter a valid number"
    }
  let fib = [0, 1];
  if (n == 0) {
    return [0];
  } else if (n == 1) {
    return fib;
  } else {
    for (let i = 2; i <=n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
  }
}

const result = fibonacci(7);

console.log(result);
