---
title: 'What is a Stack?'
posttitle: 'What is a Stack? (with TypeScript)'
date: '2023-04-05 08:00:00'
uid: 'aa'
---

## What is a Stack?

A stack is a type of linear data structure where data insertion or deletion occurs at one end only.

Inserting an item into the stack is known as a `push` operation, while removing an item is referred to as a `pop` operation. When you pop an item from the stack, the last item inserted will be removed. This results in a _Last In, First Out_ (LIFO) structure[^1], meaning that the first item inserted into the stack will be the last item removed.

## Stack Operations

The stack supports several operations:

- `push`: Adds data to the stack.
- `pop`: Removes data from the stack.
- `isEmpty`: Checks if the stack is empty.
- `peek`: Retrieves the data at the top of the stack.

## Implementation

If the size of the data is known in advance, we can use an array to create a static stack. Alternatively, if the size is unknown or may change dynamically, a dynamic array or linked list can be used to create a stack that can grow or shrink as needed.

### Static Stack - Array

```ts
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

To implement a dynamic stack in JavaScript, we have the option to use an array[^a], which is implemented using a hash map. However, for this particular case, I will opt for a linked list[^b] to create the dynamic stack.

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

A static stack has a fixed size, meaning that once it becomes full, it cannot accommodate additional data. However, it offers the advantage of simplicity in implementation and consumes less memory since it does not require separate memory allocation.

In contrast, a dynamic stack is not limited in size. It can handle an increasing number of data as long as memory permits. However, implementing a dynamic stack is relatively complex and entails memory allocation, resulting in increased memory usage.

## Applications of Stacks

Stacks find utility in a wide range of applications, including:

- Recursive algorithms
- Storing web browser history
- Implementing undo functionality
- Verifying the validity of parentheses in mathematical expressions
- Evaluating postfix expressions

## Source

- <https://cwjuns.tistory.com/18>
- <https://velog.io/@jimmy48/%EC%8A%A4%ED%83%9D%EC%9D%B4%EB%9E%80>
- <https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html>
- <https://ko.wikipedia.org/wiki/%EC%8A%A4%ED%83%9D>

[^1]: It is also known as a First-In, Last-Out (FILO) structure.
[^a]: [Stack implementation in TypeScript - Array](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/stack-array/StackDynamicArray.ts)
[^b]: [Stack implementation in TypeScript - Linked List](https://github.com/bprsstnt/typescript-algorithms/blob/main/src/data-structures/linked-list/LinkedList.ts)