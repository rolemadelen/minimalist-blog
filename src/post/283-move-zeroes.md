---
title: '🍰 283. Move Zeroes'
date: '2023-09-14 06:30:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Move Zeroes](https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

---

### Solution

Keep track of non-zero numbers by utilizing an extra variable, `pos`. Once a zero is encountered, swap values with the current index and `pos` to maintain the relative order.

The time complexity is `O(N)`, where `N` is the length of the array.

```ts
function moveZeroes(nums: number[]): void {
  let pos = 0
  const SIZE = nums.length

  for (let i = 0; i < SIZE; ++i) {
    if (nums[i] !== 0) {
      ;[nums[pos], nums[i]] = [nums[i], nums[pos]]
      pos += 1
    }
  }
}
```
