---
title: '🍰 1071. Greatest Common Divisor of Strings'
date: '2023-09-11 13:02:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

### Problem

For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return _the largest string_ `x` _such that_ `x` _divides both_ `str1` _and_ `str2`.

---

### Solution: Bruteforce

```ts
function gcdOfStrings(str1: string, str2: string): string {
  let short: string
  let long: string

  if (str1.length < str2.length) {
    short = str1
    long = str2
  } else {
    short = str2
    long = str1
  }

  let base = short

  while (base.length > 0) {
    let isShortDivisible = short.replaceAll(base, '') === ''
    let isLongDivisible = long.replaceAll(base, '') === ''

    if (isShortDivisible && isLongDivisible) {
      return base
    } else {
      base = base.slice(0, base.length - 1)
    }
  }

  return base
}
```

---

### Solution: GCD

```ts
function gcd(x: number, y: number): number {
  if (y == 0) return x
  return gcd(y, x % y)
}

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return ''

  let gcdLength = gcd(str1.length, str2.length)
  return str1.slice(0, gcdLength)
}
```
