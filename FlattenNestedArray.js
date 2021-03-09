//Flatten an array of nested arrays

let arr = [[1, 2],[3, 4],[5, 6, 7, 8, 9],[10, 11, 12]];
let flattened = [].concat.apply([], arr);
let flattened2 = arr.reduce((acc, curVal) => {
  return acc.concat(curVal)
})

console.log(flattened)
console.log(flattened2)
