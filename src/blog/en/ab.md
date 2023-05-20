---
title: 'What is a Queue?'
posttitle: 'What is a Queue? (with TypeScript)'
date: '2023-03-15 15:00:00'
uid: 'ab'
---

## Queue

A queue is a linear data structure where insertion and removal operations of data are performed at both ends of the list. An item is added at one end (`rear`) and removed at the opposite end (`front`).

A queue has a structure of _First In, First Out_ (FIFO), where the data first inserted is the first to be removed from the list. This is similar to how the first customer to arrive at a checkout counter is the first to be served and leave.

![queue regi](/images/adrien-delforge-queue.webp)
_Photo by [Adrien Delforge](https://unsplash.com/@adriendlf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/CrHG_ZYn1Dw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## Operations of Queue

- **enqueue** - Add data to the end of the list.
- **dequeue** - Remove the first item in the list.
- **isEmpty** - Check if the list is empty.
- **front** - Return the data of the first item in the list.

## Implementation

We'll implement the queue using an array and a linked list.

### Array

```ts
class QueueArray<T> {
    size: number;
    front: number;
    rear: number;
    queue: (T | undefined)[];

    constructor(size: number) {
        this.size = size;
        this.front = 0;
        this.rear = 0;
        this.queue = new Array<T>(size);

        if(Object.seal) {
            this.queue.fill(undefined);
            Object.seal(this);
        }
    }

    // O(1)
    isEmpty(): boolean {
        return this.front === this.rear;
    }

    // O(1)
    enqueue(val: T): void {
        if (this.rear === this.size) {
            throw new Error('Queue is full');
        }   

        this.queue[this.rear] = val;
        this.rear += 1;
    }

    // O(1)
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        let val = this.queue[this.front];
        this.front += 1;
        return val;
    }

    // O(1)
    getFront(): T | undefined {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }

        return this.queue[this.front];
    }
}
```

## Limitations of Linear Queues

If you use a static array to implement a linear queue, you may encounter a problem.

Let say we have a queue with a capacity of 10 elements.

We called `enqueue` operation 10 times and `dequeue` operation 9 times.

```text
         0  1  2  3  4  5  6  7  8  9
queue → [ ][ ][ ][ ][ ][ ][ ][ ][F][R] : full
```

The `rear` index reached the end of the list and `front` is one before the `rear`. Although 8 out of 10 space is empty, the program will consider the queue to be full because `rear` is at the end of the list. This is a problem with a linear queue.


To solve this problem, you can use a 'Circular Queue'[^a], which is also implemented using an array like a linear queue. However, a circular queue is designed to be conceptualized as having the beginning and end of the array connected.

### Linked List

We can implement a linear queue using a linked list as well. With this approach, we don't need to be concerned about the list becoming full since the container can expand and contract dynamically. However, one drawback is that it uses relatively more memory compared to the array implementation due to the presence of nodes.

```ts
import { ListNode, LinkedListNode } from '../linked-list/LinkedList';

class QueueList<T> {
    front: ListNode<T>;
    rear: ListNode<T>;
    
    constructor(value: T | null = null) {
        if (value) {
            this.front = new LinkedListNode(value);
            this.front.next = this.rear;
            this.rear = this.front;
        } else {
            this.front = null;
            this.rear = null;
        }
    }
    
    // O(1)
    isEmpty(): boolean {
        return this.front == null;
    }
    
    // O(1)
    enqueue(value: T): void {
        let newNode = new LinkedListNode(value);
        
        if (null == this.front) {
            this.front = newNode;
            this.rear = newNode;
            this.front.next = this.rear;
        } else {
            this.rear!.next = newNode;
            this.rear = newNode;
        }
    }
    
    // O(1)
    dequeue(): ListNode<T> {
        let frontNode = this.front;
        
        if (this.front) {
            this.front = this.front.next;
        }
        
        return frontNode;
    }
    
    // O(1)
    getFront(): ListNode<T> {
        return this.front;
    }
}
```

## Applications of Queue

- Breadth First Search (BFS)
- Manage processes or tasks with priority
- Network Traffic Control

## Source

- <https://galid1.tistory.com/483>
- <https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html>

[^a]: Circular Buffer: https://en.wikipedia.org/wiki/Circular_buffer