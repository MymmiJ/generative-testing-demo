const MAX_ARRAY_SIZE = 4294967296;

const getIndexFromSieves = (index, sieves) => {
  let sieveIndex = 0;
  while(index > MAX_ARRAY_SIZE) {
    index -= MAX_ARRAY_SIZE;
    sieveIndex++;
  }
  return sieves[sieveIndex][index];
}

const setIndexFromSieves = (index, sieves, value) => {
  let sieveIndex = 0;
  while(index > MAX_ARRAY_SIZE) {
    index -= MAX_ARRAY_SIZE;
    sieveIndex++;
  }
  sieves[sieveIndex][index] = value;
}

export const efficientPrimeCheck = (n) => {
  if (n < 2 || n > Number.MAX_SAFE_INTEGER) {
    return false;
  }
  if (Math.floor(n) !== n) {
    return false;
  }
  // Modified Sieve of Eratosthenes
  const sieves = [];
  let sieveIndex = 0;
  for(let num = n; num > 0; num -= MAX_ARRAY_SIZE) {
    if(num > MAX_ARRAY_SIZE) {
      sieves[sieveIndex] = new Uint8ClampedArray(MAX_ARRAY_SIZE).fill(1);
    } else {
      sieves[sieveIndex] = new Uint8ClampedArray(num).fill(1);
    }
    ++sieveIndex;
  }
  for (let i = 2; i < Math.sqrt(n); ++i) {
    if(getIndexFromSieves(i, sieves)) {
      if(n % i === 0) {
        return false;
      }
      for(let j = i; j < n; j += j) {
        setIndexFromSieves(j, sieves, 0);
      }
    }
  }
  return true;
};