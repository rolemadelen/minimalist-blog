---
title: '🍰 997. Find the Town Judge'
date: '2023-08-21 17:30:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- [Find the Town Judge](https://leetcode.com/problems/find-the-town-judge/description/)

### Problem

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties **1** and **2**.

You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled `ai` trusts the person labeled `bi`. If a trust relationship does not exist in `trust` array, then such a trust relationship does not exist.

Return _the label of the town judge if the town judge exists and can be identified, or return_ `-1` _otherwise_.

---

### Solution

I created two adjacency lists. One is to count the number of incoming edges to find the town judge, and the other one is for the outgoing edges to make sure that our potential town judge is not trusting anyone.

The time complexity is `O(V+E)` since I used an adjacency list, and the space complexity is `O(V)`.

```ts
function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1
  let incoming = new Array()
  let outgoing = new Array()
  for (let i = 0; i <= n; ++i) {
    incoming[i] = new Array()
    outgoing[i] = new Array()
  }

  for (const edge of trust) {
    outgoing[edge[0]].push(edge[1])
    incoming[edge[1]].push(edge[0])
  }

  for (let i = 0; i <= n; ++i) {
    if (incoming[i].length === n - 1 && outgoing[i].length === 0) return i
  }

  return -1
}
```
