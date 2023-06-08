---
title: '[TypeScript] Queue란?'
posttitle: 'Queue란?'
date: '2023-03-15 15:00:00'
uid: 'ab1'
---

## 큐(Queue)의 개념

데이터의 삽입과 제거 연산이 리스트 양 끝에서 행해지는 단일 형식의 자료구조이다. 한쪽 끝(rear)에서는 데이터의 추가가, 반대편(front)에서는 데이터의 삭제가 이루어진다.

큐는 먼저 삽입된 데이터가 먼저 리스트를 빠져나오는 선입선출(FIFO; First In, First Out)의 구조로 되어 있다. 어딘가의 계산대에 먼저 온 손님이 먼저 계산하고 나가는 것과 같다.

![queue regi](/images/adrien-delforge-queue.webp)
_Photo by [Adrien Delforge](https://unsplash.com/@adriendlf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/photos/CrHG_ZYn1Dw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## 큐의 연산

- **enqueue** - 리스트 끝에 데이터를 추가하는 함수
- **dequeue** - 리스트의 첫번째 항목을 제거하는 함수
- **isEmpty** - 리스트가 비어있는지 확인하는 함수
- **front** - 리스트 첫번째 항목의 데이터를 반환하는 함수

## 큐의 구현

배열과 연결리스트를 이용해서 큐를 구현할 수 있다.

### 구현 - Array

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

### 선형 큐의 문제점

배열을 사용해서 선형 큐를 구현할 경우 한 가지 문제가 발생한다.

`enqueue` / `dequeue`를 하는 과정에서 각각 `rear` / `front` 인덱스가 한 칸씩 앞으로 이동한다. n번의 `enqueue` 연산 이후 `rear` 인덱스가 리스트 끝에 위치하게 될 때, 만약 `dequeue`를 한 번이라도 호출했다면 `front` 인덱스의 위치가 `0`이 아니게 된다. 즉, 리스트 앞에 공간이 남아있음에도 프로그램은 큐를 포화 상태로 인식한다.

위 상황을 해결하기 위한 한 가지 방법으로는 '원형 큐 (Circular Queue)'가 있다[^a]. 원형 큐는 선형 큐와 같이 배열로 구현하지만, 배열의 처음과 끝이 연결되어 있는 것 처럼 생각하며 구현된다.

### 구현 - Linked List

> 연결리스트는 이미 따로 구현 해두었고 [깃허브](https://github.com/rolemadelen/typescript-algorithms/tree/main/src/data-structures/linked-list)에서 확인할 수 있다. 여기서는 큐의 구현만 살펴본다.

리스트 크기가 가변적인 연결리스트의 경우 배열과 같이 포화 상태의 문제는 발생하지 않는다. 다만 각 노드의 메모리 할당 때문에 메모리 사용량이 상대적으로 많아진다.

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

## 큐의 사용사례

- 너비 우선 탐색 알고리즘 - Breadth First Search (BFS) [^c]
- 우선순위가 있는 태스크 관리 [^b]
- 프로세스 관리
- 네트워크 트래픽 제어

## Source

- <https://galid1.tistory.com/483>
- <https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html>

[^a]: Circular Buffer: https://en.wikipedia.org/wiki/Circular_buffer
[^b]: 문제 - 프린터 큐: https://www.acmicpc.net/problem/1966
[^c]: 문제 - 너비 우선 탐색 1: https://www.acmicpc.net/problem/24444
