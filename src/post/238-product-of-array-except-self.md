---
title: '(238) Product of Array Except Self'
date: '2023-09-11 13:06:00'
lang: 'en'
type: 'note'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75

### Problem

Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

---

### Solution

```ts
function productExceptSelf(nums: number[]): number[] {
  let totalWZero = 1
  let totalWOZero = 1
  let zeroes = 0

  for (const x of nums) {
    if (x !== 0) totalWOZero *= x
    totalWZero *= x
    if (x === 0) zeroes += 1
  }

  return nums.map((x) => {
    if (x == 0) {
      if (zeroes > 1) return 0
      else return totalWOZero
    }
    return totalWZero / x
  })
}
```
