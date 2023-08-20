---
title: "237. Delete Node in a Linked List"
posttitle: "237. Delete Node in a Linked List"
date: "2023-08-20 05:18:00"
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/delete-node-in-a-linked-list/

### Problem

There is a singly-linked list `head` and we want to delete a node `node` in it.

You are given the node to be deleted `node`. You will **not be given access** to the first node of `head`.

All the values of the linked list are **unique**, and it is guaranteed that the given node `node` is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before `node` should be in the same order.
- All the values after `node` should be in the same order.

### Solution

Our goal is to delete a given _node_ from the list, yet we lack direct access to the _head_ node.
While in a doubly linked list, re-linking is straightforward using the previous pointer, the challenge arises with the given singly linked list.

Given this constraint, instead of physically deleting the node, we simulate the deletion by manipulating values. Starting from the given node, we replace its value with the value of the next node. This process continues iteratively until the last node, which becomes redundant and is not needed.

The time complexity of this algorithm is `O(N), where N represents the number of nodes`.

```ts
function deleteNode(node: ListNode | null): void {
  let curr = node;

  while (curr && curr.next) {
    if (curr.next.next == null) {
      curr.val = curr.next.val;
      curr.next = null;
      return;
    }
    curr.val = curr.next.val;
    curr = curr.next;
  }
}
```
