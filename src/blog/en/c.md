---
title: 'JavaScript filter vs. map'
posttitle: 'JavaScript filter vs. map'
date: '2023-02-13 11:45:00'
uid: 'c'
---

## Array.prototype.filter

`filter()` function calls a predicate function on every element and filters the one who passes a test.

![predicate](/images/g/predicate.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.filter((x) => x * 2); // [1, 2, 3, 4, 5, 6]
```

The predicate function we used to determine if the item should be filtered or not is `x * 2`. In JavaScript, non-zero values are regarded as `true`. Therefore, all elements except 0 have been filtered.

## Array.prototype.map

`map()` creates a new array of elements from a callback function and returns the array.

![callback](/images/g/callback.webp)

```js
let nums = [0, 1, 2, 3, 4, 5, 6];
nums.map((x) => x * 2); // [0, 2, 4, 6, 8, 10, 12];
```

`map(callback)` function runs callback on each item and stores the data in a new array and returns when all items have been processed.

## Summary

The `filter` function focuses on the selection of items from the original array while the `map` function focuses on creating a new array using the original data.
