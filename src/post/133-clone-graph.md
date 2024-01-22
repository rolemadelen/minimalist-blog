---
title: '(133) Clone Graph'
date: '2023-08-29 21:27:00'
lang: 'en'
type: 'note'
---

### Problem

Given a reference of a node in a **[connected](<https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_graph>)** undirected graph.

Return a [**deep copy**](https://en.wikipedia.org/wiki/Object_copying#Deep_copy) (clone) of the graph.

Each node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.

class Node {
public int val;
public List<Node> neighbors;
}

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.

**An adjacency list** is a collection of unordered **lists** used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with `val = 1`. You must return the **copy of the given node** as a reference to the cloned graph.

### Solution

```ts
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

type NodeOrNull = Node | null
function cloneGraph(node: NodeOrNull): NodeOrNull {
  const visited = new Map<Node, Node>()
  return clone(node, visited)
}

function clone(node: NodeOrNull, visited: Map<Node, Node>): NodeOrNull {
  if (!node) return node
  if (visited.has(node)) return visited.get(node)

  const copy = new Node(node.val)
  visited.set(node, copy)

  for (const neighbor of node.neighbors) {
    copy.neighbors.push(clone(neighbor, visited))
  }

  return copy
}
```
