---
title: 'Selection Sort'
date: '2020-08-04 17:00:00'
---

# Selection Sort
- Unlike the insertion sort where you find the correct position by shifting its data one by one, selection sort selects the data that goes to position 1, 2, ..., n.

## How it works
- Find the smallest data and move it to `arr[0]`.
  + find the 2nd smallest data and move it to `arr[1]`.
  + find the `n`th smallest data and  move it to `arr[n-1]`.
- First `n` elements are sorted after `n` iterations.

## Implementation

```rb
def selection_sort(arr)
  n = arr.size

  for i in (0 ... n - 1)
    min = i

     find the ith smallest element
    for j in (i+1 ... n)
      if arr[j] < arr[min]
        min = j
      end
    end

     insert the found data into a correct position
    arr[i], arr[min] = arr[min], arr[i]
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

selection_sort(arr)

print arr
puts
```

## Time Complexity

### Best Case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `0`
- **T(n) = O(n^2)**

### Worst Case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n-1`
- **T(n) = O(n^2)**