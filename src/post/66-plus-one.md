---
title: '🍰 66. Plus One'
date: '2024-01-26 11:17:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/plus-one)

# Problem

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return _the resulting array of digits_.

# Solution

The idea is same as how we normally do the additions in math. First increment the value of the given digits from the end, then carry on to the next digit one by one. At the end, if we still have a carry, insert `1` to the beginning of the vector and return it.

```cpp
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        bool carry = false;
        digits[digits.size() - 1] += 1;

        for(int i=digits.size()-1; i>=0; --i) {
            digits[i] += carry;
            carry = digits[i] / 10;
            digits[i] %= 10;
        }

        if(carry) digits.insert(digits.begin(), 1);

        return digits;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)** 