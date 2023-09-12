---
title: '334. Increasing Triplet Subsequence'
date: '2023-09-12 06:08:00'
---

- Difficulty: 😾 Medium
- [Problem link](https://leetcode.com/problems/increasing-triplet-subsequence/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given an integer array `nums`, return `true` _if there exists a triple of indices_ `(i, j, k)` _such that_ `i < j < k` _and_ `nums[i] < nums[j] < nums[k]`. If no such indices exists, return `false`.

---

### Solution: One Pass

```ts
function increasingTriplet(nums: number[]): boolean {
  const SIZE = nums.length

  if (SIZE < 3) return false

  let one = Infinity
  let two = Infinity

  for (let i = 0; i < SIZE; ++i) {
    if (nums[i] <= one) one = nums[i]
    else if (nums[i] <= two) two = nums[i]
    else return true
  }

  return false
}
```
