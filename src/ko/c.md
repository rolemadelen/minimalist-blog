---
title: 'Linked List란?'
posttitle: '연결 리스트(Linked List)란?'
date: '2023-03-18 09:20:00'
uid: 'c'
---

## 연결 리스트(Linked List) 개념

'노드(Node)'라는 개체가 있다. 이 개체는 데이터(`item`)와 포인터 두 개의 필드를 가진다. 포인터는 간단히 메모리 주소를 담는 변수라고 생각하면 된다.

```text
Node(data)
    item  ← data;
    *next ← Ø;
end
```

연결 리스트의 각 요소를 '노드'라고 한다. 배열의 경우 모든 요소들이 메모리 한 공간에 연속되게 나열되어 있지만, 연결 리스트의 노드들은 메모리 공간 여러 군데에 분산되어 있다. 모든 노드들이 떨어져 있기 때문에 서로 어디에 있는지 위치를 알 필요가 있다. 이 때 사용되는 것이 포인터이다.

`Node`의 `next` 포인터가 해당 노드와 연결되어 있는 다음 노드의 정보를 담고있다. 만약 다음 노드가 없다면 `NULL`값을 가진다.

```cpp
class ListNode<T> {
  item: T;
  next: ListNode<T> | null;

  constructor(item: T) {
    this.item = item;
    this.next = null;
  }
}

let nodeA = new ListNode<string>('A'); // A　→ NULL
let nodeB = new ListNode<string>('B');  // B → NULL

nodeA.next = nodeB; // A → B → NULL

console.log(nodeA.item); // A
console.log(nodeA.next.item); // B
console.log(nodeA.next.next); // NULL
console.log(nodeA.next.next.item); // ERROR: NULL.next가 되기 때문에 오류이다
```

## 연결 리스트 종류

### 단일 연결 리스트 (Singly Linked List)

단일 연결 리스트는 단방향 리스트라고 불리기도 한다. 이름 그대로 오로지 한 방향으로만 이동이 가능하도록 설계된 연결 리스트이다.

각 노드는 데이터와 다음 노드를 가리키는 `next` 포인터를 필드로 가진다.

```text
Node(data)
    item  ← data;
    *next ← Ø;
end
```

100개의 노드가 연결되어 있는 리스트에서 실수로 첫 번째 노드의 `next`값을 `NULL`로 덮어씌어진다면, 2~100번째 노드에 접근 할 수 없게 되므로 포인터 관리를 잘해야 한다[^a].

### 이중 연결 리스트 (Doubly Linked List)

이중 연결 리스트는 다음 노드를 가리키는 `next` 포인터에 더해 이전 노드를 가리키는 `prev`('previous') 포인터가 추가된 리스트이다.

```text
Node(data)
    item  ← data;
    *next ← Ø;
    *prev ← Ø;
end
```

단일 연결 리스트와는 달리, 중간의 어떤 노드의 `next` 값이 잘못되어도 `prev` 포인터를 사용하여 원하는 노드에 접근할 수 있다. 하지만 개체에 `prev` 필드가 추가되었기 때문에 메모리 사용량이 늘어난다는 단점이 있다.

### XOR 연결 리스트 (XOR Linked List)

XOR 연결 리스트는 이중 연결 리스트의 단점을 보완한 연결 리스트이다. `next`와 `prev` 대신에 XOR 연산을 사용한 단 하나의 포인터를 사용하여 이중 연결 리스트를 구현한다. 하지만 XOR 연산자를 지원하지 않는 언어에서는 구현할 수 없다.

XOR 리스트의 노드는 이전 노드와 다음 노드를 XOR 연산한 값을 저장한다 (`prev ^ next`) .

```text
Node(data)
    item  ← data;
    *xor ← Ø;
end

XOR(prev, curr) → Node *
    return (prev ^ curr);
end

Node *prev ← Ø;
Node *curr = Ø;
Node *next ← XOR(prev, curr->xor);
```

### 원형 연결 리스트 (Circular Linked List)

일반적인 연결 리스트에서는 마지막 노드의 `next` 포인터가 `NULL`을 가리키게 되어 리스트의 끝을 나타낸다. 하지만 원형 연결 리스트에서는 마지막 노드가 첫 번째 노드를 가리키는 구조를 이루게 되어 원형 구조를 형성한다. 이중 원형 연결 리스트의 경우, 첫 번째 노드의 `prev` 포인터가 마지막 노드를 가리킨다.

![Circular Linked List](/images/circular-linked-ilst.gif)

## 배열과 연결리스트

|  | 접근 | [0] 노드 삽입 |  [n/2] 노드 삽입 | [n-1] 노드 삽입 | 삭제 | [n-1] 삭제 |
|:---|:--:|:--:|:--:|:--:|:--:|:--:|
| 배열 | O(1) | O(n) | O(n) | O(1) | O(n) | O(1) |
| 연결 리스트 | O(n) | O(1) | 접근 + O(1) | O(1) | O(1) | O(1) |

### 배열의 특징

- 메모리 공간에 데이터들이 연속적으로 저장된다.
- 데이터의 빠르게 접근이 가능하다.
- 배열의 처음 또는 중간에 새로운 데이터를 삽입할 경우, 요소들의 위치를 한 칸씩 이동시켜야 하기 때문에 오버헤드가 발생한다.
- 데이터의 삭제할 때도 요소들의 위치를 이동시켜야 하므로 오버헤드가 발생한다.

### 연결리스트의 특징

- 각 노드들은 떨어진 공간에 존재하며 포인터로 연결되어 있다.
- 리스트에 새로운 데이터를 삽입할 경우, 서로 떨어져있는 노드들을 포인터로 연결하면 되기 때문에 배열처럼 오버헤드가 발생하지 않는다.
- 노드의 삭제도 마찬가지로 노드의 연결을 끊는 것만으로 처리할 수 있으므로 오버헤드가 발생하지 않는다.
- 다만, 원하는 노드에 접근하기 위해서는 항상 첫 노드부터 순차적으로 접근해야 하기 때문에 상대적으로 느리다.
- 배열과 달리 각 요소(노드)마다 포인터가 존재하기 때문에 상대적으로 메모리 사용량이 크다.

## Source

- <https://en.wikipedia.org/wiki/Linked_list>
- <https://www.youtube.com/watch?v=HB7TcYklBHY>
- <https://jud00.tistory.com/entry/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%97%B0%EA%B2%B0-%EB%A6%AC%EC%8A%A4%ED%8A%B8Linked-List>

[^a]: 2~100번째 노드는 메모리에 계속 남게 되어 메모리 누수의 원인이 될 수 있다.
