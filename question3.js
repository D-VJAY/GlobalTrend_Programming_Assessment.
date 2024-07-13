//a function that takes a nested array and returns a flattened array

function flatArray(array) {
  let output = [];

  function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        output.push(arr[i]);
      }
    }
  }

  flatten(array);
  return console.log(output);
}

const nestedArray = [1,[2, 3],[4, [5, 6]],[[[[[[[1, [2, 3, [3]]]]]]]]],[7, [8, [9, 10]]],];
flatArray(nestedArray);
