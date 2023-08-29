---
title: '1669. Merge In Between Linked Lists'
date: '2023-08-23 21:04:00'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/merge-in-between-linked-lists/description/

### Problem

You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.

Remove `list1`'s nodes from the `ath` node to the `bth` node, and put `list2` in their place.

The blue edges and nodes in the following figure indicate the result:

### Solution

The process is quite straightforward:

1. Determine the position of a node before the `a_th`.
2. Connect the node from step 1 to `list2`.
3. Identify the position of a node immediately following the `b_th`.
4. Traverse to the end of `list2` and link the last node's `next` to the node we located in step 3.

The time complexity is `O(N + M), N = list1 size and M = list2 size`

```ts
type NodeOrNull = ListNode | null
function mergeInBetween(
  list1: NodeOrNull,
  a: number,
  b: number,
  list2: NodeOrNull
): NodeOrNull {
  let dummy = list1
  let dummy2 = list1.next
  while (b--) dummy2 = dummy2.next

  while (a-- > 1) dummy = dummy.next

  dummy.next = list2

  let dummy3 = list2
  while (dummy3 && dummy3.next) dummy3 = dummy3.next
  dummy3.next = dummy2

  return list1
}
```
