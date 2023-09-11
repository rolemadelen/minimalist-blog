---
title: '1431 - Kids With the Greatest Number of Candies'
date: '2023-09-11 13:03:00'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

### Problem

There are `n` kids with candies. You are given an integer array `candies`, where each `candies[i]` represents the number of candies the `ith` kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return _a boolean array_ `result` _of length_ `n`_, where_ `result[i]` _is_ `true` _if, after giving the_ `ith` _kid all the_ `extraCandies`, they will have the **greatest** number of candies among all the kids, or `false` _otherwise_.

Note that **multiple** kids can have the **greatest** number of candies.

---

### Solution

```ts
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const MAX = Math.max(...candies)
  return candies.map((candy) => candy + extraCandies >= MAX)
}
```
