---
title: '(11) Container With Most Water'
date: '2023-09-15 06:25:00'
lang: 'en'
type: 'note'
---

- Difficulty: 😾 Medium
- [Problem Link](https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

---

### Solution

- Start from the widest container, which is the whole width (`0, length - 1`).
- Calculate the maximum amount of water the current container can hold and remember the value.
- Adjust the starting and ending of the container by comparing its height (`height[i], height[j]`).
- Re-calculate the maximum amount of water and check if it's greater than the previous calculation. If it is, update the previously remembered value.

The time complexity is `O(n)`, where `n` is the length of an array.

```ts
function maxArea(height: number[]): number {
  let i = 0
  let j = height.length - 1
  let water = 0

  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(height[i], height[j]))
    if (height[i] < height[j]) ++i
    else --j
  }

  return water
}
```
