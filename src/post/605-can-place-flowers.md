---
title: '(605) Can Place Flowers'
date: '2023-09-11 13:04:00'
lang: 'en'
type: 'note'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

### Problem

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in **adjacent** plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` *if* `n` _new flowers can be planted in the_ `flowerbed` _without violating the no-adjacent-flowers rule and_ `false` _otherwise_.

---

### Solution

```ts
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let idx = 0
  const SIZE = flowerbed.length

  while (n && idx < SIZE) {
    if (flowerbed[idx] === 0) {
      let isLeftEmpty = idx === 0 || flowerbed[idx - 1] === 0
      let isRightEmpty = idx === SIZE - 1 || flowerbed[idx + 1] === 0

      if (isLeftEmpty && isRightEmpty) {
        flowerbed[idx] = 1
        n -= 1
        idx += 1
      }
    }

    idx += 1
  }

  return n === 0
}
```
