---
title: '643. Maximum Average Subarray I'
date: '2023-09-16 07:00:00'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return _this value_. Any answer with a calculation error less than `10-5` will be accepted.

---

### Solution

The time complexity is `O(nk)`, where `n` is the length of the array and `k` is the length of the subarray.

```ts
function findMaxAverage(nums: number[], k: number): number {
  let size = nums.length
  let max = -Infinity

  for (let i = 0; i <= size - k; ++i) {
    let sum = 0
    for (let j = i; j < i + k; ++j) {
      sum += nums[j]
    }
    sum /= k
    max = sum > max ? sum : max
  }

  return max
}
```
