---
title: '83. Remove Duplicates from Sorted List'
posttitle: '83. Remove Duplicates from Sorted List'
date: '2023-08-15 09:35:00'
---

- Difficulty:  🟢 Easy
- Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

### Problem

Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once_. Return _the linked list **sorted** as well_.

### Solution

Use two pointers to track which nodes you are comparing with. I'm using `dummy` and `curr` variables. `dummy` is used to keep unique values and `curr` is current node or position.

As you iterate through the list, compare two nodes using two pointers you have. If two values are different, keep the `curr` node and move on. If they are same, just proceed to the next node in the list.

The time complexity of this algorithm is `O(N), N = number of nodes in the list`.

```ts
type NodeOrNull = ListNode | null;

function deleteDuplicates(head: NodeOrNull): NodeOrNull  {
    if(!head) return null;
    let dummy = head;
    let curr = head.next;
    
    while(curr) {
        if(dummy.val != curr.val) {
            dummy.next = curr;
            dummy = dummy.next;
        }
        curr = curr.next;
    }
    
    dummy.next = null;
    return head;
}
```