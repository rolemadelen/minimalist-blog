---
title: 'What is a Tree?'
date: '2020-08-31 07:00:00'
---

# What is Tree?
- non-linear data structure.
- organize data hierarchically. 
  + ex) family tree, organization tree, DOM tree 

## Technical definition
- collection of entities called `nodes`. Nodes are connected by `edges`. 
Each `node` contains a `value` or `data`, and it may or may not have a `child node`.

## Terminology
The `first node` of the tree is called the `root`. If this `root node` is conneted by another node,
  the root is then a `parent node` and the connected node is a `child node`.

All nodes are connected by linkes called `edges`. It manages the relationship between nodes.

`Leaves` or a `leaf nodes` are the last nodes on a tree. They are nodes without children.

- `height`: the length of the longest path to a `leaf`
- `depth`: the length of the path to its `root`

# Summary
- **Root** is the topmost `node` of the `tree`
- **Edge** is the link between two `nodes`
- **Child** is a `node` that has a `parent node`
- **Parent** is a `node` that has an `edge` to a `child node`
- **Leaf** is a `node` that does not have a `child node` in th tree
- **Height** is the length of the longest path to a `leaf`.
- **Depth** is the length of the path to its `root`.