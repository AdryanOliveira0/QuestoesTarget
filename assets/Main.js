function checkFibonacci() {
  let num = parseInt(document.getElementById("number-input").value);
  let fib1 = 0;
  let fib2 = 1;
  let isFibonacci = false;

  if (num === fib1 || num === fib2) {
    isFibonacci = true;
  }

  while (fib2 <= num) {
    let temp = fib2;
    fib2 += fib1;
    fib1 = temp;

    if (num === fib2) {
      isFibonacci = true;
    }
  }

  let result = document.getElementById("result");
  if (isFibonacci) {
    result.innerText = `${num} Faz parte da sequência Fibonacci.`;
  } else {
    result.innerText = `${num} Não faz parte da sequência Fibonacci.`;
  }
}
