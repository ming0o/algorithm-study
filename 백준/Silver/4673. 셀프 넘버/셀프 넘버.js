function d(n) {
  let sum = n;
  while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
  }
  return sum;
}

for (let i = 1; i <= 10000; i++) {
  let SelfNumber = true;
  for (let j = 1; j <= 10000; j++) {
      if (d(j) === i) {
          SelfNumber = false;
          break;
      }
  }
  if (SelfNumber) {
      console.log(i);
  }
}