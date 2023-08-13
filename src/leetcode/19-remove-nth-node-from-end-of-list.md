---
title: "19. Remove Nth Node From End of List"
posttitle: "19. Remove Nth Node From End of List"
date: "2023-08-13 09:04:00"
---

- Difficulty: Medium
- Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

### Naive
- iterate through the list and count number of nodes -> `M`
- move to `M - 1`  -> `del`
- remove `del`

```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return null;
    let count = 0;
    let dummy = head;
    while(dummy) {
        count += 1;
        dummy = dummy.next;
    }

    count = count - n - 1;
    dummy = head;

    if(count < 0) {
        dummy = dummy.next;
        return dummy;
    }

    while(count) {
        dummy = dummy.next;
        count -= 1;
    }

    dummy.next = (dummy && dummy.next ? dummy.next.next : null);

    return head;
};
```

Time complexity: O(N), length of list + O(count), which is less than N -> **O(N)**

### One pass
```ts
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head) return null;

    let fast = head;
    let slow = head;

    while(n--) {
        fast = fast.next;
    }

    if(!fast) return head.next;

    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return head;
};
```

Time complexity: O(N), one pass