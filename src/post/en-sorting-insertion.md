---
title: 'Insertion Sort'
date: '2020-08-04 17:00:00'
---

# Insertion Sort
- The most efficient algorithm for sorting small sets of data.
  + Best when data is almost sorted.
- The algorithm is similar to how most people sort game cards in their hands.
  + Compare the new card with already sorted cards and find the correct position to insert.
  + Repeat until their are no more new cards.

![](/images/algorithm/sorting/insertion.png)

## How it works
- Let `key` be the current position's data to compare with others.
- **Start with the 2nd data** (`key = arr[1]`) and compare with all data in front of the `key`.
- If the value in front of the `key` is larger, then swap its position with the key.
- Repeat the above process until their are no more values to compare or the `key` is in the right position.

## Implementation
```rb
def insertion_sort(arr)
  n = arr.size

   start from the 2nd element
  for i in (1 ... n)
    index = i
    key = arr[i]

    while index > 0 and key < arr[index-1]
       shift one space to the right
      arr[index] = arr[index - 1]
      index -= 1
    end

     insert the key at the right position
    arr[index] = key
  end
end

arr = [*1 ... 100].shuffle

print arr
puts

insertion_sort(arr)

print arr
puts
```

## Time Complexity
### Best Case
- number of comparisons: `n-1`
- number of swaps: `0`
- **T(n) = O(n)**

### Worst Case
- number of comparisons: `n*(n-1)/2`
- number of swaps: `n*(n-1)/2`
- **T(n) = O(n^2)**