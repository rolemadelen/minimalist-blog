---
title: '2181. Merge Nodes in Between Zeros'
date: '2023-08-24 22:04:00'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/merge-nodes-in-between-zeros/description/

### Problem

You are given the `head` of a linked list, which contains a series of integers **separated** by `0`'s. The **beginning** and **end** of the linked list will have `Node.val == 0`.

For **every** two consecutive `0`'s, **merge** all the nodes lying in between them into a single node whose value is the **sum** of all the merged nodes. The modified list should not contain any `0`'s.

Return _the_ `head` _of the modified linked list_.

### Solution

I utilized a flag called `open`. The flag is set when zero is encountered an odd number of times. Until the flag is turned off, I accumulate nodes' values and append them to the result.

The time complexity is `O(N)`, where N is the number of nodes.

```ts
type NodeOrNull = ListNode | null
function mergeNodes(head: NodeOrNull): NodeOrNull {
  if (!head) return null

  let dummy = head
  let ans = head

  let sum = 0
  let open = false
  while (dummy && dummy.next) {
    if (dummy.val == 0) {
      if (!open) {
        open = true
      } else {
        console.log(sum)
        open = false
        ans.val = sum
        ans = ans.next
        sum = 0
        continue
      }
    }

    sum += dummy.val
    dummy = dummy.next
  }

  ans.val = sum
  ans.next = null

  return head
}
```
