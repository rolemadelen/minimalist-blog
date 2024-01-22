---
title: '😾 1456. Maximum Number of Vowels in a Substring of Given Length'
date: '2023-09-17 04:59:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 😾 Medium
- [Problem Link](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given a string `s` and an integer `k`, return _the maximum number of vowel letters in any substring of_ `s` _with length_ `k`.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

---

### Solution

We'll start by calculating the number of vowels in the first `k` elements. That will be our initial maximum count, `max`.

Next, we iterate through the string from index `k` to `s.length`, where `s` is the given string.
Note that `k` defines the size of our window, and we will slide this window as we iterate through the string.

During each iteration, we examine two characters: the one that just left our window (`s[i-k]`) and the one that has just entered our window (`s[i]`).

If `s[i-k]` was a vowel, we subtract `1` from our counter because it is no longer within the window. And if `s[i]` is a vowel, we increment the counter. Lastly, we check if current counter is greater than our `max` and update it accordingly.

The time complexity for this algorithm is `O(S)` where `S` is the length of the string.

```ts
function isVowel(ch: string): boolean {
  if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u')
    return true
  return false
}

function maxVowels(s: string, k: number): number {
  let size = s.length
  if (size === 1) return isVowel(s[0]) ? 1 : 0
  if (size === 2) {
    let first: number = +isVowel(s[0])
    let second: number = +isVowel(s[1])
    return first + second
  }

  let max = 0
  for (let i = 0; i < k; ++i) {
    max += +isVowel(s[i])
  }

  let num = max
  for (let i = k; i < size; ++i) {
    if (isVowel(s[i - k])) --num
    if (isVowel(s[i])) ++num
    if (num > max) max = num
  }

  return max
}
```
