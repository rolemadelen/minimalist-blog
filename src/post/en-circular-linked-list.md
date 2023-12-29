---
title: 'What is a Circular Linked List?'
date: '2020-08-13 07:00:00'
lang: 'en'
---

## What is a Circular Linked List?

> In this post, the term _list_ refers to the linked list.

In <router-link to="./eng-linked-list-singly">singly</router-link> and <router-link to="./eng-linked-list-doubly">doubly linked list</router-link>, we can track the end of list by finding a node that points to `nil`; doubly linked has one more of this node, which is `head.prev` like the figure below.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-example.png" alt="Linked list picture">
</div>

A circular list is a linked list that does not end; there is no `nll`. The last element of the node links back to its first node; for the case of a doubly linked list, `head.prev` 
is linked with the last node. This is perhaps why it's called a _circular_ linked list.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly.png" alt="Linked list picture">
</div>

## Structure of a Node

A circular linked list is a variation of a singly and a doubly linked list, thus the structure of a node in a circular list will be based on the type of a linked list we use.

### Circular Singly Linked List

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : next(nullptr) { data = val; }
    Node<T> *next;
    T data;
};
```

### Circular Doubly Linked List

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : next(nullptr), prev(nullptr) { data = val; }
    Node<T> *next;
    Node<T> *prev;
    T data;
};
```

## Implementation

