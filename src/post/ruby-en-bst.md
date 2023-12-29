---
title: '[Ruby] What is a Binary Search Tree?'
date: '2020-08-20 07:00:00'
lang: 'en'
---

# What is Binary Search Tree?
- "A Binary Search Tree is sometimes called ordered or sorted binary trees, 
  and it keeps its values in sorted order, so that lookup and other operations 
  can use the principle of binary search"

The important property of BST
- `node`'s value is larger than the value of the offspring of its `left child` 
but smaller than the `right child`.

# Operations
## Insert
```rb
class Node 
  attr_accessor :left, :right, :data

  def initialize(data, left=nil, right=nil) 
    @left = left 
    @right = right 
    @data = data
  end
end

class BinaryTree 
  def initialize(data)
    @root  = Node.new(data)
  end

  def insert(data) 
    @root = insertRecursive(@root, data)
  end

  def insertRecursive(node, data) 
    return Node.new(data) if (node == nil) 

    if data > node.data 
      node.right = insertRecursive(node.right, data)
    elsif data < node.data
      node.left = insertRecursive(node.left, data) 
    else 
      return node 
    end

    return node
  end
end
```

## Search (find)
```rb
def search(value) 
  node = @root 

  while true 
    return nil if node == nil 
    return node if node.data == value

    if value > node.data 
      node = node.right
    else 
      node = node.left
    end
  end
end
```

## Delete

Consider 3 cases 

### A node with no children (leaf node)

Simply remove it. We don't need to reorganize the tree.

```rb
  return nil if curr.left == nil and curr.right == nil 
```

### A node with just one child (left or right)

```rb
  return curr.left if curr.right == nil  
  return curr.right if curr.left == nil 
```

### A node with two children 
- Find the smallest node from the right offstring and replace the current node with it.

```rb
  smallest_data = find_min(curr.right)
  curr.data = smallest_data  
  curr.right = deleteRecursive(curr.right, smallest_data) 
  return curr
```

## Delete: Full Implementation
```rb
 def find_min(node)
    return node.data if node.left == nil
    find_min(node.left)
  end

  def delete(data) 
    @root = deleteRecursive(@root, data)
  end

  def deleteRecursive(curr, data) 
    return nil if curr == nil 
  
    if data == curr.data 
      return nil if curr.left == nil and curr.right == nil 
      return curr.left if curr.right == nil  
      return curr.right if curr.left == nil 

      smallest_data = find_min(curr.right)
      curr.data = smallest_data  
      curr.right = deleteRecursive(curr.right, smallest_data) 
      return curr
    end

    if data < curr.data
      curr.left = deleteRecursive(curr.left, data)
      return curr
    end

    curr.right = deleteRecursive(curr.right, data) 
    return curr
  end
```

## Depth First Search
```rb
def preorder(node = @root)
  return if (node == nil) 
  print "{node.data} "
  preorder(node.left)
  preorder(node.right)
end

def inorder(node = @root) 
  return if node == nil 
  inorder(node.left)
  print "{node.data} "
  inorder(node.right)
end

def postorder(node = @root) 
  return if node == nil 
  postorder(node.left)
  postorder(node.right)
  print "{node.data} "
end
```

## Breadth First Search
```rb
def bfs
  return nil if @root == nil
  q = [@root]

  while !q.empty? 
    neighbor = q.shift
    print "{neighbor.data} "

    (q << neighbor.left) if neighbor.left != nil 
    (q << neighbor.right) if neighbor.right != nil 
  end
end
```