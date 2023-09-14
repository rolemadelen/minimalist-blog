---
title: 'Is Subsequence'
date: '2023-09-14 06:40:00'
---

- Difficulty: 🍰 Easy
- [Is Subsequence](https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given two strings `s` and `t`, return `true` _if_ `s` _is a **subsequence** of_ `t`_, or_ `false` _otherwise_.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

---

### Solution

Keep track of two strings `s` and `t` using two indexes `i` and `j`. As I iterate the string `t`, I check if a character is equal to the one I'm tracking, `s[i]`. If it's equal, I move on to the next character in string `s`. Once all the characters are seen in string `s`, we can confirm that the string `s` is a subsequence of string `t`, thus return `true`. Otherwise, return `false`.

The time complexity of this algorithm is `O(S)`, where `S` is the length of the string `t`.

```ts
function isSubsequence(s: string, t: string): boolean {
  const SIZE1 = s.length
  const SIZE2 = t.length
  let i = 0

  if (SIZE1 === 0) return true

  for (let j = 0; j < SIZE2; ++j) {
    if (t[j] === s[i]) {
      ++i
      if (i === SIZE1) return true
    }
  }

  return false
}
```
