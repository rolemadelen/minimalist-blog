---
title: 'Array.prototype.filter()'
posttitle: 'Array.prototype.filter()'
date: '2023-02-12 17:17:17'
updated: '2023-05-29 17:17:17'
uid: 'r'
---

`Array.prototype.filter()` function calls predicate function on each element and selects (filters out) one that passes a test.

![predicate](/images/predicate.webp)

```js
let nums = [1, 2, 3, 4, 5, 6, 7];
nums.filter(x => x * 2); // [1, 2, 3, 4, 5, 6, 7]
```

`x => x * 2` is results in non-zero so this predicate always returns `true`. Thus, filtered array is same as the original.

---

### Reference
- https://stackoverflow.com/questions/2442798/javascript-filter-vs-map-problem