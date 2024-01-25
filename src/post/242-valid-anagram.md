---
title: '🍰 242. Valid Anagram'
date: '2024-01-24 07:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/valid-anagram/


# Problem
Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Solution

## algorithm - sort

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(), s.end()); //nlogn
        sort(t.begin(), t.end()); //nlogn

        return s == t;
    }
};
```

- Time Complexity: **O(nlogn)**
- Space Complexity: **O(1)**

## map

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;

        map<char, int> anagram; // n
    
        // O(n1) = string length
        for(char ch : s) {
	        // operator[] → log m, m = container size
            anagram[ch] += 1;
        }

		// O(n2) = string length
        for(char ch : t) {
	        // operator[] → log m
            anagram[ch] -= 1;
        }

        auto it = anagram.begin();
        // while loop -> O(n)
        while(it != anagram.end()) {
            if(it->second < 0) return false;
            ++it;
        }

        return true;
    }
};
```

- Time Complexity: **O(nlogn)**
- Space Complexity: **O(n)**

## Counting Frequencies - Array

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int freq[26] = {0};
		
		// O(N)
        for(char ch : s) {
            freq[ch-'a'] += 1;
        }
        
        // O(M)
        for(char ch : t) {
            freq[ch-'a'] -= 1;
        }

        for(int f : freq) {
            if(f != 0) return false;
        }

        return true;
    }
};
```

Simple and old method is the best? This happens to be the fastest.

- Time Complexity: **O(N + M)**
- Space Complexity: **O(S)**, where `S` = size of the alphabet