Here's the skeleton of a circular linked list we're going to implement. For the full source code, please refer to the [link below](#fullcode).

```cpp
template <class T>
class CircularLinkedList 
{
  private:
    // ...
  public: 
    CircularLinkedList(T val);
    ~CircularLinkedList();

    void insert_front(T val);
    void insert_back(T val);

    void remove_front();
    void remove_back();

    // ...
};
```

## Constructor

### Circular Singly Linked List

In a singly linked list, most operations start by accessing the first node and traverse to insert, delete, or search an element. So we save the first element into a node called `head` or `first` (names don't matter, but these two are typically used).

Circular singly linked list is little different. We save the _last_ element into a node called `tail` or `last`; we don't use `head`.

```cpp
template <class T>
CircularLinkedList<T>::CircularLinkedList(int val)
{
  last = new Node(val);
  last->next = last;
  size = 1;
}
```

Having the `last` node serves as a great advantage in singly linked lists especially when inserting a new element at the end. 
We don't have to traverse the whole list; we can insert a new element at the end in constant time using `last->next`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-insert1.png" alt="circular singly list image">
</div>

<div class="divider"></div>

### Circular Doubly Linked List

A doubly linked list can traverse the list in both ways using `next` and `prev` pointers, thus there's no need to use the `last` node.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert1.png" alt="circular doubly linked list picture">
</div>

We use `head` and access the last node via `head->prev`.

```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node(val);
  head->next = head->prev = head;
  size = 1;
}
```

## Insert at the beginning

### Circular Singly Linked List

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
}
```

We need to let `newNode` point to the first element in the list which is `last->next`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-insert_at1.png" alt="circular doubly linked list picture">
</div>

Currently our `last->next` is pointing at A. We need to update this so that it's pointing at the new head, which is `newNode`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-insert_at2.png" alt="circular doubly linked list picture">
</div>

### Circular Doubly Linked List

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);

  newNode->next = head;
  newNode->prev = head->prev;
  head->prev->next = newNode;
  head->prev = newNode;
  head = newNode;
}
```

First connect `newNode->prev` and `newNode->next`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert_at3.png" alt="circular doubly linked list picture">
</div>

Our current `last->next` is pointing at the first element in the list. Update this so that its pointing at `newNode`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert_at4.png" alt="circular doubly linked list picture">
</div>

And lastly, update our current `head->prev` so that it points to `newNode`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert_at5.png" alt="circular doubly linked list picture">
</div>

## Insert at the end

### Circular Singly Linked List

At the beginning of this post, I mentioned that it's easier to insert an element at the end when we use the `tail` node. This is the part.

Here's the code.

```cpp
template <class T>
void CircularSinglyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);
  newNode->next = last->next;
  last->next = newNode;
  last = newNode;
}
```

`newNode` is going to be our new last, thus `newNode->next` should point to the first element of the list, which is current `last->next`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-insert2.png" alt="circular singly list image">
</div>

Now change the link for `last->next` so that its pointing `newNode`, which is our new last. And update `last`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-insert3.png" alt="circular singly list image">
</div>

### Circular Doubly Linked List

```cpp
template <class T>
void CircularDoublyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);

  Node<T> *last = head->prev;
  newNode->prev = last;
  newNode->next = head;
  last->next = newNode;
  head->prev = newNode;
}
```

Let's connect `newNode->prev` and `newNode->next` with current last and first node respectively.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert2.png" alt="circular doubly linked list picture">
</div>

Our current `last`, which is B, is pointing at the first element. Re-link this node and let it point to `newNode`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert3.png" alt="circular doubly linked list picture">
</div>

Last but not least, the previous node of our current `head` should now be the `newNode`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-insert4.png" alt="circular doubly linked list picture">
</div>

## Remove the first node

### Circular Singly Linked List

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_front()
{
  Node<T> *temp = last->next;
  last->next = last->next->next;

  delete temp;
}
```

The process of removing the first node is candid. Since `last->next` is pointing at the first node, we just update this link.

Assume we have a list with three elements like the below. 
<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

we can let our `last->next` point it its next which is `last->next->next`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-remove-at1.png" alt="circular doubly linked list picture">
</div>

### Circular Doubly Linked List

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_front()
{
  Node<T> *temp = head->next;
  head->next->prev = head->prev;
  head->prev->next = head->next;
  delete head;
  head = temp;
}
```

This one is also very straightforward. Perhaps, it's easier than the circular singly list.

Given a list like the below, let's remove the head node.
<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-remove-at0.png" alt="Linked list picture">
</div>

On the whole, delink all nodes connected to `head`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-remove-at1.png" alt="circular doubly linked list picture">
</div>

And update the `head` and we're done.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-doubly-remove-at2.png" alt="circular doubly linked list picture">
</div>
 
## Remove the last node

### Circular Singly Linked List

```cpp
template <class T>
void CircularSinglyLinkedList<T>::remove_back()
{
  Node<T> *curr = last->next;
  while (curr->next != last) 
  {
    curr = curr->next;
  }

  curr->next = curr->next->next;
  delete last;
  last = curr; 
}
```

We have a list like the below.
<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-remove-at0.png" alt="circular doubly linked list picture">
</div>

In order to remove `last`, we need `last->prev`. But we don't have `prev` in a singly list, thus we need to traverse the list from the beginning upto where `last->prev` is, which is B in the figure.

Now when we're at B, we update its link and let it point to the `head`.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-remove-at2.png" alt="circular doubly linked list picture">
</div>

Then we delete our current `last` and we're done.

<div style="text-align: center">
  <img src="/images/data-structure/linked-list/cll-singly-remove-at3.png" alt="circular doubly linked list picture">
</div>

### Circular Doubly Linked List

```cpp
template <class T>
void CircularDoublyLinkedList<T>::remove_back()
{
  Node<T> *temp = head->prev;
  head->prev->prev->next = head;
  head->prev = head->prev->prev;
  delete temp;
}
```

It looks complicated compare to the singly linked list, but it's actually much simpler.

First please take a look at the below and see which refers to which.

- `head->prev` == `last`
- `head->prev->prev` == `last->prev`
- `head->prev->prev->next` == `last->prev->next`


  <img src="/images/data-structure/linked-list/cll-doubly-remove-at3.png" alt="circular doubly linked list picture">

Hopefully it's not that confusing. We need to connect `last->prev->next` with the `head`. And 
change `head->prev`'s link from `last` to `last->prev`.