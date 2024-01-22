---
title: '🍰 1768. Merge Strings Alternatively'
date: '2023-09-11 13:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

### Problem

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return _the merged string._

---

### Solution

The time complexity is `O(m + n)` where `m` is length of `word1` and `n` is length of `word2`.

```ts
function mergeAlternately(word1: string, word2: string): string {
  let index1 = 0
  let index2 = 0
  const MAX1 = word1.length
  const MAX2 = word2.length
  let ans = ''

  while (index1 < MAX1 || index2 < MAX2) {
    if (index1 < MAX1) ans += word1[index1]
    if (index2 < MAX2) ans += word2[index2]

    index1 += 1
    index2 += 1
  }

  return ans
}
```
