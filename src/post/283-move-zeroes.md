---
title: '🍰 283. Move Zeroes'
created: '2023-09-14 06:30:00'
date: '2024-01-26 11:00:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Move Zeroes](https://leetcode.com/problems/move-zeroes)

# Problem

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

---

# Solution

## Array

Use a separate variable `pos` to track the position of non-zero values. Then, fill `n-pos` to `n` with 0s.

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int pos = 0;
        for(int i=0; i<nums.size(); ++i) {
            if(nums[i] != 0) {
                nums[pos++] = nums[i];
            }
        }

        while(pos < nums.size()) {
            nums[pos++] = 0;
        }
    }
};
```


- Time Complexity: **O(N)**
- Space Complexity: **O(1)**


## swap

Same as above except that, there is no need to fill zeroes at the end. I can simply swap non-zero values as I track positions.

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int pos = 0;
        for(int i=0; i<nums.size(); ++i) {
            if(nums[i] != 0) {
                swap(nums[i], nums[pos++]);
            }
        }
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**