---
title: "2. Add Two Numbers"
posttitle: "2. Add Two Numbers"
date: "2023-08-12 11:00:00"
---

- Difficulty: 😾 Medium
- https://leetcode.com/problems/add-two-numbers/

### Problem
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.


### Naive Solution
- Break the list and form a number by iterating the list from beginning to end; `O(2N), N = length of list`
- Now you have two numbers from 2 lists. Reverse this numbers because they're given in reverse order; `O(A+B), A, B = number of digits from list A and list B`
- Add two numbers; `O(1)`
- Reverse and split them into digits; `O(M), M = number of digits of A+B`
- iterate through split digits to form a linked list; `O(M)`
- return

```ts 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1 || !l2) return null;

    let z1 = l1.val == 0 ? 1 : 0;
    let z2 = l2.val == 0 ? 1 : 0;

    let n1: bigint = BigInt(l1.val);
    let n2: bigint = BigInt(l2.val);
    let leading = l1.val == 0;
    l1 = l1.next;

    while(l1) {
        if(leading && l1.val == 0) {
            z1 += 1;
        } else {
            leading = false;
        }
        n1 *= BigInt(10);
        n1 += BigInt(l1.val);
        l1 = l1.next;
    }

    leading = l2.val == 0;
    l2 = l2.next;

    while(l2) {
        if(leading && l2.val == 0) {
            z2 += 1;
        } else {
            leading = false;
        }
        n2 *= BigInt(10);
        n2 += BigInt(l2.val);
        l2 = l2.next;
    }

    n1 = BigInt(n1.toString().split('').reverse().join(''));
    n2 = BigInt(n2.toString().split('').reverse().join(''));

    while(z1) { n1 *= BigInt(10); z1 -= 1; }
    while(z2) { n2 *= BigInt(10); z2 -= 1; }

    let n3 = (n1 + n2).toString().split('').reverse();
    let curr = new ListNode(+n3.shift());
    let temp = curr;

    while(n3.length > 0) {
        const newNode = new ListNode(+n3.shift());
        temp.next = newNode;
        temp = temp.next;
    }

    return curr;
};
```

The overall time complexity is going to be `O(N + A + B + M)`.

---

### A Little Better Solution
- Match the length of two lists by appending zeroes; `O(max(L1, L2)), L = length of a list`
- Iterate through the list and add each digits; `O(L), L = max(L1, L2)`

```ts 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let carry = 0;
    let head1 = l1;
    let head2 = l2;

    while(l1 || l2) {
        if(l1.next && !l2.next) {
            l2.next = new ListNode(0);
        } else if(!l1.next && l2.next) {
            l1.next = new ListNode(0);
        }
        l1 = l1.next;
        l2 = l2.next;
    }

    l1 = head1
    l2 = head2

    while(l1 && l2) {
        let sum = l1.val + l2.val + carry;
        carry = sum >= 10 ? 1 : 0;
        l1.val = sum % 10;

        if(!l1.next && !l2.next && carry) {
            l1.next = new ListNode(1);
            carry = 0;
            break;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
 
    return head1;
};
```

The overall time complexity is going to be `O(L)`.

---

### Even Better Solution
- Iterate through the list and add two digits; `O(max(L1, L2)), L = length of a list`
  - if a node is null, let the value be 0 _(I did this step separately in previous solution by appending a new node at the end)_

```ts 
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;
    let carry = 0;

    while(l1 || l2 || carry) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyHead.next;
};
```

The overall time complexity is `O(L), L = max(L1, L2)`