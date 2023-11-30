---
title: 'Bubble Sort'
date: '2020-08-04 07:00:00'
---

# Bubble Sort
Bubble sort is the simplest sorting algorithm which works by repeatedly comparing and swapping two adjacent elements if they're not in the correct order.


## How it works

Imagine you have an array -- `[3, 1, 5, 4]`  -- and your task it to sort them in ascending order.

![](/images/algorithm/sorting/bubble1.png)

The idea behind bubble sort is that we're comparing and swapping adjacent elements if the left element is larger than one on the right.

![](/images/algorithm/sorting/bubble2.png)

After the first iteration (first pass), we have located the largest element (`5`) and placed it on the correct position. After the 2nd iteration, we will have the 2nd largest element placed it its correct position. We repeat this process for `n-1` times in an array with size `n`. 

![](/images/algorithm/sorting/bubble3.png)

As we compare adjacent elements, we can set a flag -- `swapped` -- to check if swap has occured. At the end of the iteration if the flag is not set -- `swapped = false` -- we can exit the process since all elements are in the correct order.

## Implementation

```rb
def bubble_sort(arr)
  n = arr.size
  for i in (0 ... n)
     a flag used to check if swap has occured
    isSwapped = false

    for j in (0 ... n - i - 1)
       swap if left is larger than the right
      if arr[j] > arr[j+1]
         set the flag
        isSwapped = true
        arr[j], arr[j+1] = arr[j+1], arr[j]
      end
    end

     exit if the array is already sorted
    if isSwapped == false
      break
    end
  end

  arr
end
```

# Time Complexity

## Best Case
- number of comparisons: `n-1` times
- number of swaps: `0` times
- **T(n) = O(n)**

## Worst Case
- number of comparisons: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- number of swaps: (n-1) + (n-2) + ... + 1 = `n*(n-1)/2` times
- **T(n) = O(n^2)**