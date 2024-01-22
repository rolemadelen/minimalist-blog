---
title: '(1207) Unique Number of Occurrences'
date: '2023-09-22 07:00:00'
lang: 'en'
type: 'note'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given an array of integers `arr`, return `true` _if the number of occurrences of each value in the array is **unique** or_ `false` _otherwise_.

---

### Solution

If the number of occurrences of each value in the array is unique, then the number of unique elements and number of unique occurrences should be the same.

I first counted frequencies using a map. Then, I counted unique frequencies and checked if those two values match. If they match, then return `true` else return `false`.

The time complexity of this algorithm is `O(n)` where `n` is the size of `arr`.

```ts
function uniqueOccurrences(arr: number[]): boolean {
  let map = new Map<number, number>()

  for (const x of arr) {
    let v = map.get(x) || 0
    map.set(x, v + 1)
  }

  let freq = new Set<number>()
  for (let [_, value] of map) {
    freq.add(value)
  }

  return freq.size === map.size
}
```
