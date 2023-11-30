---
title: '[Ruby] What is a Queue?'
date: '2020-08-20 07:00:00'
---

# What is Queue

Queue is a collection of items where inserting (_enqueue_) and deleting (_dequeue_) occurs at the different end. This particular order where operations are performed is called FIFO (First-In First-Out).

![](/images/data-structure/queue/queue-1.png)

Think of a grocery store's cashier line. Customers are served on a first-come, first-served basis. This is Queue. First-In, First-Out.

So enqueue occurs only at the one end. And same goes with the dequeue.

## Operations

**First-In First Out** (FIFO).

- `enqueue (data)` - inserts a `data` at the end of the list.
- `dequeue` - removes the data in the front of the list.
- `empty?` - returns `true` if the list is empty, else `false`.
- `front` - returns the `data` in the front of the list.

## Applications

Queue is used in a place where data must be processed in timed order.

- BFS
- Priority Queue
- Cache Implementation
- Process Manager
- Printer queues

## Implementation

### Array
```rb
class Queue
  def initialize (size)
    @capacity = size
    @queue = Array.new(@capacity)
    @size = 0
  end

  def enqueue (data)
    if @size == @capacity
      puts "The queue is full."
      @capacity <<= 1
    end

    @queue[@size] = data
    @size += 1
  end

  def dequeue
    if @size == 0
      puts "The queue is empty.."
      return nil
    end

    val = @queue[0]
    @queue.shift()
    @size -= 1
    val
  end

  def empty?
    @size == 0
  end

  def front
    if @size == 0
      puts "The queue is empty.."
      return nil
    end

    @queue[0]
  end
end
```

### Linked List
```rb
class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
    @next = nil
  end
end

class Queue
  def initialize
    @front = nil
    @rear = nil
    @size = 0
  end

  def enqueue(data)
    new_node = Node.new(data)

     rear |- - - - -| front
    if @size == 0
      @rear = @front = new_node
      @rear.next = @front
    else
      new_node.next = @rear
      @rear = new_node
    end

    puts "enqueue {data}"
    @size += 1
  end

  def dequeue
    data = @front.data

    curr = @rear
    while curr.next != @front
      curr = curr.next
    end
    curr.next = nil
    @front = curr

    puts "dequeue {data}"
    @size -= 1
  end

  def front
    @front.data
  end

  def rear
    @rear.data
  end
end
```
