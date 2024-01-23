---
title: '🍰 21. Find the Index of the First Occurrence in a String'
date: '2024-01-23 16:35:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=study-plan-v2&envId=programming-skills)

# Problem

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.


# Solution

## string::find

```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        return haystack.find(needle);
    }
};
```

Time Complexity: **O(NM)**, where `N` and `M` is the length of the two strings, `haystack` and `needle`, respectively.

Space Complexity: is **O(1)**

## My implementation of string:find

```cpp
class Solution {
public:
    int _find(string s1, string s2) {
        int pos = 0;

        const int SIZE1 = s1.length();
        const int SIZE2 = s2.length();

        for(int i=0; i<SIZE1; ++i) {
            if(s1[i] == s2[0]) {
                bool isSame = true;

                for(int j=1; j<SIZE2; ++j) {
                    if(s1[i+j] != s2[j]) {
                        isSame = false;
                        break;
                    }
                }

                if(isSame) return i;
            }
        }

        return -1;
    }
    int strStr(string haystack, string needle) {
        return _find(haystack, needle);
    }
};

```

Essentially same as the above. I just explicitly implemented the `find` method.
The outer for loop runs `O(N)` time and the inner for loop runs `O(M)` times, thus, the time complexity is still **O(NM)**.


## Other implementation

```cpp
class Solution {
public:
int strStr(string haystack, string needle) {
        if(haystack.length() < needle.length()) return -1;

        int i=0;
        int j=0;

        const int SIZE1 = haystack.length();
        const int SIZE2 = needle.length();

        while(i<SIZE1 && j<SIZE2) {
            if(haystack[i++] == needle[j++]) {
                if(j == SIZE2) return i - SIZE2;
            } else {
                i = i - j + 1;
                j = 0;
            }
        }
        
        return -1;
    }
};
```

Same as above, just different implementation.

## string::substr

```cpp
class Solution {
public:
    int strStr(string s, string t) {
        const int y = s.length();
        const int x = t.length();

        for(int i=0; i<y; ++i) {
            if(s.substr(i, x) == t) return i;
        }

        return -1;
    }
};

```

This approach happens to be the fastest (at least in the Leetcode platform). I just assume this is true because unlike other implementations shown above where the worst case can be **O(N^2)** when `N = M`, this case, the substring is always the length of matched string.

But I think the time complexity is still **O(NM)**.