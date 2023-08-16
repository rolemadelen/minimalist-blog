---
title: '83. Remove Duplicates from Sorted List'
posttitle: '83. Remove Duplicates from Sorted List'
date: '2023-08-15 09:35:00'
---

- Difficulty: 🍰 Easy
- https://leetcode.com/problems/remove-duplicates-from-sorted-list/

### Problem

Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once_. Return _the linked list **sorted** as well_.

### Solution

Utilize two pointers to track the nodes you are comparing. In this case, I'm employing the `dummy` and `curr` variables. The `dummy` pointer is employed to retain unique values, while `curr` represents the current node or position.

While iterating through the list, compare the nodes using the designated pointers. If the values differ, add `curr` node to the unique listing and continue. If they match, simply proceed to the next node on the list.

The time complexity of this algorithm is `O(N), where N is the number of nodes in the list`.

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