---
title: "206. Reverse Linked List"
posttitle: "206. Reverse Linked List"
date: "2023-08-20 05:50:00"
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/reverse-linked-list/description/

### Problem

Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

### Iterative Solution

- Time Complexity: O(N)
- Space Complexity: O(1)

```ts
type NodeOrNull = ListNode | null;
function reverseList(head: NodeOrNull): NodeOrNull {
  let prev = null;
  let curr = head;

  while (curr != null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

### Recursive Solution

- Time Complexity: O(N)
- Space Complexity: O(N)

```ts
type NodeOrNull = ListNode | null;
function reverseList(head: NodeOrNull): NodeOrNull {
  if (!head || !head.next) return head;

  let prev: NodeOrNull = null;
  let h2 = reverseList(head.next);
  head.next.next = head;
  head.next = prev;
  return h2;
}
```
