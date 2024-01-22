---
title: '(1971) Find if Path Exists in Graph'
date: '2023-08-27 18:30:00'
lang: 'en'
type: 'note'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/find-if-path-exists-in-graph/

### Problem

There is a **bi-directional** graph with `n` vertices, where each vertex is labeled from `0` to `n - 1` (**inclusive**). The edges in the graph are represented as a 2D integer array `edges`, where each `edges[i] = [ui, vi]` denotes a bi-directional edge between vertex `ui` and vertex `vi`. Every vertex pair is connected by **at most one** edge, and no vertex has an edge to itself.

You want to determine if there is a **valid path** that exists from vertex `source` to vertex `destination`.

Given `edges` and the integers `n`, `source`, and `destination`, return `true` _if there is a **valid path** from_ `source` _to_ `destination`_, or_ `false` _otherwise\_\_._

### BFS Solution

The time complexity is `O(V+E), where V is number of vertices and E is edges`. And the space complexity is `O(V)`.

```ts
function validPath(
  v: number,
  edges: number[][],
  s: number,
  d: number
): boolean {
  if (s == d) return true

  let adj = new Array()
  for (let i = 0; i < v; ++i) adj.push(new Array())

  for (const edge of edges) {
    adj[edge[0]].push(edge[1])
    adj[edge[1]].push(edge[0])
  }

  let visited: boolean[] = new Array(v).fill(false)

  let q = new Array()

  visited[s] = true
  q.push(s)

  while (q.length !== 0) {
    s = q.pop()

    for (let i = 0; i < adj[s].length; ++i) {
      if (adj[s][i] === d) return true

      if (!visited[adj[s][i]]) {
        visited[adj[s][i]] = true
        q.push(adj[s][i])
      }
    }
  }

  return false
}
```
