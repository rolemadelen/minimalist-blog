---
title: '🍰 58. Length of Last Word'
date: '2024-01-27 17:50:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/length-of-last-word)

# Problem

Given a string `s` consisting of words and spaces, return _the length of the **last** word in the string._

A **word** is a maximal substring consisting of non-space characters only.
 
# Solution

Start from the end of the string, check if it's a space. If it is, trim it by decreasing the position `pos`. Then, start counting the length of a word until it meets another space character or it reaches the first character.

```cpp
class Solution {
public:
    int lengthOfLastWord(string s) {
        int ans = 0;
        int i = s.size()-1;

        if(s[i] == ' ') {
            while(s[i] == ' ') {--i;}
        }

        while(s[i--] != ' ') {
            ++ans;
            if(i<0) break;
        }

        return ans;
    }
};
```

- Time Complexity: **O(S)**, where `S = string size`
- Space Complexity: **O(1)**