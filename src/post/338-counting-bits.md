---
title: '🍰 388. Counting Bits'
date: '2023-09-09 22:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/counting-bits/description/?envType=daily-question&envId=2023-09-01

### Problem

Given an integer `n`, return _an array_ `ans` _of length_ `n + 1` _such that for each_ `i` (`0 <= i <= n`)_,_ `ans[i]` _is the **number of**_ `1`_**'s** in the binary representation of_ `i`.

---

### Solution

The constraint for the given number is that it must be smaller than or equal to `100_000`. The binary representation of this number is `0b11000011010100000`, which occupies 17 bits. To represent it in 17 bits, I used `131071` as a mask, which consists of 17 ones in binary.

After performing the AND operation with the given number and the masked number, I obtain my numbers in the correct binary format. Then, I simply filter out the _ones_ and count how many of them there are, adding them to the `answer` array.

The time complexity of this algorithm is `O(nlogn)`.

```ts
function countOnes(n: number): number {
  let binaryStr = n.toString(2)
  return binaryStr.split('1').length - 1
}

function countBits(n: number): number[] {
  let mask = 131071
  let ans = [0]

  let target = 1
  while (target <= n) {
    ans.push(countOnes(target))
    target += 1
  }

  return ans
}
```
