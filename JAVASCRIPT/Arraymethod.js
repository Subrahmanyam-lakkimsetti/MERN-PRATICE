let numbers = [10, 20, 30, 40, 50];

console.log('Length of array:', numbers.length);

console.log('Array as string:', numbers.toString());

console.log('Element at index 3:', numbers.at(3));

console.log("Array joined with '*':", numbers.join('*'));

let removedElement = numbers.pop();
console.log('Popped element:', removedElement, '| Array after pop:', numbers);

numbers.push(60);
console.log('Array after pushing 60:', numbers);

let firstRemoved = numbers.shift();
console.log('Shifted element:', firstRemoved, '| Array after shift:', numbers);

numbers.unshift(5);
console.log('Array after unshifting 5:', numbers);

delete numbers[1];
console.log('Array after delete at index 1:', numbers);

let combinedArray = numbers.concat([70, 80, 90]);
console.log('Concatenated array:', combinedArray);

let modifiedArray = combinedArray.copyWithin(0, 4, 6);
console.log('Array after copyWithin:', modifiedArray);

let nestedNumbers = [10, [20, [30, 40]], 50];
console.log('Flattened array:', nestedNumbers.flat(2));

let splicedElements = combinedArray.splice(1, 2, 100, 110);
console.log(
  'Spliced elements:',
  splicedElements,
  '| Array after splice:',
  combinedArray
);

let newSplicedArray = combinedArray.toSpliced(1, 2, 120, 130);
console.log('New array with toSpliced:', newSplicedArray);

let slicedNumbers = combinedArray.slice(2, 5);
console.log('Sliced array:', slicedNumbers);

console.log('Index of 60:', combinedArray.indexOf(60));

let unorderedArray = [15, 25, 90, 5];
console.log(
  'Sorted array:',
  unorderedArray.sort((a, b) => a - b)
);

combinedArray.forEach((item, index) =>
  console.log(`Element at index ${index}:`, item)
);

let counter = 0;
while (counter <= 5) {
  console.log('Counter is:', counter);
  counter++;
}

let num = 10;
do {
  console.log('Num is:', num);
  num++;
} while (num < 8);
