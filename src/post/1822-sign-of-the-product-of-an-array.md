---
title: '🍰 1822. Sign of the Product of an Array'
date: '2024-01-26 11:28:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/sign-of-the-product-of-an-array)

# Problem

There is a function `signFunc(x)` that returns:

- `1` if `x` is positive.
- `-1` if `x` is negative.
- `0` if `x` is equal to `0`.

You are given an integer array `nums`. Let `product` be the product of all values in the array `nums`.

Return `signFunc(product)`.

# Solution

One naive way is to actually find the product of all  numbers and determine whether it is positive, negative, or zero. However, we can simply count number of negatives.

If there are even negatives, the product at the end will be positive. If there were zero while counting negatives, the final product will be zero.

```cpp
class Solution {
public:
    int arraySign(vector<int>& nums) {
        int neg = 0;
        for(int val : nums) {
            if(val == 0) return 0;
            if(val < 0) neg += 1;
        }

        return (neg&1) ==  0 ? 1 : -1;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**