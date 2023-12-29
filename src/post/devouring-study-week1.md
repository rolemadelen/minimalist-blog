---
title:  "Devouring Study Week 1: Array & LinkedList"
date:  "2021-02-28 07:00:00"
lang: 'ko'
---

배열과 연결리스트의 장단점과 연결리스트의 종류를 공부하고, 단일 연결리스트의 의사코드를 살펴봅니다.

[GitHub: 씹어먹는 스터디](https://github.com/devouring-algorithm-ds/algorithm-study-s1)

# 배열 (Array)
- 데이터가 메모리 공간상에서 연속적으로 이루어져 있는 자료구조.
- 논리적인 순서와 물리적인 순서가 일치한다.

![array](/images/devouring/week1/array1.png)

# 연결 리스트 (Linked List)
- 여러개의 노드(Node)가 연결된 형태의 자료구조.
- 배열과 다르게 각각의 데이터(노드)들은 연속적으로 이루어져 있지 않고 흩어져 있다.
- 흩어져 있는 각각의 노드들은 다음 노드들의 주소를 참조하여 다음 노드의 위치를 파악하게 된다.	
![singly linked list](/images/devouring/week1/slist1.png)

## 노드란?
- 배열에서의 각각의 공간이라고 생각하면 된다.
- 노드에는 기본적으로 데이터와 다음 노드의 위치 정보가 저장된다.

![node](/images/devouring/week1/node1.png)

# 배열과 연결리스트의 차이
배열의 장점: 
- 데이터의 접근(access)이 빠르다: O(1)

배열의 단점: 
- 배열의 크기가 고정적이다. 
- 데이터의 삽입과 삭제의 연산이 느리다: O(n), n = 배열 크기 
- 메모리 공간 활용이 비효율적.

연결 리스트의 장점: 
- 연결 리스트의 크기는 가변적이다. 
- 데이터의 삽압과 삭제의 연산이 빠르다: O(1) 
- 메모리 공간을 효율적으로 사용한다.

연결 리스트의 단점: 
- 항상 첫 노드부터 순차적으로 접근하기 때문에 데이터의 접근 속도가 느리다.
- 배열의 각 원소는 데이터만 담고 있는 반면, 노드는 데이터와 다음 노드의 위치 정보까지 담고 있어서 메모리를 더 사용하게 된다.

|  | 배열 | 연결 리스트 |
|---|:---:|:---:|
| 접근 (access) | O(1) | O(n) |
| 삽입 (insert) | O(n) | O(1) |
| 삭제 (delete) | O(n) | O(1) |

# 언제 무엇을 사용하나?
- 삽입과 삭제가 번번히 이루어진다 => 연결 리스트
- 데이터의 접근만 필요하다 => 배열

# 연결 리스트의 종류
단일 연결 리스트 (Sigly Linked List)
![singly linked list](/images/devouring/week1/slist1.png)

이중 연결 리스트 (Doubly Linked List)
![doubly linked list](/images/devouring/week1/dlist1.png)

원형 연결 리스트 (Circular Linked List)
![circular linked list](/images/devouring/week1/cdlist1.png)

# 단일 연결 리스트 구현 
의사코드(pseudo-code)를 사용합니다.

- `insertFront()` : 리스트 처음에 노드를 추가
- `insertBack()` : 리스트 끝에 노드를 추가
- `removeFirst()` : 머리 노드를 삭제
- `removeLast()` : 꼬리 노드를 삭제

연결 리스트에서 사용할 노드의 구조는 대략 아래와 같습니다.
```rb
class Node
	def initialize(value)
		 노드 data = value
		 다음 노드의 주소 = NULL (아무것도 가리키지 않음)
	end
end
```
![node](/images/devouring/week1/node1.png)

## insertFront()
리스트 처음에 노드를 추가하는 함수.

```rb
def insertFront() 
	 1. 새로운 노드 생성
	 2. 새로운 노드가 현재 head(첫 번째 노드)를 가리키도록 한다.
	 3. 새로운 노드가 첫 번째 노드가 되었으므로 head를 갱신한다.
end
```

## insertBack()
리스트 끝에 노드를 추가하는 함수.

```rb
def insertBack() 
	 1. 새로운 노드 생성 (newNode)
	 2. head를 담을 임시 변수 생성(temp)
	 3. temp를 사용해 마지막 노드까지 이동
	 4. 마지막 노드의 다음 노드가 newNode를 가리키도록 한다.
end
```

## removeFirst()
리스트 맨 처음 노드를 삭제하는 함수.

```rb
def removeFirst() 
	 1. head의 다음 노드를 임시 변수(temp)에 저장
	 2. head를 삭제
	 3. temp를 head로 갱신
end
```

## removeLast()
리스트 마지막 노드를 삭제하는 함수.

```rb
def removeLast() 
	 1. head를 담을 임시 변수 생성 (temp)
	 2. temp를 사용해 마지막 노드 "이전" 까지 이동
	 3. 현재 temp.next는 마지막 노드를 가리킨다. 이 링크를 없앤다 (NULL 대입).
end
```

# 생각해볼 문제
- 리스트 중간에 새로운 노드를 삽입하는 함수 `insertAt(pos)` 구현하기.
- 리스트 중간에 노드를 삭제하는 함수 `removeAt(pos)` 구현하기.

# 문제 풀어보기
- 배열 (백준): [10818](https://www.acmicpc.net/problem/10818), [2562](https://www.acmicpc.net/problem/2562), [2577](https://www.acmicpc.net/problem/2577), [3052](https://www.acmicpc.net/problem/3052), [1546](https://www.acmicpc.net/problem/1546), [8958](https://www.acmicpc.net/problem/8958), [4344](https://www.acmicpc.net/problem/4344)
- 단일 연결리스트 (LeetCode): [1290](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/), [876](https://leetcode.com/problems/middle-of-the-linked-list/), [237](https://leetcode.com/problems/delete-node-in-a-linked-list/)