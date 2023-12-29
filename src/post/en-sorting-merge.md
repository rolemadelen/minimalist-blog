---
title: 'Merge Sort'
date: '2020-08-08 07:00:00'
lang: 'en'
---

# Merge Sort
This algorithm is known as the **divide-and-conquer** algorithm. It breaks the problem into several
 subproblems that are similar to the original larger problem but smaller in size.
 It solve subproblems recursively and then combine these solutions to create a solution to the
 original problem.

Divide and Conquer approach involves three steps:
1. **Divide** the problem into several subproblems.
2. **Conquer** the subproblems by solving them recursively.
3. **Combine** the solutions to the subproblems into the solution for the original problem.

The **advantage** of Divide and Conquer algorithm.
- Can solve a difficult problem by dividing into smaller sub-problems.
  + for example) Tower of Hanoi
- It usses cache effectively.
  + When the problem becomes simple enough to conquer it, it can be solved within the cache without accessing the slower main memory.

The **disadvantage** of Divide and Conquer algorithm.
- This algorithm uses recursion and recursion is slow.
- Recursive call stacks the stack frame which increases the memory usage.


# Algorithm Summary
1. **Divide** - Divide the array with `n` elements into two subarrays of `n/2` elements each.
2. **Conquer** - Sort the two subarrays recursively using merge sort.
3. **Combine** - Merge the two sorted subarrays to produce the sorted array.


# Implementation

```rb
def merge(arr, left, mid, right)
  sorted_arr = [0]*right
  p = left
  q = mid+1
  k = left   index of sorted_arr

   combine two lists
  while (p <= mid and q <= right)
    if arr[p] < arr[q]
      sorted_arr[k] = arr[p];
      p += 1
    else
      sorted_arr[k] = arr[q]
      q += 1
    end
    k += 1
  end

   read all remaining data on the left
  while p <= mid
    sorted_arr[k] = arr[p];
    p += 1
    k += 1
  end

   copy over sorted data
  for i in (left...k) do
    arr[i] = sorted_arr[i]
  end

  arr
end

def merge_sort(arr, left, right)
  mid = 0
  if(left < right)
    mid = left + (right-left)/2
    merge_sort(arr, left, mid)
    merge_sort(arr, mid+1, right)
    merge(arr, left, mid, right)
  end
end

arr = [1, 9, 7, 10, 8, 2, 51]
size = arr.size

p arr
 merge_sort(arr, 0, size-1)
p arr
```

# Time Complexity
- Divide process
  + Dividing arrays into half in every step: **O(log n)**
  + finding the mid: **O(1)**
- Merge process
  + merge `n` elements: O(n-1) =  **O(n)**
- T(n) = O(n*log n)