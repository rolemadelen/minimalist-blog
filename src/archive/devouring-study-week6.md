---
title:  "Devouring Study Week 6: BST & Red-Black Tree"
date:   "2021-04-04 07:00:00"
lang: 'ko'
---


[GitHub: 씹어먹는 스터디](https://github.com/devouring-algorithm-ds/algorithm-study-s1)

# 이진 탐색 트리(Binary Serach Tree, BST) 란

이진 탐색 트리는 **이진탐색(Binary Search)** 와 **연결리스트(Linked List)** 를 결합한 자료구조의 일종입니다.

이진 탐색 트리는 기본적으로 아래 네 가지의 조건을 만족합니다.
1. 모든 노드의 키는 유일하다.
2. 왼쪽 서브트리의 값들은 부모노드의 값보다 작다.
3. 오른쪽 서브트리의 값들은 부모노드의 값보도 크다.
4. 서브트리도 이진 탐색 트리이다.

![Binary Search Tree](/images/devouring/week6/tree-bst.jpg)

## BST 노드 삽입

1. 트리가 비어있으면 루트 노드를 추가
2. 값이 부모 노드 (현재의 루트 노드)보다 큰 경우,
    - 오른쪽 자식 노드가 없으면, 새로운 노드를 오른쪽에 추가
    - 오른쪽 자식 노드가 있으면, 오른쪽 노드로 이동, 2번부터 반복.
3. 값이 부모 노드보다 작은 경우,
    - 왼쪽 자식 노드가 없으면, 새로운 노드를 왼쪽에 추가
    - 왼쪽 자식 노드가 있으면, 왼쪽 노드로 이동, 2번부터 반복

```rb
def insert (data)
   트리가 비어있는 경우: 루트 노드 추가
  if( root == NULL )
    root = new Node(data);
    return;
  end

  Node temp = root;

  while True
     부모 노드보다 값이 큰 경우
    if( data > temp.data )
       오른쪽 자식 노드가 비어있으면, 오른쪽 노드 추가
      if ( temp.right == NULL ) {
        temp.right = new Node(data);
        break;
      end
       비어있지 않으면, 오른쪽 자식으로 이동
      temp = temp.right;
    else
       왼쪽 자식 노드가 비어있으면, 왼쪽 노드 추가
      if( temp.left == NULL ) 
        temp.left = new Node(data);
        break;
      end
       비어있지 않으면, 완쪽 자식으로 이동
      temp = temp.left;
    end
  end
end
```

## BST 탐색 
이진 탐색 트리, 이름에서도 알 수 있듯이 탐색을 위한 트리이니 탐색을 하는 방법도 살펴봐야겠죠.

루트보다 작은 값은 왼쪽, 큰 값은 오른쪽. 이 것만 기억하면 간단합니다.

1. 주어진 값이 루트와 같으면, 루트를 반환한다.
2. 주어진 값이 루트보다 작으면 왼쪽 서브 트리를 탐색한다.
3. 주어진 값이 루트보다 크면, 오른쪽 서브 트리를 탐색한다.
4. 값을 찾을때까지 위 과정을 반복한다.

```rb
def search (key)
  if root.key == key return true;
  
  temp = root;
  while(true) 
    break if temp==NULL 
    
    if key < temp.key 
      temp = temp.left;
    elsif key > temp.key
      temp = temp.right;
    else
      return true;
    end
  end

  return false;
end
```

## BST 노드 제거
BST에서 노드를 제거할 때 일어날 수 있는 경우는 세 가지가 있다.
1. 삭제하려는 노드가 리프 노드인 경우 
![Binary Search Tree : Remove Case 1](/images/devouring/week6/tree-bst-remove1.jpg)
2. 삭제하려는 노드가 왼쪽 또는 오른쪽 하나의 서브 트리를 가지는 경우
![Binary Search Tree : Remove Case 2](/images/devouring/week6/tree-bst-remove2.jpg)
3. 삭제하려는 노드가 두 개의 서브트리를 가지는 경우
![Binary Search Tree : Remove Case 3](/images/devouring/week6/tree-bst-remove3.jpg)

```rb
def remove(key) 
  removeNode(root, key);
end

 Helper function for remove(key)
def removeNode(root, key) 
  return root if root == NULL

   삭제하려는 key를 찾는다
  if (data < root.key ) 
    root.left = removeNode(root.left, key);
  elsif( key > root.key ) 
    root.right = removeNode(root.right, key);
  else 
     key를 가진 노드를 찾았고,
     자식 노드가 없거나 하나의 자식노드만을 가진 경우
    if( root.left == NULL ) 
      temp = root.right; 
      root = NULL
      return temp;
    elsif ( root.right == NULL ) 
      temp = root.left;
      root = NULL
      return temp;
    end

     두 개의 자식 노드를 갖는 경우, 오른쪽 서브트리에서 가장 작은 자식 노드를 찾는다
    temp = minValueNode(root.right);
     key노드는 삭제하고, 찾은 노드를 현 위치로 가져온다.
    root.key = temp.key;
    root.right = removeNode(root.right, temp.key);
  end

  return root;
end

 서브트리에서 가장 작은 노드를 찾는다
def minValueNode(node) 
  curr = node;
  while( curr && curr.left != NULL )
    curr = curr.left;
  end

  return curr;
end
```

## BST의 시간복잡도

위에서 소개한 각 연산의 시간복잡도는 전부 **O(h)** (`h` = 트리의 높이) 이다.

트리가 한쪽으로 쏠려있는 (skewed) 트리인 경우, 최악의 경우로 **O(n)** (n = 트리의 노드)의 시간복잡도를 가진다.
하지만 이는 정말 최악의 경우이며, 랜덤으로 들어오는 값의 평균을 계산했을 때 **O(log n)** 의 시간복잡도를 가지게된다.  

이런 최악의 경우를 대비해서, 스스로 균형을 잡는, 자가균형 이진탐색 트리가 존재합니다. 대표적으로 AVL 트리와 레드블랙 트리가 있습니다. 여기서는 레드블랙 트리에 대해서 알아보도록 하겠습니다.

# 레드블랙 트리(Red Black Tree)

**레드블랙 트리(Red Black Tree)** 는 자가균형 이진탐색 트리(Self-Balancing BST)로써 위에서 소개한 BST의 진화 버전으로, 스스로 균형을 잡기때문에 BST에서의 최악의 경우처럼 한쪽으로 노드가 몰리는 일은 없습니다. 그래서 `n`개의 노드가 있을때 삽입, 삭제, 검색의 시간복잡도는 전부 **Θ(log n)** 이 됩니다. 

## 레드블랙 트리의 특성

레드블랙 트리는 다음의 특성을 가진다.
1. 루트는 블랙이다.
2. 모든 리프(NULL)는 블랙이다.
3. 레드 노드의 자식은 반드시 블랙이다. 
4. 루트 노드에서 임의의 리프 노드에 이르는 경로에서 만나는 블랙 노드의 수는 모두 같다.

[![Red Black Tree](/images/devouring/week6/tree-bst-balance-rb.png)](https://abhiroop.github.io/Haskell-Red-Black-Tree/)

## 레드블랙 트리의 탐색

탐색의 경우 레드블랙 트리의 특성을 위반하는 일이 없기 때문에 기존 BST의 탐색을 그대로 사용하면 됩니다.

## 레드블랙 트리의 삽입

기본적으로 새로운 노드의 색상은 레드입니다. 단, 레드블랙 트리의 루트는 블랙이기 때문에, 첫 노드는 예외적으로 블랙입니다.

문제가 되는 부분은 새로운 노드 삽입 후, 레드 노드가 연속해서 붙게되는 경우입니다. 레드블랙 트리의 3번 규칙에 의해 한 개 이상의 레드노드가 연속해서 놓이면 균형이 무너지기 때문에 이를 해결해야 합니다.

여기서 우리는 두 가지의 방법을 선택할 수 있습니다. **색상 변환**(Recoloring) 또는 **회전**(Rotation).

새로운 노드 삽입 후, 새로운 노드와 상위 노드 2개를 묶어서 하나의 서브트리의 상태에 따라 두 방법 중 하나를 (혹은 둘 다) 사용하게 됩니다.
1. 부모 노드가 레드이고, 부모의 형제가 없거나 블랙일 때는 **회전**
2. 부모 노드가 레드이고, 부모의 형제가 레드일 때는 **색상 변환** 

# 다음 주 까지 해볼 것!
- Binary Search Tree 구현하기 
- Red Black Tree의 삽입 정확히 이해하기.
  + 언제 회전을 사용하고, 언제 색상 변경을 하는가.
  + 회전을 하는 방법.
  + 색상 변경의 방법.
- AVL 트리란 무엇이고 레드블랙 트리와 어떻게 다른가?
- **Bonus**: 시간이 되면 AVL트리를 구현해보세요.

# 풀어 볼 문제
- 이진탐색과 관련있는 문제
  + [백준](https://www.acmicpc.net/problemset?sort=ac_desc&algo=12) - 실버 랭크 문제들
  + [LeetCode](https://leetcode.com/problemset/all/?search=binary%20search%20tree) - Easy ~ Medium 문제들

# Reference
- [https://m.blog.naver.com/min-program/221231697752](https://m.blog.naver.com/min-program/221231697752)
- [Red Black Tree Visualizer](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)