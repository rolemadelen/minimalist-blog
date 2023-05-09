---
title: 'Circular Queue란?'
posttitle: 'Circular Queue란? (with TypeScript)'
date: '2023-03-16 06:00:00'
uid: 'ba'
---

## 원형 큐(Circular Queue)의 개념

원형 큐는 큐의 마지막 요소와 첫 번째 요소가 연결되어 원형의 구조를 이룬다. 원형의 구조를 가지면서 기존 선형 큐가 가지고 있던 '잘못된 포화상태 인식' 문제를 해결할 수 있다.

선형 큐는 데이터를 삽입할 위치를 가리키는 `rear` 인덱스가 배열의 끝에 다다르면, `front` 인덱스의 위치와 관계없이 포화 상태라고 인식한다. 하지만 원형 큐는 마지막에서 다시 처음으로 돌아가기 때문에 단순히 배열의 크기가 아닌, `front`와 `rear` 인덱스의 위치로 포화 상태 여부를 확인한다.

원형의 구조를 가진 배열에서 인덱스를 이동하기 위해서는 mod(나머지) 연산자를 사용한다. `(rear + 1) % n`을 하면, `rear`는 항상 `0`과 `n-1` 사이의 인덱스를 유지하게 되어 큐에 공간이 남아있는 동안 계속해서 원형으로 순회하게 된다.

## 원형 큐의 기본 연산 - 의사코드

### **생성자**

```text
constructor(size)
    queue[size];
    size  ← size;
    front ← -1;
    rear  ← -1;
end
```

### **isEmpty**

리스트가 비어있는지 확인하는 함수.

```text
isEmpty() → boolean
    return (front == -1 && rear == -1);
end
```

### **isFull**

큐의 포화상태 여부를 확인하는 함수이다. 만약 `rear` 인덱스가 `front` 보다 바로 전에 자리 잡고 있다면 포화상태로 인식한다.

```text
isFull() → boolean
    return (rear+1 % capacity) == front;
end
```

### **enqueue**

리스트 끝에 데이터를 추가하는 함수.

```text
enqueue(item) → void
    if(isFull()) then 
        Error("Queue is Full");
    else if(isEmpty()) then
        front    ← 0;
        rear     ← 0;
        cq[rear] ← item;
    else
        rear     ← (rear + 1) % capacity;
        cq[rear] ← item;
    end
end
```

### **dequeue**

리스트의 첫번째 항목을 제거하는 함수.

```text
dequeue(item) → item
    if(isEmpty()) then 
        Error("Queue is Empty");
    else if(rear = front) then
        item  ← cq[front];
        rear  ← -1;
        front ← -1;
        ret item;
    else
        item  ← cq[front];
        front ← (front + 1) % capacity;
        ret item;
    end
end
```

## 구현

```ts
export class CircularQueueArray<T> {
    capacity: number;
    front: number;
    rear: number;
    cq: Array<T | undefined>;
    
    constructor(size: number) {
        this.capacity = size;
        this.cq = new Array(size);
        this.front = -1;
        this.rear = -1;
        
        if(Object.seal) {
            this.cq.fill(undefined);
            Object.seal(this.cq);
        }
    }
    
    // O(1)
    isEmpty(): boolean {
        return this.front == -1 && this.rear == -1;
    }

    // O(1)
    isFull(): boolean {
        return (this.rear + 1) % this.capacity == this.front;
    }
    
    // O(1)
    enqueue(item: T): void {
        if(this.isFull()) {
            throw new Error("Queue is full");
        } else if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
            this.cq[this.rear] = item;
        } else {   
            this.rear = (this.rear + 1) % this.capacity;
            this.cq[this.rear] = item;
        }
    }
    
    // O(1)
    dequeue(): T | undefined {
        if(this.isEmpty()) {
            throw new Error("Queue is empty");
        } else if (this.front == this.rear) {
            const item = this.cq[this.front];
            this.cq[this.front] = undefined;
            this.front = -1;
            this.rear = -1;
            return item;
        } else {   
            const item = this.cq[this.front];
            this.cq[this.front] = undefined;
            this.front = (this.front + 1) % this.capacity;
            return item;
        }
    }
};
```

## 큐의 사용사례

- 메모리 관리
- 트래픽 시스템
- CPU 스케줄링

## Source

- <https://leejinseop.tistory.com/37>
- <https://www.programiz.com/dsa/circular-queue>
- <https://www.geeksforgeeks.org/introduction-and-array-implementation-of-circular-queue/>
- <https://www.simplilearn.com/tutorials/data-structure-tutorial/circular-queue-in-data-structure>
