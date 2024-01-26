---
title: '🍰 1502. Can Make Arithmetic Progression From Sequence'
date: '2024-01-26 11:39:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence)

# Problem

A sequence of numbers is called an **arithmetic progression** if the difference between any two consecutive elements is the same.

Given an array of numbers `arr`, return `true` _if the array can be rearranged to form an **arithmetic progression**. Otherwise, return_ `false`.

# Solution

If there is an arithmetic progression, we can sort the numbers and difference of any two numbers will still be equal to any other two numbers.

```cpp
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        int t = arr[1] - arr[0];

        const int SIZE = arr.size();
        for(int i=2; i<SIZE; ++i) {
            if(arr[i] - arr[i-1] != t) return false;
        }

        return true;
    }
};
```

- Time Complexity: **O(NlogN)**
- Space Complexity: **O(1)**