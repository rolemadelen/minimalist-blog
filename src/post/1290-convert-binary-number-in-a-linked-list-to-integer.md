---
title: '(1290) Convert Binary Number in a Linked List to Integer'
date: '2023-08-21 17:30:00'
lang: 'en'
type: 'note'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

### Problem

Given `head` which is a reference node to a singly-linked list. The value of each node in the linked list is either `0` or `1`. The linked list holds the binary representation of a number.

Return the _decimal value_ of the number in the linked list.

The **most significant bit** is at the head of the linked list.

---

### Problem

I utilized the doubling method to convert a binary number from left to right.

The most significant bit (MSB) serves as the initial value. From there, begin with the second bit from the MSB. Multiply the existing value by two and then add the bit of the current node.

```text
1 -> 0 -> 1

(1) start: 1
(0) next:  1 * 2 + 0 = 2
(1) next:  2 * 2 + 1 = 5
```

```ts
function getDecimalValue(head: ListNode | null): number {
  let d = head.val

  while (head) {
    head = head.next
    if (!head) break
    d = d * 2 + head.val
  }

  return d
}
```
