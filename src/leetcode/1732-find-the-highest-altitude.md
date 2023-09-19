---
title: '1732. Find the Highest Altitude'
date: '2023-09-09 22:00:00'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/find-the-highest-altitude/?envType=study-plan-v2&envId=leetcode-75)

### Problem

There is a biker going on a road trip. The road trip consists of `n + 1` points at different altitudes. The biker starts his trip on point `0` with altitude equal `0`.

You are given an integer array `gain` of length `n` where `gain[i]` is the **net gain in altitude** between points `i`​​​​​​ and `i + 1` for all (`0 <= i < n)`. Return _the **highest altitude** of a point._

---

### Solution

```ts
function largestAltitude(gain: number[]): number {
  let max = 0
  let sum = 0
  for (let x of gain) {
    sum += x
    max = sum > max ? sum : max
  }

  return max
}
```
