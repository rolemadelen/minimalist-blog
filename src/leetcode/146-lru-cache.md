---
title: "146. LRU Cache"
posttitle: "146. LRU Cache"
date: "2023-08-17 19:50:00"
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/lru-cache

### Problem

Design a data structure that follows the constraints of a **[Least Recently Used (LRU) cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU)**.

Implement the `LRUCache` class:

- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.
- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.
- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.

The functions `get` and `put` must each run in `O(1)` average time complexity.

---

### Solution using a Map

An LRU Cache is typically implemented using a doubly linked list and a hash map. However, in this problem, I employed a map to create the LRU cache.

JavaScript's map maintains the order of inserted items, allowing me to easily evict the least recently used (LRU) item by deleting the first key.

The time complexity is constant for both the `get` and `put` functions.

```ts
class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) return -1;

    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.map.size == this.capacity && !this.map.has(key)) {
      const lru = this.map.keys().next().value;
      this.map.delete(lru);
    }

    this.map.delete(key);
    this.map.set(key, value);
  }
}
```
