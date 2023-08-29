---
title: '876. Middle of the Linked List'
date: '2023-08-21 16:30:00'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/middle-of-the-linked-list/

### Problem

Given the `head` of a singly linked list, return _the middle node of the linked list_.

If there are two middle nodes, return **the second middle** node.

---

### Solution

I utilized two pointers: _slow_ and _fast_. Since the _fast_ pointer moves twice as fast as the _slow_ pointer, when it reaches the end of the list, the _slow_ pointer will naturally be positioned at the middle of the list.

The time complexity of this problem is `O(N), where N is number of nodes`.

```ts
function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head

  let s = head
  let f = head.next

  while (f && f.next) {
    s = s.next
    if (!f.next) return s.next
    f = f.next
    if (!f.next) return s
    f = f.next
  }

  return s.next
}
```
