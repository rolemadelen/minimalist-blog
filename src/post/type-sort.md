---
title: "Sort by types?"
posttitle: "Sort by types?"
date: "2023-07-05 22:31:00"
published: "2023-07-05 22:55:00"
---

I came across an interesting problem today. Given an array with various values, the task is to extract
the data based on their types, regroup them, and return those groups in an array. You can assume that
the given array will never be empty. So here's an emxaple.
Let say the input is `[1, true, 2, false]`, the expected output should be `[[1, 2], [true, false]]`.

Here's another example. If the input is `[[1, 2], 1, null, true]`, the output should be `[[[1,2]], [1], [null], [true]]`.
In this case, there are four types present in the array: _objects_, _numbers_, _null_ values, and _booleans_.

You have 30 minutes to solve this. Can you come up with a solution?

```js
function sortTypes(arr) {
  let answer = [];

  return answer;
}
```
