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
  for (let index = 0; index < array.length - 1; index++) {
    yield array.slice(index).map((num) => [array[index], num]);
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
const cycler = generator([1, 2, 3, 4, 5]);
const numCycle = cycler.take(10);
console.log([...numCycle]);

//Forth :
