---
title: '(797) All Paths From Source to Target'
date: '2023-08-31 21:00:00'
lang: 'en'
type: 'note'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/all-paths-from-source-to-target/description/

### Problem

Given a directed acyclic graph (**DAG**) of `n` nodes labeled from `0` to `n - 1`, find all possible paths from node `0` to node `n - 1` and return them in **any order**.

The graph is given as follows: `graph[i]` is a list of all nodes you can visit from node `i` (i.e., there is a directed edge from node `i` to node `graph[i][j]`).

### Solution

```ts
function allPathsSourceTarget(graph: number[][]): number[][] {
  const res: number[][] = []

  const dfs = (i: number, stack: number[]) => {
    if (stack.includes(i)) return

    stack.push(i)

    if (i === graph.length - 1) res.push(stack)
    else graph[i].forEach((node) => dfs(node, [...stack]))
  }

  dfs(0, [])
  return res
}
```
