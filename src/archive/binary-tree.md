---
title: '[Ruby] What is a Binary Tree?'
date: '2020-09-20 07:00:00'
lang: 'en'
---

# Binary Tree
Each node has three attributes: `value`, `left_child`, and `right_child`

```rb
class Node
  attr_accessor :value, :left, :right

  def initialize(value)
    @value = value 
    @left = nil 
    @right = nil
  end 
end 

class BinaryTree
  attr_reader :root
  def initialize(value)
    @root = Node.new(value)
  end
end
```

## Insertion
```rb
def insert_left(value)
  if @root.left == nil
    @root.left = Node.new(value)
  else
    new_node = Node.new(value)
    new_node.left = @root.left 
    @root.left = new_node
  end 
end

def insert_right(value)
  if @root.right == nil
    @root.right = Node.new(value)
  else
    new_node = Node.new(value)
    new_node.right = @root.right 
    @root.right = new_node 
  end
end
```

## Traversal
- Depth-First-Search (DFS)
  + "is an algorithm for traversing or searching tree data structure. 
  One starts at the root and explores as far as possible along each branch 
  before backtracking." — Wikipedia
- Breadth-First-Search (BFS)
  + "is an algorithm for traversing or searching tree data structure. 
  It starts at the tree root and explores the neighbor nodes first, 
  before moving to the next level neighbors.” — Wikipedia

### DFS
####  pre-order
```rb
def preorder(node)
  return if node == nil
  puts node.root.value
  preorder(node.root.left)
  preorder(node.root.right)
end
```

#### in-order 
```rb
def inorder(node)
  return if node == nil
  preorder(node.root.left)
  puts node.root.value
  preorder(node.root.right)
end
```

#### post-order
```rb
def postorder(node)
  return if node == nil
  preorder(node.root.left)
  preorder(node.root.right)
  puts node.root.value
end
```

### BFS
```rb
def bfs()
  q = []
  q << self

  while !q.empty? do 
    curr = q.shift
    puts curr.root.value 

    if curr.root.left 
      q << curr.root.left 
    end
    if curr.root.right 
      q << curr.root.right 
    end
  end
end
```
