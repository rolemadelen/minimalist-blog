---
title: 'What is a Binary Heap?'
date: '2020-09-10 07:00:00'
---

# What is Binary Heap?:
Binary tree with following properties: 
- It's a complete binary tree 
  + all levels are completely filled excepet possibly the last level. 
  + last level has all keys as left as possible. 
- Either Min Heap or Max Heap 
  + Min Heap 
    * The key at root must be MIN among all keys (recursively true with its offsprings)
  + Max Heap 
    * The key at root must be MAX among all keys (recursively true with its offsprings)

# How is it represented? 
Binary Heap is a complete binary tree and it's typically represented as an array. 
- The root element will be at Arr[0] 
- Below table shows indexes of other nodes for the i'th node, i.e, Arr[i]: 

```
Arr[0] is the root.
Arr[ (i-1) / 2 ]    ----     returns the parent node  
Arr[ (2*i) + 1 ]    ----     returns the left child node
Arr[ (2*i) + 2 ]    ----     returns the right child node
```

# Applications of Heaps 
- Heap Sort
- Priority Queue 
- Graph Algorithms 
  + Dijkstra 
  + Prim's Minimum Spanning Tree 
- K'th Largest Element in an array 
- Sort an almost sorted array 
- Merge K Sorted Arrays 

# Operations on Min Heap 
- getMin() - returns the root elem of Min Heap. O(1)
- extractMin() - removes the min elem (root) from Min Heap. O(log n) bc it needs to maintain the heap structure using heapify() func. 
- decreaseKey() - decreases value of key. O(log n) bc we need to fix any violated heap property. 
- insert() - inserts a new key. O(log n) 
- delete() - deletes a key. O(log n)
