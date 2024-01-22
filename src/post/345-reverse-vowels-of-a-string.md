---
title: '🍰 345. Reverse Vowels of a String'
date: '2023-09-11 13:05:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

### Problem

Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

---

### Solution

```ts
function vowel(ch: string): boolean {
  return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase())
}

function reverseVowels(s: string): string {
  let p = 0
  let q = s.length - 1
  let str = s.split('')

  while (p < q) {
    let isPVowel = vowel(s[p])
    let isQVowel = vowel(s[q])

    if (isPVowel && isQVowel) {
      ;[str[p], str[q]] = [str[q], str[p]]
    } else if (isPVowel) {
      q -= 1
      continue
    } else if (isQVowel) {
      p += 1
      continue
    }

    p += 1
    q -= 1
  }

  return str.join('')
}
```
