# DAY 04

## Project Name

### <i>Working with Array methods</i>

#

## Learnings

- Array.prototype.filter()

  Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

  ```
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]
  ```

- Array.prototype.map()

  Returns a new array containing the results of calling a function on every element in this array.

  ```
  const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(x => x * 2);

  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  ```

- Array.prototype.reduce()

  Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

  ```
  const array1 = [1, 2, 3, 4];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  // 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer));
  // expected output: 10

  // 5 + 1 + 2 + 3 + 4
  console.log(array1.reduce(reducer, 5));
  // expected output: 15
  ```
