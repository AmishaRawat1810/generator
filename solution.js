// first:
function* consecutivePair(array) {
  let i = 0;
  while (i < array.length - 1) {
    yield [array[i], array[i + 1]];
    i = i + 1;
  }
}
const seq = consecutivePair([1, 2, 3, 4, 5, 6]);
console.log([...seq]);

// second:
function* permutationOfPair(array) {
  for (let row = 0; row < array.length - 1; row++) {
    for (let col = row; col < array.length; col++) {
      yield [array[row], array[col]];
    }
  }
}
const permutation = permutationOfPair([1, 2, 3, 4, 5]);
console.log([...permutation]);

//third :
function* cycler(array) {
  let i = 0;
  while (true) {
    yield array[i];
    i++;
    if (i === array.length) {
      i = 0;
    }
  }
}
const numberCycler = cycler([1, 2, 3, 4, 5]);
const numCycle = numberCycler.take(10);
console.log([...numCycle]);

//Forth :
function* iteratorOverLines(string) {
  let i = 0;
  while (i < string.length) {
    let newLine = string.indexOf("\n", i);
    if (newLine === -1) {
      yield string.slice(i);
      break;
    }
    yield string.slice(i, newLine);
    i = newLine + 1;
  }
}

const goOverLines = iteratorOverLines("this\nis\ngood");
console.log([...goOverLines]);

//fifth
function* partitionBy(array, predicate) {
  let i = 0;
  while (i < array.length) {
    let flag = predicate(array[i], array[i]);
    let result = [array[i]];
    let j = i + 1;
    while (flag === predicate(array[j], array[i]) && j < array.length) {
      result.push(array[j]);
      j++;
    }
    yield result;
    i = j;
  }
}
const isEven = (el1) => !(el1 & 1);
const isIdentity = (num1, num2) => num1 === num2;

const input = [1, 1, 1, 2, 4, 2, 1, 5, 7, 7];
const partitionByEven = partitionBy(input, isEven);
const partitionByIdentity = partitionBy(input, isIdentity);
console.log([...partitionByEven]);
console.log([...partitionByIdentity]);

//sixth
const isPrime = (number) => {
  let i = 2;
  let count = 1;
  while (i <= Math.sqrt(number)) {
    if (number % i === 0) count++;
    i++;
  }
  return count === 1;
};
function* primeSeries() {
  let num = 1;
  while (true) {
    if (isPrime(num)) yield num;
    num++;
  }
}
const primes = primeSeries();
console.log([...primes.take(10)]);

//seventh
function* flipPairs(array) {
  let i = 1;
  while (i < array.length) {
    yield [array[i], array[i - 1]];
    i += 2;
  }
}
const flipped = flipPairs([1, 2, 3, 4]);
console.log([...flipped]);

//eigth
function* chunksOf(array, size, move = 0) {
  for (let i = 0; i < array.length; i += size - move) {
    const chunk = [];
    for (let j = 0; j < size; j++) {
      if (array[j + i] !== undefined) chunk.push(array[j + i]);
    }
    yield chunk;
  }
}
const chunkOf2_0 = chunksOf([1, 2, 3, 4], 2);
const chunkOf3_1 = chunksOf([1, 2, 3, 4, 5], 3, 1);
const chunkOf3_2 = chunksOf([1, 2, 3, 4, 5], 3, 2);

//ninth
function* iterateFunction(fn, value) {
  let fx = fn(value);
  while (true) {
    yield fx;
    fx = fn(fx);
  }
}
const addTwo = (num) => num + 2;
const itr = iterateFunction(addTwo, 1);
console.log([...itr.take(10)]);
