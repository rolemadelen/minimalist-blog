---
title: '(151) Reverse Words in a String'
date: '2023-09-11 13:06:00'
lang: 'en'
type: 'note'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

### Problem

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return _a string of the words in reverse order concatenated by a single space._

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

---

### Solution

```ts
function reverseWords(s: string): string {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
}
```
