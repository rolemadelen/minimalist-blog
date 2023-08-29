---
title: '19. Remove Nth Node From End of List'
date: '2023-08-13 09:04:00'
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/remove-nth-node-from-end-of-list/

### Problem

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

---

### Naive Solution

- Iterate through the list to count number of nodes; `O(N), N = number of nodes`
- Locate to the node one before the one we're going to delete; `O(N-n-1), n = given`
- Remove the node and return head; `O(1)`

```ts
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null
  let count = 0
  let dummy = head
  while (dummy) {
    count += 1
    dummy = dummy.next
  }

  count = count - n - 1
  dummy = head

  if (count < 0) {
    dummy = dummy.next
    return dummy
  }

  while (count) {
    dummy = dummy.next
    count -= 1
  }

  dummy.next = dummy && dummy.next ? dummy.next.next : null

  return head
}
```

Time complexity: `O(N)`

---

### One Pass Solution

- Use two pointers: _fast_ and _slow_
- First, iterate the list `n` times using _fast_ pointer; `O(n), n = given`
- If _fast_ reached the end, return `null`; `O(1)`
- Continue iterating the list with _fast_ until it reaches the end; `O(N-n), N = length of a list`
  - as you iterate, move _slow_ as well.
- _slow_ should be located right before the nth node we're going to remove from end of the list.
- remove _slow.next_ and return the head; `O(1)`

```ts
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null

  let fast = head
  let slow = head

  while (n--) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}
```

The overall time complexity becomes `O(N)` with one pass because `O(n + N - n)` is just one full iteration of a list of size N.
