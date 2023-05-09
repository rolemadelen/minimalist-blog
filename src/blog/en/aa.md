---
title: 'What is a Stack?'
posttitle: 'What is a Stack? (with TypeScript)'
date: '2023-04-05 08:00:00'
uid: 'aa'
---

## What is a Stack?

A stack is a linear data structure where data insertion or deletion occurs at one end only.

Inserting an item into the stack is called a `push` operation, and removing an item is called a `pop` operation. When you pop an item from the stack, the last item inserted will be removed. This means that the first item inserted into the stack will be the last item removed, creating a _Last In, First Out_ (LIFO) structure.[^1]

## Stack Operations

- **push** - A function that puts data into the stack.
- **pop** - A function that takes data out of the stack.
- **isEmpty** - A function that checks if the stack is empty.
- **peek** - A function that checks the data at the top of the stack.

## Implementation

If we know the exact size of the data, we can use an array to create a static stack. If the size is unknown, we can use a dynamic array or a linked list to create a stack whose capacity can grow and shrink as needed.

### Static Stack - Array

```typescript
export class StackArray<T> {
  size: number;
  top: number;
  stack: (T | undefined)[];

  constructor(size: number) {
    this.size = size;
    this.top = 0;
    this.stack = new Array<T | undefined>(size);

    if(Object.seal) {
      this.stack.fill(undefined);
      Object.seal(this.stack);
    }
  }

  // O(1)
  push(val: T): void {
    if(this.top >= this.size) {
      throw new Error('Stack overflow');
    }

    this.stack[this.top] = val;
    this.top += 1;
  }

  // O(1)
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }

    this.top -= 1;
    let val = this.stack[this.top];
    return val;
  }

  // O(1)
  isEmpty(): boolean {
    return this.top === 0;
  }

  // O(1)
  peek(): T | undefined {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    return this.stack[this.top - 1];
  }
}
```

### Dynamic Stack - Linked List

To implement a dynamic stack in JavaScript, we can actually just use an array[^a], because it is implemented using a hash map. However, in this case, I'll use a linked list[^b] instead to create a dynamic stack.

```ts
import { ListNode, LinkedListNode } from '../linked-list/LinkedList';

export class StackList<T> {
  top: ListNode<T>;

  constructor(value: T | null = null) {
    if (value) {
      this.top = new LinkedListNode(value);
    } else {
      this.top = null;
    }
  }

  // O(1)
  isEmpty(): boolean {
    return this.top === null;
  }

  // O(1)
  push(value: T): void {
    let newNode = new LinkedListNode(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  // O(1)
  pop(): ListNode<T> {
    let poppedNode = this.top;

    if (this.top) {
      this.top = this.top.next;
    }

    return poppedNode;
  }

  // O(1)
  peek(): ListNode<T> {
    if (this.top) {
      return this.top;
    } else {
      return null;
    }
  }
}
```

## Static vs. Dynamic Stack

In the case of a static stack, the size of the container is fixed. So if the stack becomes full, it can no longer add any more data. However, it has the advantage of being simple to implement and requiring less memory usage since it does not require separate memory allocation.

On the other hand, a dynamic stack is not fixed in size. So even if the number of data suddenly increases, it can be placed in the stack as long as the memory allows it. However, a dynamic stack is relatively complex to implement and also requires memory allocation, so the memory usage increases.

## Stack Applications

Stacks can be used in various applications, including:

- Recursive algorithms
- Storing web browser history
- Implementing undo functionality
- Checking the validity of parentheses in mathematical expressions
- Evaluating postfix expressions

## Source

- <https://cwjuns.tistory.com/18>
- <https://velog.io/@jimmy48/%EC%8A%A4%ED%83%9D%EC%9D%B4%EB%9E%80>
- <https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html>
- <https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D>

[^1]: It is also known as a First-In, Last-Out (FILO) structure
[^a]: [Stack implementation in TypeScript - Array](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/stack-array/StackDynamicArray.ts)
[^b]: [Stack implementation in TypeScript - Linked List](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/linked-list/LinkedList.ts)