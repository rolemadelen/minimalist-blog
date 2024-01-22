---
title: '🍰 141. Linked List Cycle'
date: '2023-08-15 09:35:00'
lang: 'en'
type: 'ps'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/linked-list-cycle/

### Problem

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` _if there is a cycle in the linked list_. Otherwise, return `false`.

---

### Solution

I'm going to use two pointers: one will move one node at a time (_tortoise_), while the other will move twice as fast (_hare_). If there is a loop in the list, the _hare_ pointer will eventually catch up to the _tortoise_ pointer, confirming the presence of a cycle. If both pointers reach _NULL_, it indicates the absence of a cycle.

The number of iterations required will be the number of nodes in the list, plus some extras for the hare to catch up to the tortoise. As a result, the time complexity will be `O(N), where N = the number of nodes in the list`.

```ts
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false
  if (!head.next) return false
  if (head.next == head) return true

  let slow = head
  let fast = head.next

  while (fast && fast.next && slow) {
    slow = slow.next
    fast = fast.next.next

    if (slow == fast) return true
  }

  return false
}
```
