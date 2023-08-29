---
title: '160. Intersection of Two Linked List'
date: '2023-08-18 06:20:00'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/intersection-of-two-linked-lists/

### Problem

Given the heads of two singly linked-lists `headA` and `headB`, return _the node at which the two lists intersect_. If the two linked lists have no intersection at all, return `null`.

**Note** that the linked lists must **retain their original structure** after the function returns.

---

### O(N) Solution

We can utilize a map to count the frequency of each node that appears in the list. The first node that appears twice indicates the point where the two lists meet.

The time complexity of this algorithm is `O(max(N, M)), where N and M represent the number of nodes in lists A and B respectively`.

```ts
type NodeOrNull = ListNode | null

function getIntersectionNode(headA: NodeOrNull, headB: NodeOrNull): NodeOrNull {
  const map: Map<ListNode, number> = new Map()

  while (headA) {
    map.set(headA, 1)
    headA = headA.next
  }

  while (headB) {
    if (map.has(headB)) return headB
    map.set(headB, 1)
    headB = headB.next
  }

  return null
}
```
