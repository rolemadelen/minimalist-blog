---
title: 'What is a Queue?'
posttitle: 'What is a Queue? (with TypeScript)'
date: '2023-03-15 15:00:00'
uid: 'ab'
---

## Queue

A queue is a linear data structure where data is inserted at one end (`rear`) and removed from the opposite end (`front`). 

This structure follows the principle of _First In, First Out_ (FIFO), where the item that is first inserted is the first to be removed from the queue. This can be likened to a checkout counter scenario, where the first customer to arrive is the first to be served and leave.

![queue regi](/images/adrien-delforge-queue.webp)
_Photo by [Adrien Delforge](https://unsplash.com/@adriendlf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/CrHG_ZYn1Dw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## Queue Operations

- **enqueue**: Adds data to the end of the queue.
- **dequeue**: Removes the first item from the queue.
- **isEmpty**: Checks if the queue is empty.
- **front**: Returns the data of the first item in the queue.

## Implementation

For our queue implementation, we can use either an array or a linked list.

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

When implementing a linear queue using a static array, you may encounter a limitation. Let's consider a queue with a capacity of 10 elements.

Suppose we perform 10 `enqueue` operations followed by 9 `dequeue` operations:

```text
         0  1  2  3  4  5  6  7  8  9
queue → [ ][ ][ ][ ][ ][ ][ ][ ][F][R] : full
```

In this scenario, the `rear` index has reached the end of the list, and the `front` is one position before the `rear`. Even though 8 out of 10 spaces are empty, the program considers the queue to be full because rear is at the end of the list. This limitation is inherent to linear queues.

To overcome this limitation, a solution is to use a 'Circular Queue'[^a]. A circular queue is also implemented using an array, but it is designed in a way that the beginning and end of the array are connected conceptually.

### Linked List

Another way to implement a linear queue is by using a linked list. This approach eliminates the concern of the list becoming full, as the container can dynamically expand and contract as needed. However, one drawback of this implementation is that it requires relatively more memory compared to the array implementation, due to the presence of nodes in the linked list structure.

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

Queues have various applications in computer science and real-world scenarios, including:

- Breadth First Search (BFS) algorithm
- Managing processes or tasks with priority
- Network traffic control and packet scheduling

## Source

- <https://galid1.tistory.com/483>
- <https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html>

[^a]: Circular Buffer: <https://en.wikipedia.org/wiki/Circular_buffer>
