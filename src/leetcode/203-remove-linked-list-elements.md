---
title: '203. Remove Linked List Elements'
date: '2023-08-18 06:35:00'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/remove-linked-list-elements/

### Problem

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return _the new head_.

---

### Two-Pass Solution

During the first pass, I will set a flag to indicate that '_this node should be deleted_'. I've simply used a value of _-1_ due to the constraint that numbers are positive.

Then, in the second pass, I will iterate through the list and select only the nodes whose value is not _-1_.

The time complexity is `O(N), where N is the number of nodes in the list`.

```ts
type NodeOrNull = ListNode | null

function removeElements(head: NodeOrNull, val: number): NodeOrNull {
  if (!head) return null

  let curr = head

  while (curr) {
    if (curr.val === val) curr.val = -1
    curr = curr.next
  }

  curr = head
  let newList = new ListNode(-1)
  head = newList
  while (curr) {
    if (curr.val !== -1) {
      newList.next = curr
      newList = newList.next
    }
    curr = curr.next
  }

  newList.next = null

  return head.next
}
```

---

### Recursive Solution

Shockingly, I've discovered that this problem can be easily solved using recursion. Recursion hadn't even crossed my mind as a solution approach. I clearly need more practice 😓.

The time complexity is still `O(N)`.

```ts
// https://leetcode.com/problems/remove-linked-list-elements/solutions/3345548/easiest-typescript-solution-3-liners-99/

type NodeOrNull = ListNode | null

function removeElements(head: NodeOrNull, val: number): NodeOrNull {
  if (head === null) return null
  if (head.val === val) return removeElements(head.next, val)
  return (head.next = removeElements(head.next, val)), head
}
```
