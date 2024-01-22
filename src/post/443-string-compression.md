---
title: '😾 443. String Compression'
date: '2023-09-12 06:50:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 😾 Medium
- [Problem link](https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75)

### Problem

Given an array of characters `chars`, compress it using the following algorithm:

Begin with an empty string `s`. For each group of **consecutive repeating characters** in `chars`:

- If the group's length is `1`, append the character to `s`.
- Otherwise, append the character followed by the group's length.

The compressed string `s` **should not be returned separately**, but instead, be stored **in the input character array `chars`**. Note that group lengths that are `10` or longer will be split into multiple characters in `chars`.

After you are done **modifying the input array,** return _the new length of the array_.

You must write an algorithm that uses only constant extra space.

---

### Solution

```ts
function compress(chars: string[]): number {
  let i = 0
  let res = 0
  const SIZE = chars.length

  while (i < SIZE) {
    let groupLength = 1
    while (i + groupLength < SIZE && chars[i + groupLength] === chars[i]) {
      ++groupLength
    }

    chars[res++] = chars[i]
    if (groupLength > 1) {
      for (let c of groupLength.toString().split('')) {
        chars[res++] = c
      }
    }
    i += groupLength
  }

  return res
}
```
