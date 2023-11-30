---
title:  "Devouring Study Week 3: Stack & Queue"
date:   "2021-03-14 07:00:00"
---

지금까지 배열과 연결리스트에 대해서 공부를 했습니다. **배열의 최고의 장점**으로는 **임의접근**(*random access*)이 가능하다는 것이었습니다. 
마치 책에서 원하는 페이지를 바로바로 펼쳐보는 것처럼 원하는 위치의 자료의 접근이 O(1)에 가능합니다. 

그 반면 연결 리스트의 경우는 순차적 접근입니다. 하지만 **연결 리스트의 이점**으로는 자료의 접근보다는 **자료의 삽입과 제거**에 있었습니다.

이번 주에는 이 순차적 접근(*제한된 접근*) 형식의 구조를 사용하는 **스택(Stack)**과 **큐(Queue)**에 대해 알아보도록 합시다.

[GitHub: 씹어먹는 스터디](https://github.com/devouring-algorithm-ds/algorithm-study-s1)

# 스택(Stack) 이란
한 쪽 끝에서만 자료의 추가와 제거가 가능한 LIFO (Last-In First-Out) 형식으로 저장하는 자료구조.
![stack figure](/images/devouring/week3/stack1.png)

## `push(data)`

새로운 data를 스택 가장 위에 추가하는 함수.

```rb
def push(data) 
    temp = new Node(data)
    temp.next = top
    top = temp
end
```

## `pop()`
스택에서 가장 위에 있는 항목을 하나 삭제하는 함수.
```rb
def pop
    temp = top.next
    delete top
    top = temp
end
```

## `peek()`
스택에서 가장 위에 있는 항목을 반환하는 함수.
```rb
def peek
    return top.data
end
```

## `isEmpty()`
스택이 비어있는지 확인하는 함수. 비어있으면 `true` 그렇지 않으면 `false`를 반환한다.
```rb
def isEmpty
    return top == null
     return length == 0
end
```

## 스택의 사용 사례
- [퇴각검색](https://it00.tistory.com/26) (백트래킹; backtracking)
- 역순 문자열 만들기
- 수식의 괄호 검사
- [후위 표기법 계산기](https://gusdnd852.tistory.com/239) (Postfix Calculator)

# 큐(Queue) 란
먼저 집어넣은 자료가 먼저 나오는 FIFO (First-In First-Out) 형식의 자료구조.

![queue figure](/images/devouring/week3/queue1.png)

## `enqueue(data)`
data를 큐 맨뒤에 추가한다.
```rb
def enqueue(data) 
     리스트가 비어있다면
    if (queue.isEmpty)
        front = new Node(data)
        back = front
    else  리스트가 존재한다면
        back.next = new Node(data)
        back = back.next
    end
end
```

## `dequeue()`
큐의 첫 번째 항목을 삭제한다.
```rb
def pop
    temp = front.next
    delete front
    front = temp
end
```

## `getFront()`
큐에서 가장 앞에 있는 항목을 반환한다.
```rb
def getFront
    return front.data
end
```

## `getBack()`
큐에서 가장 뒤에 있는 항목을 반환한다.
```rb
def getBack
    return back.data
end
```

## `isEmpty()`
큐가 비어있는지 확인하는 함수. 비어있으면 `true` 그렇지 않으면 `false`를 반환한다.
```rb
def isEmpty
    return front == null
     return length == 0
end
```

## 큐의 사용 사례 
- 너비 우선 탐색 (BFS, Breadth First Search)
- 우선순위가 같은 작업 예약 (인쇄 대기열)
- 선입선출이 필요한 대기열 (티켓 카운터)
- 프린터의 출력 처리
- 프로세스 관리

# 생각해볼 문제
1. 연결리스트로 스택과 큐를 구현해보세요.
2. 스택과 큐를 배열로 구현했을 때 좋은점과 나쁜점은 무엇일까요?
3. 스택으로 후위표기법(postfix) 계산기를 구현해보세요.

# 문제 풀어보기
+ 백준: 
    - [괄호 (Silver IV)](https://www.acmicpc.net/problem/9012)
    - [스택 수열 (Silver III)](https://www.acmicpc.net/problem/1874)
    - [카드2 (Silver IV)](https://www.acmicpc.net/problem/2164)
    - [요세푸스 문제 (Silver IV)](https://www.acmicpc.net/problem/11866)
 
# Reference
- [https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html](https://gmlwjd9405.github.io/2018/08/02/data-structure-queue.html)
- [https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html](https://www.andrew.cmu.edu/course/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)