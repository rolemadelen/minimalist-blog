---
title: '1679. Max Number of K-Sum Pairs'
date: '2023-09-15 06:50:00'
---

- Difficulty: 😾 Medium
- [Problem Link](https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

You are given an integer array `nums` and an integer `k`.

In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from the array.

Return _the maximum number of operations you can perform on the array_.

---

### Solution

```ts
function maxOperations(nums: number[], k: number): number {
  const map = new Map()
  const size = nums.length
  let cnt = 0

  for (let i = 0; i < size; ++i) {
    const target = k - nums[i]
    const ref = map.get(target)

    if (ref > 0) {
      ++cnt
      map.set(target, ref - 1)
    } else {
      map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
    }
  }

  return cnt
}
```
