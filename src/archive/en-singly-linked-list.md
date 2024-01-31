---
title: 'What is a Singly Linked List?'
date: '2020-08-10 07:00:00'
updated: '2020-11-15 07:00:00'
lang: 'en'
---

# Singly Linked List?

Singly Linked List is a unidirectional list and its node contains a single pointer which references the next node somewhere in the memory.

![Linked List image](/images/data-structure/linked-list/linkedlist.png)

I made a separate class for the node and it holds following two member variables:
1. `next` pointer to reference the next node.
2. `data` to store node's value.

```cpp
template <class T>
class Node 
{
  private:
  public:
    Node(T data) : next(nullptr) { this->data = data; }

    Node<T> *next;
    T data;
};
```

# Implementation
Below is the specification file for the Singly Linked List used in this post.

```cpp
template <class T>
class SinglyLinkedList
{
  private: 
    Node<T> *head;
    Node<T> *tail;
    int size;

  public:
    SinglyLinkedList();
    SinglyLinkedList(T data);
    ~SinglyLinkedList();

    void push_front(T data);
    void push_back(T data);
    void push_at(int index, T data);

    void pop_front();
    void pop_back();
    void pop_at(int index);

    T peek_first();
    T peek_last();

    void traverse();

};
```

`tail` node is used to remember the end of the list. This is completely optional but by using it, we 
can insert an element at the end at a constant time.

Lets go through each member functions and see how it works.

# Initializing the List

There are many ways to initialize the list. Here, I utilized the default and parameterized constructor.

## Default Constructor

Initialize both pointers with `null` and `0` for the size.

```cpp
/* Default Constructor */
template <class T>
SinglyLinkedList<T>::SinglyLinkedList()
{
  head = tail = nullptr;
  size = 0;
}
```

## Parameterized Constructor 

Create a node with a value passed into the parameter, and let `head` and `tail` be that node.
Initialize the `size` to `1` not `0`.

![Linked List image](/images/data-structure/linked-list/sll-constructor-1.png)

```cpp
/* Constructor with one parameter */
template <class T>
SinglyLinkedList<T>::SinglyLinkedList(T data)
{
  head = new Node(data);
  tail = head;
  size = 1;
}
```

# Adding a data

We can add data either at the beginning, middle, or end of the list.

## Add to the beginning

1. Create a new node (`newNode`).
2. `newNode` points to the current head.
3. Update `head`.
4. (If you're using `tail`) update `tail`.

```cpp
template <class T>
void SinglyLinkedList<T>::push_front(T data) 
{
  Node<T> *temp = new Node<T>(data);
  temp->next = head;
  head = temp;

  if (tail == nullptr)
  {
    tail = head;
    tail->next = nullptr;
  }
}
```

## Add to the end

1. Create a new node (`newNode`).
2. let `tail->next` points to `newNode`.
3. Update `tail` so that `newNode` becomes the `tail`.

If you don't have `tail`, you'll have to traverse the list first to get to the last node of the list.

```cpp
template <class T>
void SinglyLinkedList<T>::push_back(T data) 
{
  Node<T> *temp = new Node<T>(data);
  tail->next = temp;
  tail = temp;
  tail->next = nullptr;
}
```

## Add in between

You're trying to insert a node at `index` which is given in the parameter.

1. Navigate to `index-1` node and let this be called `temp`.
2. Create a new node, `newNode`.
3. Insert `newNode` in between `temp` and `temp->next`.

```cpp
template <class T>
void SinglyLinkedList<T>::push_at(int index, T data)
{
  Node<T> *temp = head;
  for (int i=0; i<index-1; ++i)
  {
    temp = temp->next;
  }

  Node<T> *newNode = new Node<T>(data);
  newNode->next = temp->next;
  temp->next = newNode;
}
```

# Deleting a data

## Delete from beginning

Deleting process is quite candid.

1. Save `head` into a temporary space.
2. Move `head` to its `next`.
3. Delete `head` saved in the temporary space.

```cpp
template <class T>
void SinglyLinkedList<T>::pop_front()
{
  Node<T> *temp = head;
  head = head->next;
  delete temp;
}
```

## Delete from end

1. Navigate to the node one previous to the last; even if you have `tail`, you need `tail->prev` which doesn't exist in singly linked list.
2. Deallocate the last node.
3. Update `tail` (if you're using it).

```cpp
template <class T>
void SinglyLinkedList<T>::pop_back()
{
  if (size == 1)
  {
    delete head;
    head = tail = nullptr;
    size = 0;
    return;
  }

  Node<T> *temp = head;
  for (int i=1; i<size-1; ++i)
  {
    temp = temp->next;
  }

  delete temp->next;
  temp->next = nullptr;
  tail = temp;
}
```

## Delete from middle

The process is exactly same as one deleting from the end. Except, you navigate one previous to the `index` not the last node.

```cpp
template <class T>
void SinglyLinkedList<T>::pop_at(int index)
{
  Node<T> *temp = head;
  for (int i=0; i<index-1; ++i)
  {
    temp = temp->next;
  }

  Node<T> *temp2 = temp->next;
  temp->next = temp->next->next;
  delete temp2;
}
```

# Traversing a linked list

Print all data in the list.
The process is straightforward. You start from `head` and loop it until `head->next` is not `tail`.
Don't forget to print last `tail`'s data.

```cpp
template <class T>
void SinglyLinkedList<T>::traverse()
{
  Node<T> *temp = head;
  while(temp->next != nullptr) 
  {
    cout << temp->data << ' ';
    temp = temp->next;
  }

  cout << temp->data << endl;
}
```