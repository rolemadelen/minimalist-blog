---
title: '(1791) Find Center of Star Graph'
date: '2023-08-26 21:30:00'
lang: 'en'
type: 'note'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/find-center-of-star-graph/description/

### Problem

There is an undirected **star** graph consisting of `n` nodes labeled from `1` to `n`. A star graph is a graph where there is one **center** node and **exactly** `n - 1` edges that connect the center node with every other node.

You are given a 2D integer array `edges` where each `edges[i] = [ui, vi]` indicates that there is an edge between the nodes `ui` and `vi`. Return the center of the given star graph.

---

### Solution

A center of a star graph with `N` nodes will have `N-1` incoming edges. I will count number of incoming edges and find one that satisfies the above rule.

The time complexity is `O(V+E), where V = vertices and E = edges`.

```ts
function findCenter(edges: number[][]): number {
  let cnt = new Array(edges.length + 2)
  cnt.fill(0)
  for (const edge of edges) {
    cnt[edge[0]] += 1
    cnt[edge[1]] += 1
  }

  for (const [i, x] of cnt.entries()) {
    if (x === edges.length) return i
  }

  return -1
}
```
