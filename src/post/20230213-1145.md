---
title: 'JavaScript - Array filter vs. map'
posttitle: 'Array filter vs. map'
date: '2023-02-13 11:45:00'
---

## Array.prototype.filter

The `filter()` function calls a predicate function on every element and filters out the elements that pass a test.

![predicate](/images/predicate.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.filter((x) => x * 2); // [1, 2, 3, 4, 5, 6]
```

In this example, the predicate function `x * 2` is used to determine whether each item should be filtered or not. In JavaScript, non-zero values are considered `true`. As a result, all elements except 0 have passed the test and been included in the filtered array.

## Array.prototype.map

The `map()` function creates a new array by applying a callback function to each element of the original array, and returns the resulting array.

![callback](/images/callback.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.map((x) => x * 2); // [0, 2, 4, 6, 8, 10, 12];
```

The `map(callback)` function executes the callback function on each item of the array and stores the returned values in a new array. The function continues this process until all items have been processed, and finally returns the new array.

## Summary

The `filter` function is used to select specific items from the original array based on a condition, while the `map` function is used to create a new array by applying a transformation to each item of the original array.
