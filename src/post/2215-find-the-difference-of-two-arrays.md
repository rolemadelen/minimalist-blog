---
title: '🍰 2215. Find the Difference of Two Arrays'
date: '2023-09-22 06:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given two **0-indexed** integer arrays `nums1` and `nums2`, return _a list_ `answer` _of size_ `2` _where:_

- `answer[0]` _is a list of all **distinct** integers in_ `nums1` _which are **not** present in_ `nums2`.
- `answer[1]` _is a list of all **distinct** integers in_ `nums2` _which are **not** present in_ `nums1`.

**Note** that the integers in the lists may be returned in **any** order.

---

### Solution 1: Bruteforce

I first created a set out of the existing arrays to exclude duplicate items. Then, as I iterated through the arrays using `includes` as the filtering condition, I filtered out elements that are not present in the other array.

The time complexity for this algorithm is `O(n1 * n2)`, where `n1` is the size of the `nums1` array, and `n2` is the size of the `nums2` array.

```ts
function findDifference(nums1: number[], nums2: number[]): number[][] {
  let u1: number[] = []
  let u2: number[] = []

  u1 = [...new Set(nums1)].filter((x) => nums2.includes(x) === false)
  u2 = [...new Set(nums2)].filter((x) => nums1.includes(x) === false)

  return [u1, u2]
}
```

### Solution 2: Set

I can optimize the algorithm above by removing the use of `filter` and `includes`. Since we have created sets, we can use set operations to determine whether an element is present in the other array.

The time complexity for this algorithm becomes `O(n1 + n2)`.

```ts
function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set<number>(nums1)
  let set2 = new Set<number>(nums2)

  let u1: number[] = []
  let u2: number[] = []

  for (const x of set1) {
    if (!set2.has(x)) {
      u1.push(x)
    }
  }

  for (const x of set2) {
    if (!set1.has(x)) {
      u2.push(x)
    }
  }

  return [u1, u2]
}
```
