export const safePrimeCheck = (n) => {
  if (n < 2) {
    return false;
  }
  if (Math.floor(n) !== n) {
    return false;
  }
  // Modified Sieve of Eratosthenes
  const sieve = Array(n).fill(true);
  for (let i = 2; i < n; ++i) {
    if(sieve[i]) {
      if(n % i === 0) {
        return false;
      }
      for(let j = i; j < n; j += j) {
        sieve[j] = false;
      }
    }
  }
  return true;
};