---
title: '[Ruby] What is a Stack?'
date: '2020-08-17 07:00:00'
---

# What is Stack?
Stack is an ordered collection of items which follows a particular order in which the operations are performed. 
This ordering principle is called **LIFO**, Last-In First-Out, or **FILO**, First-In Last-Out.

The _base_ refers to the bottom of the stack where the oldest item resides, and the _top_ refers to the other end where addition and removal of data occurs.

![](/images/data-structure/stack/stack-1.png)

Think of a stack of books. When books are stacked, you can only see the cover of the one at the top. In order to see the next one, you need to remove the book on top of the stack. Similarly, you'll need to take out everything in order to see `book 1` in the figure above.

So most recently added book, or data, is located at the top, while the oldest is at the bottom.

## Operations
- `push (data)` - inserts `data` at the top of the stack.
- `pop` - removes a data at the top of the stack.
- `top` - returns the data at the top of the stack.
- `empty?` - returns true if the stack is empty, else return false.

## Applications
- Balanced Parenthesis
- Balanced Symbols
- Evaluating postfix experessions.

## Implementation

### Array based
```rb
class Stack
  def initialize (size)
    @capacity = size
    @stack = Array.new(@capacity)
    @size = 0
  end

  def push (data)
    if @size == @capacity
      puts "The stack is full. Stack resized ({@capacity} -> {@capacity * 2})"
      @capacity *= 2
    end

    @stack[@size] = data
    @size += 1
  end

  def pop
    if @size==0
      puts "The stack is empty.."
      return nil
    end

    @size -= 1
    val = @stack.fetch(@size)
  end

  def top
    if @size==0
      puts "The stack is empty.."
      return nil
    end

    @stack.fetch(@size-1)
  end

  def empty?
    @size==0
  end

  def show
    if @size == 0
      puts "The stack is empty.."
      return nil
    end

    0.upto(@size-1) { |i| print "{@stack.fetch(i)} " }
    puts
  end
end
```

### Linked List based
```rb
class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
    @next = nil
  end
end

class Stack
  def initialize
    @top = nil
    @size = 0
  end

  def push(data)
    new_node = Node.new(data)

    if @top == nil
      @top = new_node
    else
      new_node.next = @top
      @top = new_node
    end

    puts "push {data}"
    @size += 1
  end

  def pop
    if is_empty?
      puts "Underflow.."
    else
      data = @top.data
      puts "pop {data}"
      @top = @top.next
      @size -= 1
    end
  end

  def top
    @top.data
  end

  def is_empty?
    @size == 0
  end

  def print_stack
    curr = @top
    while curr.next != nil
      print "{curr.data} -> "
      curr = curr.next
    end
    puts curr.data
  end
end
```