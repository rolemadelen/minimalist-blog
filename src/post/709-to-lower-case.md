---
title: '🍰 709. To Lower Case'
date: '2024-01-27 17:56:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/to-lower-case)

# Problem

Given a string `s`, return _the string after replacing every uppercase letter with the same lowercase letter_.

# Solution

The ascii code of an uppercase `A` is `65` and the lowercase is `a` is `97`. The difference is `32`. We can use this fact to invert an uppercase letter to lowercase.

```cpp
class Solution {
public:
    string toLowerCase(string s) {
        const int SIZE = s.size();
        for(int i=0; i<SIZE; ++i) {
            if(s[i] >= 65 && s[i] <= 90) {
                s[i] += 32;
            }
        } 

       return s;
    }
};
```

- Time Complexity: **O(S)**, where `S = string size`
- Space Complexity: **O(1)**