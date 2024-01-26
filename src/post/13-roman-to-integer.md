---
title: '🍰 13. Roman to Integer'
date: '2024-01-26 16:50:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/roman-to-integer)

# Problem

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

**Symbol**       **Value**
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

# Solution

I used `if` and `switch` statement to check each of roman numerals.

## if-switch
```cpp
class Solution {
public:
    int romanToInt(string s) {
        int n = 0;
        const int SIZE = s.size();

        for(int i=0; i<SIZE; ++i) {
            if(s[i] == 'I') {
                switch(s[i+1]) {
                    case 'V':
                        n += 4;
                        ++i;
                        break;
                    case 'X':
                        n += 9;
                        ++i;
                        break;
                    default:
                        n += 1;
                }
            } else if(s[i] == 'X') {
                switch(s[i+1]) {
                    case 'L':
                        n += 40;
                        ++i;
                        break;
                    case 'C':
                        n += 90;
                        ++i;
                        break;
                    default:
                        n += 10;
                }
            } else if(s[i] == 'C') {
                switch(s[i+1]) {
                    case 'D':
                        n += 400;
                        ++i;
                        break;
                    case 'M':
                        n += 900;
                        ++i;
                        break;
                    default:
                        n += 100;
                }
            } else if(s[i] == 'V') {
                n += 5;
            } else if(s[i] == 'L') {
                n += 50;
            } else if(s[i] == 'D') {
                n += 500;
            } else if (s[i] == 'M') {
                n += 1000;
            }
        }

        return n;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**

## map

I thought above solution was a bit hard to read and got lengthy. I used `map` this time to simply go through each roman numeral and add or subtract from the total.

If you take a look at `40 (XL)`, it is equivalent to subtracting `10` and adding `50` later. Thus, instead of checking for 2 characters at a time creating a lengthy code, I can simply check for the next roman numeral symbol and decide whether to subtract because it's a combination of 2 characters, or simply add it.

```cpp
class Solution {
public:
    int romanToInt(string s) {
        map<char, int> m;
        m['I'] = 1;
        m['V'] = 5;
        m['X'] = 10;
        m['L'] = 50;
        m['C'] = 100;
        m['D'] = 500;
        m['M'] = 1000;

        int ans = 0;
        const int SIZE = s.size();

        for(int i=0; i<SIZE-1; ++i) {
            if(m[s[i]] < m[s[i+1]]) ans -= m[s[i]];
            else ans += m[s[i]];
        }

        return ans + m[s.back()];
    }
};
```

- Time Complexity: **O(S)**, where `S = string length`
- Space Complexity: **O(4n)**, where `n = sizeof(int)` 
