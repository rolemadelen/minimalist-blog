---
title: "23. Merge k Sorted Lists"
posttitle: "23. Merge k Sorted Lists"
date: '2023-08-16 09:30:00'
---

- Difficulty:  🔴 Hard
- https://leetcode.com/problems/merge-k-sorted-lists/

### Problem

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

_Merge all the linked-lists into one sorted linked-list and return it._

### O(NK) Solution

I'm essentially navigating through the process of merging two adjacent lists and then reintegrating the merged list back into the array.

The algorithm for merging two lists was also employed in [this problem](/leetcode/21-merge-two-sorted-lists). The sole distinction lies in my approach: I opted not to generate new nodes, as the extensive node creation led to a memory concern on LeetCode.

```ts
type NodeOrNull = ListNode | null;

function mergeKLists(lists: Array<NodeOrNull>): NodeOrNull {
    if(!lists) return null;
    if(lists.length === 0) return null;

    for(let i=0; i<lists.length-1; ++i) {
        lists[i+1] = merge(lists[i], lists[i+1])
    }

    return lists[lists.length-1];
};

function merge(list1: NodeOrNull, list2: NodeOrNull): NodeOrNull {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }

        curr = curr.next;
    }

    if(list1) curr.next = list1;
    if(list2) curr.next = list2;

    return dummyHead.next;
}
```

Let `N` represent the number of linked lists in the array, and `K` denote the minimum number of nodes among these `N` linked lists. The minimum is derived from the fact that iterations in the merging process halt as soon as either of the lists reaches _NULL_. Consequently, the time complexity of this algorithm becomes `O(NK)`.

### O(N logN) Solution

There's a simpler approach: we can flatten the lists into a single array, sort the array, and then build a linked list.

```ts
type NodeOrNull = ListNode | null;

function mergeKLists(lists: Array<NodeOrNull>): NodeOrNull {
    let arr: number[] = [];
    for(let head of lists) {
        let node = head;
        while(node) {
            arr.push(node.val);
            node = node.next;
        }
    }

    if (!arr.length) return null;
    arr = arr.sort((a, b) => {
        return (a > b) ? 1 : (a < b) ? -1 : 0;
    })

    let head = new ListNode(arr[0], null);
    let node = head;
    for(let i=1; i<arr.length; ++i) {
        node.next = new ListNode(arr[i], null);
        node = node.next;
    }
    return head;
};
```

Considering the following variables:
- `K` - the number of linked lists in the array
- `M` - the number of nodes in each list
- `N` - the number of values in the array after flattening the lists

The time complexity for this algorithm is calculated as `O(KM + NlogN + N)`. However, since _N_ and _KM_ are generally smaller (I'm quite confident) than _N logN_, we can disregard them. Therefore, the overall time complexity simplifies to `O(N logN)`.