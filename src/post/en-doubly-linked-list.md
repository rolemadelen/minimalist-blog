---
title: 'What is a Doubly Linked List?'
date: '2020-08-12 07:00:00'
---

# What is Doubly Linked List?
> In this post, the term _list_ refers to the linked list.

Doubly Linked List is a linear data structure where each node contains two pointers: `prev` and `next`. 

`next` pointer is used to reference the node one next to the current node. `prev` is from the word _preivous_; `B->prev` refers to the node one previous to `B`, which is `A` in the figure below.

![Linked List image](/images/data-structure/linked-list/dll.png)

# Structure of a Node

As I mentioned above, a node contains two pointers in doubly list, `prev` and `next`. 

```cpp
template <class T>
class Node 
{ 
  private:
  public:
    Node<T>(T val) : prev(nullptr), next(nullptr) { data = val; }
    Node<T> *prev;
    Node<T> *next;
    T data;
};
```

In singly list, we were only able to move in one direction; in doubly list, however, we can traverse a list in either directions using these two pointers.

# Implementation

Here's the specification of the doubly linked list we are going to implement at this post.

```cpp
template <class T>
class DoublyLinkedList 
{
  private: 
    Node<T> *head;
    int capacity;

  public: 
    DoublyLinkedList(int val);
    ~DoublyLinkedList();

    void init(T val);
    void insert_back(int val);
    void insert_front(int val);
    void insert_at(int index, int val);

    void remove_back();
    void remove_front();
    void remove_at(int index);

    void link(Node<T> *a, Node<T> *b);
    void print();
};
```

Let's go through each member functions and see how it's implemented.

# Constructor
```cpp
template <class T>
DoublyLinkedList<T>::DoublyLinkedList(int val)
{
  head = new Node<T>(val);
  tail = head;
  head->next = tail;
  tail->prev = head;
  head->prev = tail->next = nullptr;
}
```

![constructor](/images/data-structure/linked-list/dll-constructor.png)

This constructor takes an argument and initializes the list with a node, which is `head`.

# Inserting a node

I'll be using the helper function called `link(curr, newNode)`.

```cpp
template <class T>
void DoublyLinkedList<T>::link(Node<T> *curr, Node<T> *newNode)
{
  curr->next = newNode;
  newNode->prev = curr;
}
```

## insert_back
```cpp
template <class T>
void DoublyLinkedList<T>::insert_back(int val) 
{
  Node<T> *newNode = new Node(val);
  if (capacity == 1)
  {
    link(head, newNode);
  }
  else 
  {
    link(tail, newNode);
  }
  tail = newNode;
}
```

Keep in mind that I'm using two nodes, `head` and `tail`.

When the list contains a singly node, the `head`, we link a `newNode` with `head`. This is the first `if` condition.

![newNode insert](/images/data-structure/linked-list/dll-insert1.png)

When the list contains more than one node, we simply connect the `tail` with the `newNode`. This is the `else` part.
Then, we update the tail.

![insert 2](/images/data-structure/linked-list/dll-insert2.png)

## insert_front
```cpp
template <class T>
void DoublyLinkedList<T>::insert_front(int val) 
{
  Node<T> *newNode = new Node(val);
  if (capacity == 1)
  {
    link(newNode, tail);
  }
  else
  {
    link(newNode, head);
  }
  head = newNode;
}
```

The `insert_front` works exactly the same as the `insert_back`.
We just change the operation done on `head` to `tail` and vice versa.
And update the `head` to `newNode` instead of the `tail`.

## insert_at

We can insert a new node in between two nodes using the `insert_at` function.
Parameters are `index`, a position of a node to insert, and `val`, a data for a node to hold.

The index is **zero-based**.

```cpp
template <class T>
void DoublyLinkedList<T>::insert_at(int index, int val) 
{
  if (index <= 0) 
  {
    insert_front(val);
  }
  else if (index >= capacity) 
  {
    insert_back(val);
  }
  else 
  {
    Node<T> *temp = head;
    for (int i=0; i<index; ++i) 
    {
      temp = temp->next;
    }

    Node<T> *newNode = new Node(val);
    temp->prev->next = newNode;
    newNode->prev = temp->prev;
    link(newNode, temp);
  }
}
```

I handled following errors, *negative index* and *index out bounds*, 
by simply calling functions we implemented earlier:
`insert_front(..)` and `insert_back(..)`

Now let's look at the case where we're actually inserting a node in between two nodes.

First, we navigate to the node positioned at `index`. 
```cpp
  Node<T> *temp = head;
  for (int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```

So if `index = 1`, we will be at the second element (**B**) in the list like the figure below.

![](/images/data-structure/linked-list/dll-insert_at1.png)

Now connect `newNode` with a node in previous of `temp`.

```cpp
  temp->prev->next = newNode;
  newNode->prev = temp->prev;
```

![](/images/data-structure/linked-list/dll-insert_at2.png)

And finally connect `newNode` with `temp` so that it is placed at the `index`.
```cpp
  link(newNode, temp);
```

![](/images/data-structure/linked-list/dll-insert_at3.png)

And we're done. This figure above, however, looks very messy so lets clean it up, and you'll see 
clearly that the `newNode` is placed at the `index`.

![](/images/data-structure/linked-list/dll-insert_at4.png)

# Removing a node

## remove_back
```cpp
template <class T>
void DoublyLinkedList<T>::remove_back()
{
  if (capacity == 1)
  {
    delete head;
    head = tail = nullptr;
    capacity = 0;
  }
  else
  {
    Node<T> *temp = tail;
    tail = tail->prev;
    delete temp;
    tail->next = nullptr;

    --capacity;
  }
}
```

Let's suppose that we have a list like the below and we're trying remove the tail.

![](/images/data-structure/linked-list/dll-remove1.png)

It's actually very easy. We just move the `tail` to its previous, `tail->prev`, and delete the old tail.

![](/images/data-structure/linked-list/dll-remove2.png)

## remove_front

```cpp
template <class T>
void DoublyLinkedList<T>::remove_front()
{
  if (capacity == 1)
  {
    delete head;
    head = tail = nullptr;
    capacity = 0;
  }
  else
  {
    Node<T> *temp = head;
    head = head->next;
    delete temp;
    head->prev = nullptr;

    --capacity;
  }
}
```

This one is exactly same as the above except that we're working with the `head` not the `tail`.

![](/images/data-structure/linked-list/dll-remove3.png)

## remove_at

```cpp
template <class T>
void DoublyLinkedList<T>::remove_at(int index)
{
  if (index <= 0) 
    remove_front();
  else if (index >= (capacity-1)) 
    remove_back();
  else 
  {
    Node<T> *temp = head;
    for(int i=0; i<index; ++i) 
    {
      temp = temp->next;
    }

    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    delete temp;
  }
}
```

Let's assume that we have a list like the following and we're trying to delete the middle element, *data*.

![](/images/data-structure/linked-list/dll-remove1.png")

We first navigate to that node we're trying to delete.

```cpp
  Node<T> *temp = head;
  for(int i=0; i<index; ++i) 
  {
    temp = temp->next;
  }
```


Then delete its node after re-linking its `prev` and `next`.

```cpp
  temp->prev->next = temp->next;
  temp->next->prev = temp->prev;
  delete temp;
```


![three nodes](/images/data-structure/linked-list/dll-remove_at1.png)