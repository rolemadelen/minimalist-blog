---
title:  "Devouring Study Week 2: Doubly & Circular LinkedList"
date:   "2021-03-07 07:00:00"
---

이중 연결리스트와 원형 연결리스트의 차이점을 이해하고 연결리스트에서 사용되는 함수들의 의사코드를 살펴봅니다.

[GitHub: 씹어먹는 스터디](https://github.com/devouring-algorithm-ds/algorithm-study-s1)

# 이중 연결리스트 (Doubly Linked List)
![doubly linked list](/images/devouring/week1/dlist1.png)


이중(양방향) 연결리스트는 다음 노드만 참조하던 단일 연결리스트와 다르게 다음(`next`)과 이전(`prev`) 노드 둘다 가리키며 양쪽으로 이동이 가능합니다.

![node](/images/devouring/week2/node2.png)

머리 노드의 *prev*와 꼬리의 *next*는 아무것도 가리키지 않으므로 `null`의 값을 가지고 있습니다.

![doubly linked list 2](/images/devouring/week2/dlist2.png)

# 원형 리스트 (Circular Linked List)

원형 리스트에도 두 가지 종류가 있습니다. 

단일 연결리스트를 기반으로 한 **단일 원형 연결 리스트** (Circular Singly Linked List).
![circular singly linked list](/images/devouring/week1/cslist1.png)

그리고 **이중 원형 연결 리스트** (Circular Doubly Linked List) 입니다.
![circular doubly linked list](/images/devouring/week1/cdlist1.png)

그림에서 알수있듯이 마지막 노드가 다시 첫 번째 노드를 가리키는, 원의 형태로 끝이 없이 돌고도는 리스트가 원형 연결 리스트입니다.
이중 원형의 경우는 첫 번째 노드의 이전 노드가 꼬리를 가리키게 됩니다.

# 노드(Node) 구조

이중 연결리스트에서 사용되는 노드의 구조는 대략 아래와 같습니다.

```rb
class Node
	def initialize(value)
		data = value
		nextNode = nil	 다음노드
		prevNode = nil	 이전노드
	end
end
```

단일 연결 리스트에서는 다음 노드만 가리키기 때문에 한 개의 노드를 가지고 있었지만, 이중 연결리스트의 경우 다음/이전 노드를 위해 두 개의 노드를 가지게 됩니다.

원형 연결리스트는 무엇을 기반으로 하느냐에 따라 달라집니다. 원형 단일일 경우에는 단일 연결리스트의 노드를, 원형 이중일 경우 이중 연결리스트에 노드 구조를 사용하면 됩니다.

# 이중 연결리스트 구현 살펴보기

+ `insertFront()` : 리스트 처음에 노드를 추가
+ `insertBack()` : 리스트 끝에 노드를 추가 
+ `removeFront()` : 머리 노드 삭제 
+ `removeBack()` : 꼬리 노드 삭제

## insertFront()
리스트 처음에 노드를 추가하는 함수.

```rb
def insertFront() 
	 1. 새로운 노드 생성
	 2. 새로운 노드의 next가 현재 head(첫 번째 노드)를 가리키도록 한다.
	 3. head의 prev가 새로운 노드를 가리키도록 한다
	 4. 새로운 노드를 head로 갱신한다.
end
```

Step 1: 새로운 노드 생성
![doubly linked list insert front1](/images/devouring/week2/dlist-insertfront1.png)

Step 2 & 3: 링크 연결
![doubly linked list insert front2](/images/devouring/week2/dlist-insertfront2.png)

Step 4: head 갱신
![doubly linked list insert front3](/images/devouring/week2/dlist-insertfront3.png)

## insertBack()
리스트 끝에 노드를 추가하는 함수.

```rb
def insertBack() 
	 1. 새로운 노드 생성 (newNode)
	 2. head를 담을 임시 변수 생성(temp)
	 3. temp를 사용해 마지막 노드(tail)까지 이동
	 4. tail의 next가 newNode를 가리키도록 한다.
	 5. newNode의 prev가 tail을 가리키도록 한다.
end
```

Step 1 & 2: 새로운 노드 생성하고 head를 담을 임시 변수(temp) 생성
![doubly linked list insert back 1](/images/devouring/week2/dlist-insertback1.png)

Step 3: temp로 마지막 노드까지 이동
![doubly linked list insert back 2](/images/devouring/week2/dlist-insertback2.png)

Step 4 & 5: 링크 연결
![doubly linked list insert back 3](/images/devouring/week2/dlist-insertback3.png)

## removeFront()
리스트 맨 처음 노드를 삭제하는 함수.

```rb
def removeFront() 
	 1. head의 다음 노드를 임시 변수(temp)에 저장
	 2. temp의 prev 링크를 제거 (head를 가리키지 않도록)
	 4. head를 제거
	 3. temp를 head로 갱신
end
```

Step 1: head의 next를 임시 변수(temp)에 저장 
![doubly linked list remove front 1](/images/devouring/week2/dlist-removefront1.png)

Step 2: temp의 prev링크를 제거
![doubly linked list remove front 2](/images/devouring/week2/dlist-removefront2.png)

Step3 & 4: head를 제거하고 temp를 새로운 head로 갱신
![doubly linked list remove front 3](/images/devouring/week2/dlist-removefront3.png)

## removeBack()
리스트 마지막 노드를 삭제하는 함수.

```rb
def removeBack() 
	 1. head를 담을 임시 변수 생성 (temp)
	 2. temp를 사용해 마지막 노드 "이전" 까지 이동
	 3. 현재 temp.next는 마지막 노드를 가리킨다. 이 링크를 없앤다 (NULL 대입).
end
```

Step 1 & 2: head를 임시 변수(temp)에 담고 마지막 노드 '이전'까지 이동
![doubly linked list remove front 1](/images/devouring/week2/dlist-removefront1.png)

Step 3: `temp.next`의 링크를 제거
![doubly linked list remove back 1](/images/devouring/week2/dlist-removeback1.png)

# 생각해볼 문제
- 리스트 중간에 새로운 노드를 삽입하는 `insertAt(pos)` 함수 구현해보기.
- 리스트 중간 노드를 삭제하는 `removeAt(pos)` 함수 구현해보기.
- 여기서 의사코드로 살펴본 `removeBack()`과 `insertBack()` 함수의 시간 복잡도는 **O(N)** 입니다. 두 함수를 **O(1)**으로 구현해보세요.
- 이중 연결리스트 구현 후, 이를 기반으로 원형 이중 연결리스트를 구현해보세요.

# 문제 풀어보기
+ 백준:
  - [요세푸스 문제 (Silver V)](https://www.acmicpc.net/problem/1158)
  - [에디터 (Silver III)](https://www.acmicpc.net/problem/1406)
+ Leetcode:
  - [연결리스트 사이클 감지하기](https://leetcode.com/problems/linked-list-cycle/)
  - [서로 다른 두 연결리스트의 교차점 찾기](https://leetcode.com/problems/intersection-of-two-linked-lists/)
  - [연결리스트 팰린드롬](https://leetcode.com/problems/palindrome-linked-list/)