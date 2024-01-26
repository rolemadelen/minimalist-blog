---
title: '🍰 459. Repeated Substring Pattern'
date: '2024-01-25 17:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/repeated-substring-pattern/

# Problem

Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 
# Solution

## naive

First attempt. I approached this problem by popping off a character from the end one by one, and I checked if that partial string is in the original string. If it is, I check if multiples of those string forms the original string. If so, return `true`, otherwise return `false`. 

But of course, this was very slow.

```cpp
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        const int SIZE = s.size();
        string target = s.substr(0, SIZE-1); // O(N)

		// O(M), M = target size
        while(target.size() > 0) {
	        // O(N + M), N = s.size
            if(s.find(target) != string::npos) {
                string temp = target;
                int k = SIZE / target.size();
                // O(n・k), 
                while(--n) temp += target;
		        // O(N), for string comparison
                if(temp == s) return true;
            }

            target = target.substr(0, target.size() - 1);
        }

        return false;
    }
};
```

- Time Complexity: **O(M ・ (N + M + n・k))** / *not sure*
- Space Complexity: **O(N)**, where N = target size

## the middle

If there's a repeated substring `t` in the string `s`, then we know that `s/2` has to be equal to `t` at one point. 

```cpp
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        const int SIZE = s.size();

        for(int i=(SIZE>>1); i>=1; --i) {
            if(SIZE % i == 0) {
                if(s.substr(0, SIZE-i) == s.substr(i, SIZE)) {
                    return true;
                }
            }
        }

        return false;
    }
};
```

- Time Complexity: O(N/2) which is **O(N)**
- Space Complexity: O(1)