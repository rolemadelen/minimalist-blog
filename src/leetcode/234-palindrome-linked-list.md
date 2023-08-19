---
title: "234. Palindrome Linked List"
posttitle: "234. Palindrome Linked List"
date: "2023-08-19 05:30:00"
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/palindrome-linked-list/

### Problem

Given the `head` of a singly linked list, return `true` _if it is a palindrome or `false` otherwise_.

**Follow up:** Could you do it in `O(n)` time and `O(1)` space?

---

### Solution 1 : Using an array

While iterating through the list, I stored the value of each node in a separate array. This array was then used to verify whether the resulting string is palindrome.

The time complexity remains `O(N), where N is the number of nodes`. Additionally, due to the use of extra space to store nodes' values, the space complexity is also `O(N)`.

```ts
function isPalindrome(head: ListNode | null): boolean {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let p = 0;
  let q = arr.length - 1;

  while (p < q) {
    if (arr[p] != arr[q]) return false;
    ++p;
    --q;
  }

  return true;
}
```

---

### Solution 2 : Using built-in reverse

If our list is palindrome, the concatenated numbers should be identical when reversed. To determine this, I used the built-in `Array.prototype.reverse` method to check for equivalence. If the reversed version matches the original, it confirms that the list is indeed a palindrome.

Both the time and space complexity is `O(N)`.

```ts
function isPalindrome(head: ListNode | null): boolean {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return arr.join("") === arr.reverse().join("");
}
```

---

### Solution 3: Half reversed

The time complexity of the following solution is `O(N), N = number of nodes`, just like in other solutions. However, the space complexity is `O(1)`.

To begin, we find the middle of the list by using two pointers: `slow` and `fast`. Since the `fast` pointer moves twice as fast as the `slow` pointer, when the `fast` reaches the end of the list, the `slow` pointer will naturally be positioned at the middle. With this midpoint identified, we can proceed to reverse half of the list, resulting two lists: the first-half (read forward) and the second half reversed (read backward).

Subsequently, we iterate through the list using two pointers and compare the values. If the values don't match, the list is not a palindrome. Conversely, if they match throughout the iteration, the list is a palindrome.

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

function getMidNode(head: NodeOrNull): NodeOrNull {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function isPalindrome(head: ListNode | null): boolean {
  const midNode = getMidNode(head);
  let curr = head;
  let reverse = reverseList(midNode);

  while (reverse) {
    if (curr.val !== reverse.val) return false;
    reverse = reverse.next;
    curr = curr.next;
  }

  return true;
}
```
