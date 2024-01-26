---
title: '🍰 896. Monotonic Array'
date: '2024-01-26 11:56:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Problem Link](https://leetcode.com/problems/monotonic-array)

# Problem

An array is **monotonic** if it is either monotone increasing or monotone decreasing.

An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <= nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`, `nums[i] >= nums[j]`.

Given an integer array `nums`, return `true` _if the given array is monotonic, or_ `false` _otherwise_.

# Solution

Declared two flags, `isIncreasing` and `isDecreasing`, to check if the array is monotone increasing or monotone decreasing.

At the end of the loop, if both flagged were turned on, that means the array is not monotonic. If either or neither is on, that means the array is monotonic.

```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        if(nums.size() == 1) return true;

        bool isIncreasing = false;
        bool isDecreasing = false;

        for(int i=1; i<nums.size(); ++i) {
            if(nums[i] > nums[i-1]) isIncreasing = true;
            if(nums[i] < nums[i-1]) isDecreasing = true;
        }

        return isIncreasing && isDecreasing ? false : true;
    }
};
```

- Time Complexity: **O(N)**
- Space Complexity: **O(1)**
